import { all, call, put, takeEvery } from "redux-saga/effects"
import { getRoute } from "../api/coordinates"
import PolyUtil from "polyline-encoded"

import { getRouteSucceeded, getRouteRequested, getRouteFailed } from "../actions"

function* getRouteWorker(action) {
    try {
        const { from, to } = action.payload
        const { routes } = yield call(getRoute, from.lng, from.lat, to.lng, to.lat)
        const polyline = yield PolyUtil.decode(routes[0].geometry)
        yield put(getRouteSucceeded(polyline))
    } catch (e) {
        console.log(e)
        yield put(getRouteFailed('Нет соединения с интернетом'))
    }
}

function* getRouteWatcher() {
    yield takeEvery(getRouteRequested, getRouteWorker)
}

export default function* rootSaga() {
    yield all([
        getRouteWatcher()
    ])
}