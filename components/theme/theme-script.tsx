import Script from "next/script";

const THEME_STORAGE_KEY = "ctp-theme";

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    const theme = stored || "mocha";
    document.documentElement.dataset.theme = theme;
  } catch {
    // ignore
  }
})();
`;

export function ThemeScript() {
  return (
    <Script id="ctp-theme" strategy="beforeInteractive">
      {themeScript}
    </Script>
  );
}
