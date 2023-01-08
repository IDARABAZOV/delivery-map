import React from "react";
import { Table, Typography } from "antd";

const dataSource = [
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
]

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
    return (
        <>
            <Typography.Title>Delivery Table</Typography.Title>
            <Table
                pagination={false}
                dataSource={dataSource}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            console.log('Row index', rowIndex)
                            console.log('record', record)
                        }
                    }
                }}
            />
        </>
    )
}

export default DeliveryTable;