import Input from "@/common/Input"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next";

function SignInForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 h-96 flex flex-col justify-around">
      <Input
        label={t('loginPage.email')}
        type="email"
        name="email"
        register={register}
        errors={errors}
        validationSchema={{
          required: t('loginPage.validationEmail'),
        }}
      />
      <Input
        label={t('loginPage.password')}
        register={register}
        errors={errors}
        validationSchema={{
          required: t('loginPage.validationPassword'),
          minLength: {
            value: 4,
            message: t('loginPage.passwordLength'),
          },
        }}
        type="password"
        name="password"
      />
      <button type="submit" className="btn btn--primary w-full">{t('loginPage.login')}</button>
      <Link href='/auth/signup' className="w-40 text-secondary-0">{t('loginPage.dontSignUp')}</Link>
    </form>
  )
}

export default SignInForm