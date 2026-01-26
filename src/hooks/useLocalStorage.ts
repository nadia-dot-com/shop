import { useCallback, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const storedValue = window.localStorage.getItem(key);

      if (storedValue) {
        const parsed = JSON.parse(storedValue);

        if (Array.isArray(initialValue) && !Array.isArray(parsed)) {
          console.log(`Invalid data in locationStorage for key ${key}`);
          window.localStorage.removeItem(key);
          return initialValue;
        }

        return parsed;
      }
      return initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      try {
        const valueToStore =
          newValue instanceof Function ? newValue(storedValue) : newValue;

        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setStoredValue(valueToStore);
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue] as const;
}
