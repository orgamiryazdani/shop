"use client"
import Link from "next/link"
import { FaShop } from "react-icons/fa6"
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

function Header() {
  const [openModal, setOpenModal] = useState(false)
  const { data, isLoading } = useGetUser()

  const onClose = () => {
    setOpenModal(false);
  }

  if (isLoading) return <Loading />

  return (
    <div className="w-full h-full flex items-center justify-between px-9 pt-3">
      {/* logo */}
      <div className="border text-secondary-0 border-secondary-0 rounded-full w-10 h-10 flex items-center justify-center">
        <FaShop />
      </div>
      {/* search */}
      <ProductsSearch />
      <div className="flex gap-x-3">
        {/* filter start */}
        <div onClick={() => setOpenModal(true)} className="button">فیلتر <FaFilter className="text-sm text-secondary-600 mr-2" /></div>
        <Modal
          open={openModal}
          onClose={onClose}
          title="فیلتر محصولات"
        >
          <ProductsSort />
          <ProductsFilter />
        </Modal>
        {/* filter end */}
        {/* signIn start */}
        <Link className="button" href={data?.data ? "/profile" : "/signin"}>
          {!data?.data ?
            <span className="flex items-center">
              ورود <HiLogin className="text-xl text-secondary-600 mr-2" />
            </span>
            :
            <span className="flex items-center text-sm">
              پروفایل <FiUser className="text-xl text-secondary-600 mr-2" />
            </span>
          }
        </Link>
        {/* signIn end */}
      </div>
    </div>
  )
}

export default Header