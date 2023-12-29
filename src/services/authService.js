import http from "./httpService";

export function signIn({ data }) {
    return http.post("/auth/login", data).then((response) => response);
}

export function signUp(data) {
    console.log(data, avatar);
    return http.post("/users/", data,avatar ).then((response) => response);
}