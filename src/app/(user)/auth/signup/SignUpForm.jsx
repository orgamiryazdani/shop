import Input from "@/common/Input"
import { CircleLoader } from "@/common/Loading";
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next";

function SignUpForm({ onSubmit ,isLoading}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="xl:w-96 w-full px-3 xl:px-0 h-full flex flex-col justify-around">
      <Input
        label={t('loginPage.name')}
        register={register}
        errors={errors}
        validationSchema={{
          required: t('loginPage.validationName'),
          minLength: {
            value: 3,
            message: t('loginPage.nameLength'),
          },
        }}
        type="text"
        name="name"
      />
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
      {isLoading ? <div className="w-full flex items-center justify-center">
        <CircleLoader />
      </div>
        :
        <button type="submit" className="btn btn--primary w-full">
          {t('loginPage.register')}
        </button>
      }
      <Link href='/auth/signin' className="w-auto text-secondary-0">{t('loginPage.dontLogin')}</Link>
    </form>
  )
}

export default SignUpForm