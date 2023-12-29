"use client"
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signUp } from "@/services/authService";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  const { mutateAsync, isLoading } = useMutation({ mutationFn: signUp })

  if (isLoading) return <div>loading...</div>

  const onSubmit = async (data) => {
    try {
      await mutateAsync({ data, avatar: "https://api.lorem.space/image/face?w=640&h=480" });
      toast.success("خوش آمدید")
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  }
  return <SignUpForm onSubmit={onSubmit} />
}

export default SignUpPage