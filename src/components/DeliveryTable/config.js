export const columns = [
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