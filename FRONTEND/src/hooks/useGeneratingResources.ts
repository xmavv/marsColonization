import { useEffect } from "react";

export function useGeneratingResources(
  duration: number,
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    if (!duration || state >= duration * 5) return;

    const id = setTimeout(() => {
      setState((i) => i + duration);
    }, duration * 1000);

    return () => {
      clearTimeout(id);
    };
  }, [duration, state, setState]);
}
