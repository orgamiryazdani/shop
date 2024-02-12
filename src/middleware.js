import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

export async function middleware(req) {
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    const { name, email } = await middlewareAuth(req)
    if (pathname.startsWith("/profile")) {
        if (!name && !email) return NextResponse.redirect(new URL("/auth/signin", url))
    }
    if (pathname.startsWith("/auth/signin") || pathname.startsWith("/auth/signup")) {
        if (name && email) return NextResponse.redirect(new URL("/home/products", url))
    }
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/profile/:path*",
        "/auth/signin/:path*",
        "/auth/signup/:path*"
    ]
}