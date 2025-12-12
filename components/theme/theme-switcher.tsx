"use client";

import {
  catppuccinThemes,
  type CatppuccinTheme,
  useTheme,
} from "./theme-provider";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-(--ctp-overlay1)">theme:</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as CatppuccinTheme)}
        className="text-xs bg-card text-foreground border border-border rounded px-2 py-1 outline-none focus:ring-2 focus:ring-ring"
        aria-label="Theme"
      >
        {catppuccinThemes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
}
