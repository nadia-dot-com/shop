import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
            refetchOnWindowFocus: false,
        }
    },
    queryCache: new QueryCache({
        onError: (error) => {
            console.error('React Query error: ', error)
        }
    })
});