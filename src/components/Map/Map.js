import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { Polyline, Marker } from "react-leaflet";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function Map({ setMap }) {
    const polyline = useSelector(store => store.coordinates.polyline)

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
                {
                    polyline.length ? (
                        <>
                            <Marker position={polyline[0]} />
                            <Polyline pathOptions={{ color: 'blue' }} positions={polyline} />
                            <Marker position={polyline[polyline.length - 1]} />
                        </>
                    ) : null
                }
            </MapContainer>
        </>
    )
}

export default Map;