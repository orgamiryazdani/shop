"use client"
import Link from "next/link"
import { HiLogin } from "react-icons/hi";
import useGetUser from "@/hooks/useAuth";
import { FiUser } from "react-icons/fi";
import ProductsFilter from "@/app/home/(products)/products/ProductsFilter";
import { FaFilter } from "react-icons/fa6";
import Modal from "@/common/Modal";
import ProductsSort from "@/app/home/(products)/products/ProductsSort";
import { Suspense, useState } from "react";
import ProductsSearch from "@/app/home/(products)/products/ProductsSearch";
import { useTranslation } from "react-i18next";
import { HeaderSkeleton } from "../common/Skeleton";
import { useLanguage } from "@/context/LanguageContext";

function Header() {
  const [openModal, setOpenModal] = useState(false)
  const { data, isLoading } = useGetUser()
  const { t } = useTranslation();
  const { language } = useLanguage();

  const onClose = () => {
    setOpenModal(false);
  }

  if (isLoading) return <HeaderSkeleton />

  return (
    <Suspense fallback={<HeaderSkeleton />}>
      <div
        className={`w-full md:h-1/6 flex flex-wrap md:flex-nowrap items-center justify-between px-[26px] md:px-0 ${language == "fa" ? "lg:pr-44 lg:pl-9" : "lg:pl-44 lg:pr-9"}`}
      >
        {/* search */}
        <ProductsSearch />
        <div className="flex gap-x-3 w-full md:w-auto items-center justify-between py-5">
          {/* filter start */}
          <div onClick={() => setOpenModal(true)} className="button">{t("filter")} <FaFilter className={`text-sm text-secondary-600 ${language == 'fa' ? "mr-2" : "ml-2"}`} /></div>
          <Modal
            open={openModal}
            onClose={onClose}
            title={t('modal.title')}
          >
            <ProductsSort />
            <ProductsFilter />
          </Modal>
          {/* filter end */}
          {/* signIn start */}
          <Link className="button" href={data !== undefined ? "/profile" : "/auth/signin"}>
            {data == undefined ?
              <span className="flex items-center">
                {t('login')} <HiLogin className={`text-xl text-secondary-600 ${language == 'fa' ? "md:mr-2 mr-1 rotate-0" : "md:ml-2 ml-1 rotate-180"}`} />
              </span>
              :
              <span className="flex items-center text-sm">
                {t('profile')} <FiUser className="text-xl text-secondary-600 md:mx-2 mx-1" />
              </span>
            }
          </Link>
          {/* signIn end */}
        </div>
      </div>
    </Suspense>
  )
}

export default Header