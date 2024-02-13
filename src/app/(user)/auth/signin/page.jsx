"use client"
import SignInForm from "./SignInForm"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useSignUp } from "@/hooks/useAuth";

function SignInPage() {
  const { mutateAsync, isPending } = useSignUp()
  const router = useRouter()
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ data });
      toast.success(t('loginPage.welcome'))
      router.push("/home/products");
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return <SignInForm onSubmit={onSubmit} isLoading={isPending}/>
}

export default SignInPage