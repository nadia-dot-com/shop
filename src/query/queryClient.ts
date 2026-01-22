import { QueryCache, QueryClient } from "@tanstack/react-query";

const TEN_MINUTES = 1000 * 60 * 10;
const ONE_HOUR = 1000 * 60 * 60;

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: TEN_MINUTES,
            gcTime: ONE_HOUR,
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