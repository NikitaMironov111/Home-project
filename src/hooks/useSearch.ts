import { useMemo } from "react";

export const useSearch = (array: any[],  f_name: string, l_name: string, value: string) => {
    return useMemo(() => {
            if (value) {
              return array.filter(
                (element) =>
                  element[f_name].toLowerCase().includes(value.toLowerCase()) ||
                  element[l_name].toLowerCase().includes(value.toLowerCase())
              );
            }
            return array;
          }, [value, array, f_name, l_name]);
    }
