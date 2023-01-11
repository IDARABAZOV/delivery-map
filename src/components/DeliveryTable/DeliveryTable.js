import React from "react";
import { Table, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";

const columns = [
    {
        title: 'From (lat / lng)',
        render: (_, { from }) => (
            <p>{from.lat.toFixed(2)} / {from.lng.toFixed(2)}</p>
        )
    },
    {
        title: 'To (lat / lng)',
        render: (_, { to }) => (
            <p>{to.lat.toFixed(2)} / {to.lng.toFixed(2)}</p>
        )
    }
]

function DeliveryTable() {
    const { coordinates, polyline, waypoints } = useSelector(store => store.coordinates)
    const dispatch = useDispatch()

    console.log(polyline, waypoints)

    return (
        <>
            <Typography.Title>Delivery Table</Typography.Title>
            <Table
                loading={coordinates ? false : true}
                pagination={false}
                dataSource={coordinates}
                columns={columns}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            dispatch({type: 'GET_ROUTE_REQUESTED', payload: record})
                            // dispatch({ type: 'GET_ROUTE_SUCCEEDED' })
                        }
                    }
                }}
            />
        </>
    )
}

export default DeliveryTable;