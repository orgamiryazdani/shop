"use client"
import toast from "react-hot-toast";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useSignIn } from "@/hooks/useAuth";

function SignUpPage() {
  const { mutateAsync, isPending } = useSignIn()
  const router = useRouter()
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ data, avatar: "https://api.lorem.space/image/face?w=640&h=480" });
      toast.success(t('loginPage.redirectLogin'))
      toast.success(t('loginPage.registerPass'))
      router.push("/auth/signin")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return <SignUpForm onSubmit={onSubmit} isLoading={isPending}/>
}

export default SignUpPage