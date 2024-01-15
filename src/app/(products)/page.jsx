import { getProducts } from "@/services/productService"
import ProductCard from "./products/ProductCard";
import queryString from "query-string";

export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
  const { data } = await getProducts({
    limit: 8, offset: 0,
    search: queryString.stringify(searchParams),
  },
  );

  return (
    <ProductCard initialProducts={data} />
  )
}

export default Products