import { useEffect } from "react";
import { applyThemeFromUrl } from "@/lib/theme";

export function useApplyTheme() {
  useEffect(() => {
    applyThemeFromUrl();
  }, []);
}
