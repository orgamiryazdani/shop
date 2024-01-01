import { NextResponse } from "next/server";
import { middlewareAuth } from "./utils/middlewareAuth";

export async function middleware(req) {
    const url = req.url;
    const pathname = req.nextUrl.pathname;
    if (pathname.startsWith("/profile")) {
        const { name, email } = await middlewareAuth(req)
        if (!name && !email) return NextResponse.redirect(new URL("/signin", url))
    }
}

export const config = {
    matcher: ["/admin/:path*", "/profile/:path*"]
}