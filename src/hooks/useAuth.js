import { getProfile, signIn, signUp } from "@/services/authService";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function useGetUser() {
    const { data, isLoading } = useQuery({
        retry: 0,
        queryKey: ["get-user"],
        queryFn: getProfile,
        refetchOnWindowFocus: false
    });
    return { data, isLoading }
}

export function useSignUp() {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: signIn,
    });
    return { mutateAsync, isPending }
}

export function useSignIn() {
    const { mutateAsync, isPending } = useMutation({
        mutationFn: signUp,
    });
    return { mutateAsync, isPending }
}