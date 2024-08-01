import React, { useEffect } from "react";
import "../styles/globals.css";
import "./styles.css";

import type { GlobalProvider } from "@ladle/react";
import { ThemeProvider, useTheme } from "next-themes";

export const Provider: GlobalProvider = ({ children, globalState }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(globalState.theme);
  }, [globalState.theme, setTheme]);

  return (
    <div className="container" style={{ maxWidth: 800 }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        forcedTheme={globalState.theme}
        disableTransitionOnChange
        enableSystem
        enableColorScheme
      >
        {children}
      </ThemeProvider>
    </div>
  );
};
