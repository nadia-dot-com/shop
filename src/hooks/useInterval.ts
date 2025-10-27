import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!delay) {
            return;
        }
        const intervalId = setInterval(() => {
            if (callbackRef.current) {
                callbackRef.current()
            }
        }, delay);

        return () => clearInterval(intervalId);
    }, [delay]);

}