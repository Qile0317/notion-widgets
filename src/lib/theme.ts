type ThemeName = 'light' | 'dark';

export const THEMES: Record<ThemeName, { name: string; colors: Record<string, string> }> = {
  light: {
    name: "light",
    colors: {
      "--color-bg": "#ffffff",
      "--color-text": "#37352f",
      "--color-button": "#e0e0e0",
      "--color-button-pressed": "#c0c0c0",
      "--color-accent": "#f0f0f0",
    },
  },
  dark: {
    name: "dark",
    colors: {
      "--color-bg": "#2f3437",
      "--color-text": "#ffffff",
      "--color-button": "#4f5b66",
      "--color-button-pressed": "#3b4a54",
      "--color-accent": "#f0f0f0",
    },
  },
};

export function applyTheme(themeName: string) {
  const theme = THEMES[themeName as ThemeName] || THEMES.light;

  // Apply theme colors to CSS variables dynamically
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  // Set the theme attribute for tailwind utilities
  document.documentElement.setAttribute("data-theme", theme.name);
}

export function applyThemeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get("theme") || "light"; // Default to light theme
  applyTheme(theme);
}

export const getCurrentTheme = () => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : 'light'; // Default to light theme if not set
};
  
export const setTheme = (themeName: string) => {
    const theme = THEMES[themeName as ThemeName] || THEMES.light;
    localStorage.setItem("theme", theme.name);
    applyTheme(theme.name); // Apply the theme when set
};
