"use client"
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUp } from "@/services/authService";
import SignUpForm from "./SignUpForm";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

function SignUpPage() {
  const { mutateAsync, isLoading } = useMutation({ mutationFn: signUp })
  const router = useRouter()
  const { t } = useTranslation();

  if (isLoading) return <div>loading...</div>

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ data, avatar: "https://api.lorem.space/image/face?w=640&h=480" });
      toast.success(t('loginPage.welcome'))
      router.push("/products")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return <SignUpForm onSubmit={onSubmit} />
}

export default SignUpPage