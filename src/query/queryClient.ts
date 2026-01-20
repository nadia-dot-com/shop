import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 10,
            gcTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,
        }
    },
    queryCache: new QueryCache({
        onError: (error) => {
            console.error('React Query error: ', error)
        }
    })
});