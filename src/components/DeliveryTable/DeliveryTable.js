import React, { useState } from "react";
import { Table, Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./DeliveryTable.css"
import { getRouteRequested } from "../../actions";
import { columns } from "./config";



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
                                dispatch(getRouteRequested(record))
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