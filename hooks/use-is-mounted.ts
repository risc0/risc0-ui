"use client";

import { useLayoutEffect, useState } from "react";

export function useIsMounted() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}
