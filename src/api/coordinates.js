export const getRoute = async (fromLng, fromLat, toLng, toLat) => {
    const response = await fetch(
        `http://router.project-osrm.org/route/v1/driving/${fromLng},${fromLat};${toLng},${toLat}`
    )
    return await response.json()
}