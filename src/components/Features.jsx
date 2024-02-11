"use client"
import { GiBarbedSun, GiMoonBats } from "react-icons/gi";
import { MdOutlineChat } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa6";
import { useDarkMode } from "@/context/DarkModeContext";
import { useLanguage } from "@/context/LanguageContext";
import ThemeThree from "./ThemeThree";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Features() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { language, changeLanguage } = useLanguage()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={`fixed w-[100vw] top-0  ${showMenu ? "left-0" : "-left-[100vw] hidden"} lg:hidden transition-all duration-300 ease-in-out h-[100vh] blur-sm bg-secondary-600`} onClick={() => setShowMenu(!showMenu)}></div>
      <FiMenu className="flex lg:hidden w-10 h-10 absolute left-2 top-4" onClick={() => setShowMenu(!showMenu)} />
      <div className={`lg:w-full lg:h-full w-56 h-[100vh] top-0 fixed lg:relative lg:left-0 bg-secondary-300 lg:bg-transparent flex flex-col items-center justify-between pt-3 transition-all duration-300 ease-in-out ${showMenu ? "-left-0" : "-left-56"}`} >
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
    </>
  )
}

export default Features