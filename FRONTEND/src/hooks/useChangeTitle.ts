import { useEffect } from "react";

export function useChangeTitle(value: string) {
  useEffect(() => {
    document.title = `marsColonization - ⭐ ${value} `;

    return () => {
      document.title = `marsColonization`;
    };
  }, [value]);
}
