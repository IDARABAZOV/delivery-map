import React, { useState } from "react";
import { Table, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./DeliveryTable.css"

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
    const [selectedRow, setSelectedRow] = useState(null)
    const { coordinates } = useSelector(store => store.coordinates)
    const dispatch = useDispatch()

    return (
        <>
            <Typography.Title>Доставка</Typography.Title>
            {map ? (
                <Table
                    loading={coordinates ? false : true}
                    pagination={false}
                    dataSource={coordinates}
                    columns={columns}
                    rowClassName={(record) => {
                        return record.key === selectedRow ? 'selected-row' : ''
                    }}
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                dispatch({ type: 'GET_ROUTE_REQUESTED', payload: record })
                                map.fitBounds([
                                    record.from,
                                    record.to
                                ], { padding: [10, 10] })
                                setSelectedRow(record.key)
                            }
                        }
                    }}
                />
            ) : null}

        </>
    )
}

export default DeliveryTable;