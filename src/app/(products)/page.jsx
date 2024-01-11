import { getProducts } from "@/services/productService"
import ProductCard from "./ProductCard";

async function Products() {
  const { data } = await getProducts({ limit: 8, offset: 0 });

  return (
    <ProductCard initialProducts={data} />
  )
}

export default Products