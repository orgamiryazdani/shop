import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext';

function BackLink({ link }) {
    const { language } = useLanguage();
    return (
        <Link href={link}>
            <FaArrowRightLong className={`text-secondary-0 text-2xl ${language == 'fa' ? "rotate-0" : "rotate-180"}`} />
        </Link>
    )
}

export default BackLink