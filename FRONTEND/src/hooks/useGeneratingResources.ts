import { useEffect } from "react";
import { CLAIM_RESOURCES_COUNTER } from "../utils/constans";

export function useGeneratingResources(
  duration: number,
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>
) {
  useEffect(() => {
    if (!duration || state >= duration * CLAIM_RESOURCES_COUNTER) return;

    const id = setTimeout(() => {
      setState((i) => i + duration);
    }, duration * 1000);

    return () => {
      clearTimeout(id);
    };
  }, [duration, state, setState]);
}
