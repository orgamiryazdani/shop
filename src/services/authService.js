import http from "./httpService";

export function signIn({ data }) {
    return http.post("/auth/login", data).then((response) => response);
}

export function signUp({ data, avatar }) {
    const value = { ...data, avatar };
    return http.post("/users/", value).then((response) => response);
}

export function getProfile() {
    return http.get("/auth/profile").then((response) => response);
}