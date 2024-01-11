import axios from "axios";

export function getProducts({ offset = 0, limit = 8 }) {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?offset=${offset}&limit=${limit}`).then((response) => response);
}