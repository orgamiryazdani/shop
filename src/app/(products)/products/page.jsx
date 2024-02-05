import { getProducts } from "@/services/productService"
import queryString from "query-string";
import ProductsPagination from "./ProductsPagination";

export const dynamic = "force-dynamic";

async function Products({ searchParams }) {
  const { data } = await getProducts({
    limit: 8, offset: 0,
    search: queryString.stringify(searchParams),
  },
  );

  return (
    <ProductsPagination initialProducts={data} />
  )
}

export default Products