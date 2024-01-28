import axios from "axios";

export function getProducts(qs) {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?${qs.search}&offset=${qs.offset}&limit=${qs.limit}`)
        .then((response) => response);
}

export function getOneProducts(id) {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`)
        .then((response) => response);
}