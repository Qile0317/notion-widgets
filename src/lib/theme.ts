type ThemeName = 'light' | 'dark';

// TODO get notion colors for:
// - background color
// - selected text color
// - unselected text color (which I think is equal to default icon color)
// - sidebar background color
// - bannerless background color

// It also might be a good idea to have this as some importable file

export const THEMES: Record<ThemeName, { name: string; colors: Record<string, string> }> = {
  light: {
    name: "light",
    colors: {
      "--color-bg": "#FFFFFF",
      "--color-text": "#37352F",
      "--color-button": "#e0e0e0",
      "--color-button-pressed": "#c0c0c0",
      "--color-accent": "#f0f0f0",
    },
  },
  dark: {
    name: "dark",
    colors: {
      "--color-bg": "#2F3437",
      "--color-text": "#FFFFFF90",
      "--color-button": "#4f5b66",
      "--color-button-pressed": "#3b4a54",
      "--color-accent": "#f0f0f0",
    },
  },
};

export function applyThemeFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get("theme") || "light"; // Default to light theme
  applyTheme(theme);
}

function applyTheme(themeName: string) {
  const theme = THEMES[themeName as ThemeName] || THEMES.light;

  // Apply theme colors to CSS variables dynamically
  Object.entries(theme.colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  // Set the theme attribute for tailwind utilities
  document.documentElement.setAttribute("data-theme", theme.name);
}
