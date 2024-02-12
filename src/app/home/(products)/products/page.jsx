"use client"
import useProducts from "@/hooks/useProducts";
import ProductsPagination from "./ProductsPagination";
import queryString from "query-string";
import { useEffect } from "react";
import SkeletonProducts from "@/common/Skeleton";

function Products({ searchParams }) {
  const { products, isLoading, refetch } = useProducts({
    limit: 8, offset: 0,
    search: queryString.stringify(searchParams)
  });

  useEffect(() => {
    refetch();
  }, [searchParams, refetch]);

  if (isLoading) return <SkeletonProducts />

  return (
    <ProductsPagination initialProducts={products} />
  )
}

export default Products