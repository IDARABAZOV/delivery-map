import { all, call, put, takeEvery } from "redux-saga/effects"
import { getRoute } from "../api/coordinates"
import PolyUtil from "polyline-encoded"

import { GET_ROUTE_SUCCEEDED } from "../redux/reducers/coordinates"

function* getRouteWorker(action) {
    try {
        const { from, to } = action.payload
        const { routes, waypoints } = yield call(getRoute, from.lat, from.lng, to.lat, to.lng)
        const polyline = yield PolyUtil.decode(routes[0].geometry)
        yield put(GET_ROUTE_SUCCEEDED({ polyline, waypoints }))
    } catch (e) {
        console.log(e)
    }
}

function* getRouteWatcher() {
    yield takeEvery('GET_ROUTE_REQUESTED', getRouteWorker)
}

export default function* rootSaga() {
    yield all([
        getRouteWatcher()
    ])
}