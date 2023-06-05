import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({ isLight: false });

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(false);

  const value = useMemo(() => ({ isLight, setIsLight }), [isLight]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
