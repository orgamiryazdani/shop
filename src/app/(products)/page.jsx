import { getProducts } from "@/services/productService"
import ProductCard from "./products/ProductCard";
import queryString from "query-string";

export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
  const search = queryString.stringify(searchParams)
  const { data } = await getProducts({
    limit: 8, offset: 0,
    search
  },
  );

  return (
    <ProductCard initialProducts={data} />
  )
}

export default Products