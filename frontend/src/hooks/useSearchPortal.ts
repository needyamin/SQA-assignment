import api from "@/lib/client";
import { useMutation } from "@tanstack/react-query";

const useSearchPortal = () => {
  const {
    mutate: onSearch,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: async (query: string) => {
      const response = await api.post("/generate", { query });
      return response.data;
    },
  });

  return {
    onSearch,
    data: data?.data  || [],
    isPending,
    error,
  };
};

export default useSearchPortal;
