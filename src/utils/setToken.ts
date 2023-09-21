export async function setToken(token: string) {
    fetch('/api/setToken', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
    })
}
