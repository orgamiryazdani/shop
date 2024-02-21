"use client"
import useProducts from "@/hooks/useProducts";
import ProductsPagination from "./ProductsPagination";
import queryString from "query-string";
import { useEffect } from "react";
import SkeletonProducts from "@/common/Skeleton";
import getUserIP from "@/utils/userIp";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

function Products({ searchParams }) {
  const { products, isLoading, refetch } = useProducts({
    limit: 8, offset: 0,
    search: queryString.stringify(searchParams)
  });
  const { t } = useTranslation();

  useEffect(() => {
    refetch();
    const getIp = async () => {
      const vpn = await getUserIP()
      if (vpn) {
        toast(
          <div>
            <span className="font-bold text-lg">{t('vpnUserTitle')}</span>
            <br />
            <span>{t('vpnUserMessage')}</span>
          </div>
          ,
          {
            duration: 10000,
          }
        )
      }
    }
    getIp()
  }, [searchParams, refetch]);

  if (isLoading) return <SkeletonProducts />
  if (products.length == 0) return <div className="w-full h-full relative flex flex-col items-center justify-center text-lg text-secondary-0">
    <div className="absolute top-3 left-0 w-full">
    <Header />
    </div>
    {t('productsLength')}
  </div>

  return (
    <ProductsPagination initialProducts={products} />
  )
}

export default Products