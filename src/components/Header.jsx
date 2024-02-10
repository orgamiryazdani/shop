"use client"
import Link from "next/link"
import { HiLogin } from "react-icons/hi";
import useGetUser from "@/hooks/useAuth";
import { FiUser } from "react-icons/fi";
import Loading from "@/common/Loading";
import ProductsFilter from "@/app/(products)/products/ProductsFilter";
import { FaFilter } from "react-icons/fa6";
import Modal from "@/common/Modal";
import ProductsSort from "@/app/(products)/products/ProductsSort";
import { useState } from "react";
import ProductsSearch from "@/app/(products)/products/ProductsSearch";
import { useTranslation } from "react-i18next";

function Header() {
  const [openModal, setOpenModal] = useState(false)
  const { data, isLoading } = useGetUser()
  const { t } = useTranslation();

  const onClose = () => {
    setOpenModal(false);
  }

  if (isLoading) return <Loading />

  return (
    <div className="w-[70%] h-full flex items-center justify-between pt-5 px-9">
      {/* search */}
      <ProductsSearch />
      <div className="flex gap-x-3">
        {/* filter start */}
        <div onClick={() => setOpenModal(true)} className="button">{t("filter")} <FaFilter className="text-sm text-secondary-600 mr-2" /></div>
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
        <Link className="button" href={data?.data ? "/profile" : "/signin"}>
          {!data?.data ?
            <span className="flex items-center">
              {t('login')} <HiLogin className="text-xl text-secondary-600 mr-2" />
            </span>
            :
            <span className="flex items-center text-sm">
              {t('profile')} <FiUser className="text-xl text-secondary-600 mr-2" />
            </span>
          }
        </Link>
        {/* signIn end */}
      </div>
    </div>
  )
}

export default Header