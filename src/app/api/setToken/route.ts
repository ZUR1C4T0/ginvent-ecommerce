import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
    const { token } = await req.json()
    if (!token) {
        return new Response('No token provided', { status: 400 })
    }
    return new Response('OK', {
        status: 200,
        headers: {
            'Set-Cookie': `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${36000}`,
        },
    })
}
