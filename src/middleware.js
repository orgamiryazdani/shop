import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

export async function middleware(req) {
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    const { name, email } = await middlewareAuth(req)
    if (pathname.startsWith("/profile")) {
        if (!name && !email) return NextResponse.redirect(new URL("/signin", url))
    }
    if (pathname.startsWith("/signin") || pathname.startsWith("/signup")) {
        if (name && email) return NextResponse.redirect(new URL("/", url))
    }
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/profile/:path*",
        "/signin/:path*",
        "/signup/:path*"
    ]
}