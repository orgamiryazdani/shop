import http from "./httpService";

export function getCategories() {
    return http.get(`/categories`).then((response) => response);
}