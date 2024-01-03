"use client"
import { useMutation } from "@tanstack/react-query";
import SignInForm from "./SignInForm"
import { signIn } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function SignInPage() {
  const { mutateAsync, isLoading } = useMutation({ mutationFn: signIn })
  const router = useRouter()

  if (isLoading) return <div>loading...</div>

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ data });
      toast.success("خوش آمدید")
      router.push("/");
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return <SignInForm onSubmit={onSubmit} />
}

export default SignInPage