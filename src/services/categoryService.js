import axios from "axios";

export function getCategories() {
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`).then((response) => response);
}