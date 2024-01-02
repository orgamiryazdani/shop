import Input from "@/common/Input"
import Link from "next/link"
import { useForm } from "react-hook-form"

function SignInForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 h-96 flex flex-col justify-around">
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
      <Link href='/signup' className="w-40 text-secondary-0">اکانت ندارید؟ ثبت نام</Link>
    </form>
  )
}

export default SignInForm