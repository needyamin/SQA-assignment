import api from "@/lib/client";
import {
  useMutation,
  useQueryClient,
  type UseMutationOptions,
} from "@tanstack/react-query";

type HttpMethod = "post" | "put" | "delete";

interface UseAppMutationOptions<TData, TError, TVariables>
  extends UseMutationOptions<TData, TError, TVariables> {
  url: string;
  method?: HttpMethod;
  invalidateKeys: string[];
}

export function useAppMutation<TData, TError = Error, TVariables = unknown>(
  options: UseAppMutationOptions<TData, TError, TVariables>
) {
  const queryClient = useQueryClient();
  const { url, method = "post", invalidateKeys, ...restOptions } = options;

  return useMutation<TData, TError, TVariables>({
    mutationFn: (variables: TVariables) => {
      return api[method]<TData>(url, variables).then((res) => res.data);
    },
    onSuccess: async (data) => {
      if (invalidateKeys) {
        await queryClient.invalidateQueries({
          queryKey: [invalidateKeys],
        });
      }
    },
    onError: (error) => {
      console.error(error);
    },
    ...restOptions,
  });
}
