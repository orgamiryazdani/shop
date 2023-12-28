import { GiMoonBats } from "react-icons/gi";
import { MdOutlineChat } from "react-icons/md";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";

function Features() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between pt-3">
      <div className="border text-secondary-0 border-secondary-0 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center">
        {/* <GiHeraldicSun /> */}
        <GiMoonBats />
      </div>
      <div className="w-[73px] h-28 bg-primary-100 cursor-pointer rounded-2xl flex items-center justify-evenly flex-col text-xs text-center">
        <IoAddCircleOutline className="text-3xl"/>
        اضافه کردن 
        <br />
        محصول
      </div>
      <div>
        <div className="button size-12 text-lg mb-3 "><FaRegBell /></div>
        <div className="button size-12 text-lg mb-5 "><MdOutlineChat /></div>
      </div>
    </div>
  )
}

export default Features