"use client"
import useProducts from "@/hooks/useProducts";
import ProductsPagination from "./ProductsPagination";
import { useEffect } from "react";
import SkeletonProducts from "@/common/Skeleton";
import getUserIP from "@/utils/userIp";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import { useSearchParams } from "next/navigation";

function Products() {
  const searchParams = useSearchParams();
  const search = searchParams ? searchParams.toString() : "";

  const { products, isLoading, refetch } = useProducts({
    limit: 8, offset: 0,
    search
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
            duration: 8000,
          }
        )
      }
    }
    getIp()
  }, [searchParams, refetch]);

  if (isLoading) return <SkeletonProducts />
  if (products.length == 0) return <div className="w-full h-full min-w-[375px] relative flex flex-col items-center justify-center text-lg">
    <div className="absolute top-3 left-0 w-full">
      <Header />
    </div>
    <p className="text-secondary-0">
      {t('productsLength')}
    </p>
  </div>

  return (
    <ProductsPagination initialProducts={products} />
  )
}

export default Products
