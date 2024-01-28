import { getProfile } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
    const { data, isLoading } = useQuery({
        retry: 0,
        queryKey: ["get-user"],
        queryFn: getProfile,
        refetchOnWindowFocus: false
    });
    return { data, isLoading }
}