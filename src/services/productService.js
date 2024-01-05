import axios from "axios";

export function getProducts() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`).then((response) => response);
}