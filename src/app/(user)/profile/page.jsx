"use client"
import { toLocalDateString } from "@/utils/toLocalDate";
import { useState } from "react";
import { IoIosArrowRoundBack, IoIosFlash } from "react-icons/io";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "@/context/DarkModeContext";
import { useLanguage } from "@/context/LanguageContext";
import useGetUser from "@/hooks/useAuth";
import { CircleLoader } from "@/common/Loading";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

function Page() {
  const { language, changeLanguage } = useLanguage()
  const [showPassword, setShowPassword] = useState(false);
  const [languageValue, setLanguageValue] = useState(language);
  const { t } = useTranslation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const { data, isLoading } = useGetUser()

  const handleChange = (event, newAlignment) => {
    setLanguageValue(newAlignment);
    changeLanguage(newAlignment)
  };

  if (isLoading) return <div className="w-full h-[100vh] flex items-center justify-center bg-secondary-100"><CircleLoader /></div>

  return (
    <div className="w-full h-[100vh] bg-secondary-200">
      <div className="w-full h-1/4 relative flex items-end justify-center bg-sky-200">
        <a href="/home/products" className="absolute left-3 top-3 w-8 h-8 text-secondary-0 bg-secondary-700 rounded-xl flex items-center justify-center">
          <IoIosArrowRoundBack className="w-6 h-6" />
        </a>
        <div className="w-32 h-32 rounded-full border-[5px] border-secondary-0 -bottom-16 absolute">
          <img className="w-full h-full rounded-full object-cover" src={data.avatar} alt={data.name} />
        </div>
      </div>
      <div className="w-full h-3/4 flex items-center justify-start pt-[80px] pb-3 flex-col">
        <p className="font-bold text-3xl text-secondary-0">{data.name}</p>
        <p className="text-yellow-500 text-lg flex items-center"><IoIosFlash className="w-5 h-5" /> {data.role} role</p>
        <div className="w-[300px] md:w-[400px] lg:w-[500px] h-72 mt-4 flex flex-col justify-between p-5 rounded-xl text-white bg-secondary-300">
          <div className="user--info">
            <p>{t('profilePage.language')}</p>
            <ToggleButtonGroup
              color="primary"
              value={languageValue}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              dir="ltr"
            >
              <ToggleButton className={`!border-secondary-500 ${languageValue == "fa" ? "" : "!text-white"}`} style={{ fontFamily: "Vazir" }} value="fa">فارسی</ToggleButton>
              <ToggleButton className={`!border-secondary-500 ${languageValue == "en" ? "" : "!text-white"}`} style={{ fontFamily: "Vazir" }} value="en">english</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="user--info">
            <p>{t('profilePage.changeTheme')}</p>
            <FormGroup>
              <FormControlLabel
                onClick={toggleDarkMode}
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={isDarkMode} />}
              />
            </FormGroup>
          </div>
          <div className="user--info">
            <p>{t('profilePage.email')}</p>
            <p>{data.email}</p>
          </div>
          <div className="user--info">
            <p>{t('profilePage.password')}</p>
            {showPassword ?
              <div className={`flex items-center h-6 ${languageValue == 'fa' ? "flex-row" : "flex-row-reverse"}`}><FaEyeSlash className="pl-2 cursor-pointer w-6 h-6 pb-1" onClick={() => setShowPassword(!showPassword)} /> <p>{data.password}</p></div>
              :
              <div className={`flex items-center h-6 text-[22px] ${languageValue == 'fa' ? "flex-row" : "flex-row-reverse"}`}><FaEye className="pl-2 cursor-pointer w-6 h-6 pb-2" onClick={() => setShowPassword(!showPassword)} /> <p>******</p></div>
            }
          </div>
          <div className="user--info">
            <p>{t('profilePage.dateRegister')}</p>
            <p dir="rtl">{languageValue == 'fa'
              ? toLocalDateString(data.creationAt)
              : new Date(data.creationAt).toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page