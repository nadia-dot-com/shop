import { useQuery } from "@tanstack/react-query";
import { fetchOptions } from "../../api/options.api";

export const useOptions = () => {
  return useQuery({
    queryKey: ["options"],
    queryFn: fetchOptions,
    staleTime: Infinity,
  });
};
