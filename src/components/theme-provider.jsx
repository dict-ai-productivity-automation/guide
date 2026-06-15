import * as React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children, defaultTheme = "light", storageKey = "bootcamp-theme" }) {
  const [theme, setThemeState] = React.useState(() => {
    if (typeof window === "undefined") return defaultTheme;
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored === "light" || stored === "dark") return stored;
      return defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch {
      /* localStorage may be disabled */
    }
  }, [theme, storageKey]);

  const setTheme = React.useCallback((t) => {
    setThemeState(t);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setThemeState((t) => (t === "light" ? "dark" : "light"));
  }, []);

  const value = React.useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
