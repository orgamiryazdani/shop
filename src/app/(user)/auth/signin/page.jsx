"use client"
import { useMutation } from "@tanstack/react-query";
import SignInForm from "./SignInForm"
import { signIn } from "@/services/authService";
import toast from "react-hot-toast";

function SignInPage() {
  const { mutateAsync, isLoading } = useMutation({ mutationFn: signIn })

  if (isLoading) return <div>loading...</div>

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ data });
      toast.success("خوش آمدید")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return <SignInForm onSubmit={onSubmit} />
}

export default SignInPage