import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coordinates: [
        {
            key: 1,
            from: {
                lat: 59.84660399,
                lng: 30.29496392
            },
            to: {
                lat: 59.82934196,
                lng: 30.42423701
            }
        },
        {
            key: 2,
            from: {
                lat: 59.82934196,
                lng: 30.42423701
            },
            to: {
                lat: 59.82761295,
                lng: 30.41705607
            }
        },
        {
            key: 3,
            from: {
                lat: 59.83567701,
                lng: 30.38064206
            },
            to: {
                lat: 59.84660399,
                lng: 30.29496392
            }
        },
        {
            key: 4,
            from: {
                lat: 59.84660399,
                lng: 30.29496392
            },
            to: {
                lat: 59.82761295,
                lng: 30.41705607
            }
        },
        {
            key: 5,
            from: {
                lat: 59.83567701,
                lng: 30.38064206
            },
            to: {
                lat: 59.84660399,
                lng: 30.29496392
            }
        }
    ],
    polyline: [],
}

const coordinates = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        GET_ROUTE_SUCCEEDED: (state, action) => {
            state.polyline = action.payload.polyline
        }
    }
})

export const { GET_ROUTE_SUCCEEDED } = coordinates.actions

export default coordinates.reducer