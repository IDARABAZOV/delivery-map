import React, { useCallback, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function Display({ map }) {
    const [position, setPosition] = useState(() => map.getCenter())

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    })

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={() => {
                map.flyTo([59.84660399, 30.29496392], 13)
            }}>Fly!!!</button>
        </p>
    )
}

function Map({ map, setMap }) {

    return (
        <>
            <MapContainer
                center={{ lat: 59.846, lng: 30.294 }}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%' }}
                ref={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            {map ? <Display map={map} /> : null}
        </>
    )
}

export default Map;