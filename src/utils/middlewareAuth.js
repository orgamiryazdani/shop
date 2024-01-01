import { toStringCookies } from "./toStringCookies";

export async function middlewareAuth(req) {
    const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${toStringCookies(req.cookies)}`,
        },
        credentials: 'include',
    })
        .then(res => res.json());
    return user
}