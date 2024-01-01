export function toStringCookies(cookies) {
    const accessTokenCookie = cookies.get('accessToken');
    return accessTokenCookie ? accessTokenCookie.value : null;
}