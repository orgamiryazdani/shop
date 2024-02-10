"use client"
import { GiBarbedSun, GiMoonBats } from "react-icons/gi";
import { MdOutlineChat } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa6";
import { useDarkMode } from "@/context/DarkModeContext";
import { useLanguage } from "@/context/LanaguageContext";
import ThemeThree from "./ThemeThree";

function Features() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="w-full h-full flex flex-col items-center justify-between pt-3">
      <div onClick={toggleDarkMode} className="cursor-pointer text-secondary-0 text-3xl w-20 h-20 flex items-center justify-center relative">
        {
          isDarkMode ?
            <GiMoonBats className="absolute z-50" />
            :
            <GiBarbedSun className="absolute z-50" />
        }
        <ThemeThree />
      </div>
      <div
        onClick={() => changeLanguage(language == "fa" ? "en" : "fa")}
        className="w-[73px] h-28 bg-primary-100 cursor-pointer rounded-2xl flex items-center justify-evenly flex-col text-xs text-center">
        <GrLanguage className="text-3xl" />
        {
          language == "fa" ?
            <p>Switching<br />to English</p>
            :
            <p>تغییر زبان <br /> به فارسی</p>
        }
      </div>
      <div>
        <div className="button size-12 text-lg mb-3"><FaRegBell /></div>
        <div className="button size-12 text-lg mb-5"><MdOutlineChat /></div>
      </div>
    </div >
  )
}

export default Features