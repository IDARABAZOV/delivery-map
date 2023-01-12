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

function DeliveryTable({ map }) {
    const { coordinates } = useSelector(store => store.coordinates)
    const dispatch = useDispatch()

    return (
        <>
            <Typography.Title>Delivery Table</Typography.Title>
            {map ? (
                <Table
                    loading={coordinates ? false : true}
                    pagination={false}
                    dataSource={coordinates}
                    columns={columns}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                dispatch({ type: 'GET_ROUTE_REQUESTED', payload: record })
                                map.flyTo(record.from, 13)
                            }
                        }
                    }}
                />
            ) : null}

        </>
    )
}

export default DeliveryTable;