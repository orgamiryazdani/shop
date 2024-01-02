import Input from "@/common/Input"
import Link from "next/link"
import { useForm } from "react-hook-form"

function SignUpForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 h-[420px] flex flex-col justify-around">
      <Input
        label="نام"
        register={register}
        errors={errors}
        validationSchema={{
          required: "نام ضروری است",
          minLength: {
            value: 3,
            message: "حداقل 3 کاراکتر را وارد کنید",
          },
        }}
        type="text"
        name="name"
      />
      <Input
        label="ایمیل"
        type="email"
        name="email"
        register={register}
        errors={errors}
        validationSchema={{
          required: "ایمیل ضروری است",
        }}
      />
      <Input
        label="کلمه عبور"
        register={register}
        errors={errors}
        validationSchema={{
          required: "کلمه عبور ضروری است",
          minLength: {
            value: 4,
            message: "حداقل 4 کاراکتر را وارد کنید",
          },
        }}
        type="password"
        name="password"
      />
      <button type="submit" className="btn btn--primary w-full">ورود</button>
      <Link href='/signin' className="w-40 text-secondary-0">قبلا ثبت نام کردید؟ ورود</Link>
    </form>
  )
}

export default SignUpForm