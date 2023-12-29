import Link from "next/link"
import { FaFilter, FaShop } from "react-icons/fa6"
import { CiSearch } from "react-icons/ci";
import { HiLogin } from "react-icons/hi";

function Header() {
  return (
    <div className="w-full h-full flex items-center justify-between px-9 pt-3">
      <div className="border text-secondary-0 border-secondary-0 rounded-full w-10 h-10 flex items-center justify-center">
        <FaShop />
      </div>
      <div className="flex items-center justify-center">
        <input type="search" className="w-64 h-10 rounded-r-3xl border-secondary-300 bg-transparent border border-l-0 placeholder:text-secondary-0 placeholder:text-sm p-3 text-sm" placeholder="جستجو کنید ..." />
        <div className="w-10 h-10 text-secondary-0 cursor-pointer rounded-l-3xl border border-secondary-300 flex items-center justify-center border-r-0">
          <CiSearch />
        </div>
      </div>
      <div className="flex gap-x-3">
        <div className="button">فیلتر <FaFilter className="text-sm text-secondary-600 mr-2" /></div>
        <Link className="button" href='/auth/signin'>
          ورود <HiLogin className="text-xl text-secondary-600 mr-2" />
        </Link>
      </div>
    </div>
  )
}

export default Header