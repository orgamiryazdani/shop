import http from "./httpService";

export function getProducts(qs) {
    return http.get(`/products?${qs.search}&offset=${qs.offset}&limit=${qs.limit}`)
        .then(({data}) => data);
}

export function getOneProducts(id) {
    return http.get(`/products/${id}`)
        .then((response) => response);
}