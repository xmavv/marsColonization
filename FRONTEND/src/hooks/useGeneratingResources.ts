import { useEffect, useRef, useState } from "react";

export function useGeneratingResources(
  initialDuration: number,
  resources: number
) {
  const [countdown, setCountdown] = useState(1);
  const [resourcesToClaim, setResourcesToClaim] = useState(0);
  const [duration, setDuration] = useState(initialDuration);
  const interval = useRef(0);

  function resetGeneratingResources() {
    setCountdown(1);
    setResourcesToClaim(0);
    setDuration(initialDuration);
  }

  useEffect(() => {
    if (countdown % 100 === 0) {
      setResourcesToClaim((r) => r + resources + countdown / 10);
      setDuration((d) => d + countdown / 10);
    }
    if (countdown === 500) clearInterval(interval.current);
  }, [countdown, resources]);
  //not really good to use hook like that but...

  useEffect(() => {
    interval.current = setInterval(() => {
      setCountdown((c) => c + 1);
    }, duration * 10);

    return () => {
      clearInterval(interval.current);
    };
  }, [duration, resources]);

  return {
    resourcesToClaim,
    resetGeneratingResources,
    countdown,
    duration,
  };
}
