import { useMemo } from 'react';

export const useSearch = (array: any[], title: string, value: string) => {
  return useMemo(() => {
    if (value) {
      return array.filter((element) =>
        element[title].toLowerCase().includes(value.toLowerCase())
      );
    }
    return array;
  }, [value, array, title]);
};
