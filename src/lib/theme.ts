type ThemeName = 'light' | 'dark';

export const THEMES: Record<ThemeName, { name: string; colors: Record<string, string> }> = {
  light: {
    name: "light",
    colors: {
      "--color-bg": "--color-bg-light",
      "--color-text": "--color-text-light",
      "--color-button": "--color-button-light",
      "--color-button-pressed": "--color-button-pressed-light",
    },
  },
  dark: {
    name: "dark",
    colors: {
      "--color-bg": "--color-bg-dark",
      "--color-text": "--color-text-dark",
      "--color-button": "--color-button-dark",
      "--color-button-pressed": "--color-button-pressed-dark",
    },
  },
};

export function applyTheme(themeName: string) {
  const theme = THEMES[themeName as ThemeName] || THEMES.light;

  // Apply theme colors to CSS variables dynamically
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, `var(${value})`);
  });

  // Set the theme attribute for tailwind utilities
  document.documentElement.setAttribute("data-theme", theme.name);
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
