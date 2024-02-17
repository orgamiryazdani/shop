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
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import Modal from "@/common/Modal";
import Link from "next/link";

function Features() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { language, changeLanguage } = useLanguage()
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false)
  const [showBadgeNotification, setShowBadgeNotification] = useState(true)

  const onClose = () => {
    setOpenModal(false);
  }

  return (
    <>
      <div className={`fixed w-[100vw] top-0  ${showMenu ? "left-0" : "-left-[100vw] hidden"} lg:hidden transition-all duration-300 ease-in-out h-[100vh] blur-sm bg-secondary-600`} onClick={() => setShowMenu(!showMenu)}></div>
      <FiMenu className="flex lg:hidden w-10 h-10 absolute left-2 top-4" onClick={() => setShowMenu(!showMenu)} />
      <div className={`lg:w-full lg:h-full w-56 h-[100vh] top-0 fixed lg:relative lg:left-0 bg-secondary-300 lg:bg-transparent flex flex-col items-center justify-between pt-3 transition-all duration-300 ease-in-out ${showMenu ? "-left-0" : "-left-56"}`} >
        <div onClick={toggleDarkMode} className="cursor-pointer text-[#eaeaea] text-3xl w-20 h-20 flex items-center justify-center relative">
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
          <div onClick={() => { setOpenModal(true), setShowBadgeNotification(false) }} className="button size-12 text-lg mb-3 relative">
            <FaRegBell />
            {showBadgeNotification ?
              <span className="w-2 h-2 rounded-full bg-red-500 absolute top-[14px] right-[14px]"></span>
              : null
            }
          </div>
          <Modal
            open={openModal}
            onClose={onClose}
            title={t('adminMessage')}
          >
            <div className="flex flex-col w-full h-60 justify-between">
              <span className="font-bold">سلام ! امیر یزدانی هستم توسعه دهنده فرانت - Front end developer</span>
              <span>ممنون که از نمونه کار من بازدید کردی</span>
              <span>اگه دوست داشتی میتونی در لینک زیر سرس این کار رو مشاهده کنی</span>
              <Link target="_blank" href="https://github.com/orgamiryazdani/shop" className="border-b border-sky-500 w-12 text-sky-500">github</Link>
              <span>خوشحال میشم با هم در ارتباط باشیم : </span>
              <div align="left" className="flex items-center justify-around flex-wrap" dir="ltr">
                <a href="mailto:orgamiryazdani@gmail.com" target="_blank">
                  <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="36" alt="gmail logo" />
                </a>
                <a href="https://www.linkedin.com/in/amir-yazdani-org" target="_blank">
                  <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="36" alt="linkedin logo" />
                </a>
                <a href="https://t.me/amiiiirryz" target="_blank">
                  <img src="https://img.shields.io/static/v1?message=Telegram&logo=telegram&label=&color=2CA5E0&logoColor=white&labelColor=&style=for-the-badge" height="36" alt="telegram logo" />
                </a>
                <a href="https://wa.me/989174510960?text=سلام، منتظر پیام شما هستم." target="_blank">
                  <img src="https://img.shields.io/static/v1?message=Whatsapp&logo=whatsapp&label=&color=25D366&logoColor=white&labelColor=&style=for-the-badge" height="36" alt="whatsapp logo" />
                </a>
                <a className="mt-2" href="https://www.instagram.com/__amiiiirr/" target="_blank">
                  <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="36" alt="instagram logo" />
                </a>
              </div>
            </div>
          </Modal>
          <div onClick={() => toast(t('messageToast'))} className="button size-12 text-lg mb-5"><MdOutlineChat /></div>
        </div>
      </div >
    </>
  )
}

export default Features