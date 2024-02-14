"use client"
import Image from "next/image";
import image from "../../../public/images/notFound.png";
import Link from "next/link";
import BackLink from "@/common/BackLink";
import { useLanguage } from "@/context/LanguageContext";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { useTranslation } from "react-i18next";

export default function NotFoundDummy() {
  const { t } = useTranslation();
  const { language } = useLanguage()
  return <div className="max-w-[1400px] w-full h-full">
    <div className={`absolute top-4 ${language == "fa" ? "right-7" : "left-7"}`}>
      <BackLink link="/home/products" />
    </div>
    <div className="w-full h-[100vh] bg-secondary-100 text-secondary-0 flex items-center justify-center flex-col">
      <Image src={image} alt="notFound" />
      <div className="flex flex-col items-center justify-center text-xl mt-5">
        <p>{t('notFoundTitle')} - {language == 'fa' ? toPersianNumbers(404) : "404"}</p>
        <Link href="/home/products" className="btn btn--primary rounded-full font-normal text-base mt-5">{t('notFoundLinkTitle')}</Link>
      </div>
    </div>
  </div>
}