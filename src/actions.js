import { createAction } from "@reduxjs/toolkit"

export const getRouteRequested = createAction('GET_ROUTE_REQUESTED')
export const getRouteSucceeded = createAction('GET_ROUTE_SUCCEEDED')
export const getRouteFailed = createAction('GET_ROUTE_FAILED')