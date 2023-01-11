import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import coordinates from "./reducers/coordinates.js"
import rootSaga from "../sagas/sagas.js";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        coordinates
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store;