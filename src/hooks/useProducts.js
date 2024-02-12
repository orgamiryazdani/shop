import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/productService";

export default function useProducts(search) {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts(search),
    });

    const products = data || [];

    return { isLoading, products, refetch };
}