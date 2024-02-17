"use client"
import useProducts from "@/hooks/useProducts";
import ProductsPagination from "./ProductsPagination";
import queryString from "query-string";
import { useEffect } from "react";
import SkeletonProducts from "@/common/Skeleton";
import getUserIP from "@/utils/userIp";

function Products({ searchParams }) {
  const { products, isLoading, refetch } = useProducts({
    limit: 8, offset: 0,
    search: queryString.stringify(searchParams)
  });

  useEffect(() => {
    refetch();
    getUserIP()
  }, [searchParams, refetch]);

  if (isLoading) return <SkeletonProducts />
  if (products.length == 0) return <div className="w-full h-full flex items-center justify-center text-lg text-secondary-0">{t('productsLength')}</div>

  return (
    <ProductsPagination initialProducts={products} />
  )
}

export default Products