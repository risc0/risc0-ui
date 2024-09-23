/* c8 ignore start */
import { useEffect, useState } from "react";
import { useMounted } from "../hooks/use-mounted";

export function Default() {
  const isMounted = useMounted();

  return (
    <div>
      <h2>useMounted Hook</h2>
      <p>Is component mounted: {isMounted ? "Yes" : "No"}</p>
    </div>
  );
}

export function DelayedMount() {
  const [isDelayedMounted, setIsDelayedMounted] = useState(false);
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setIsDelayedMounted(true);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [isMounted]);

  return (
    <div>
      <h2>useMounted Hook with Delay</h2>
      {isDelayedMounted ? <p>Component is now mounted after delay!</p> : <p>Component is not fully mounted yet...</p>}
    </div>
  );
}
