import { getProfile } from "@/services/authService";
import { useQuery } from "@tanstack/react-query";

export default function useGetUser() {
    const { data, isLoading } = useQuery({
        queryKey: ["get-user"],
        queryFn: getProfile,
    });
    return { data, isLoading }
}