import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export const config = {
    matcher: '/account/:path*',
}

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const secret = new TextEncoder().encode(atob("" + process.env.JWT_SECRET))

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    try {
        const payload = await jwtVerify(token, secret)
        console.log(payload.payload)
    } catch (error) {
        console.error(error)
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}
