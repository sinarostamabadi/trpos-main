import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";

extend([mixPlugin]);

type colorObject = {
  [key: string]: string;
};

function generateDarkenColorFrom(
  input: string,
  percentage: number = 0.07
): string {
  return colord(input).darken(percentage).toHex();
}

function generateForegroundColorFrom(
  input: string,
  percentage: number = 0.08
): string {
  return colord(input)
    .mix(colord(input).isDark() ? "white" : "black")
    .toHex();
}

function generateLightenFromColor(
  input: string,
  percentage: number = 0.6
): string {
  return colord(input).lighten(percentage).toHex();
}

export const tailwindColors: colorObject = {
  current: "currentColor",
  transparent: "transparent",
  white: "#F9F9F9",
  "actual-white": "#ffffff",
  primary: "#00636D",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#00636D"),
  secondary: "#6c5ce7",
  "secondary-content": "#FFFFFF",
  "secondary-focus": generateDarkenColorFrom("#6c5ce7"),
  purple: "#9900EF",
  "purple-focus": generateDarkenColorFrom("#9900EF"),
  accent: "#1FB2A5",
  "accent-content": "#FFFFFF",
  "accent-focus": generateDarkenColorFrom("#1FB2A5"),
  neutral: "#2a323c",
  "neutral-content": generateForegroundColorFrom("#FFFFFF"),
  "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
  "base-25": "#353d47",
  "base-50": "#2a323c",
  "base-75": "#20272e",
  "base-100": "#1d232a",
  "base-200": "#191e24",
  "base-300": "#15191e",
  "base-content": "#18181C",
  "base-content-60": "#18181C99",
  "base-content-80":"#18181CCC",
  "base-content-medium": generateLightenFromColor("#18181C", 0.4),
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#fbbd23",
  "warning-content": generateForegroundColorFrom("#fbbd23"),
  error: "#f87272",
  "error-content": generateForegroundColorFrom("#f87272"),
  "gradient-first": "#34eaa0",
  "gradient-second": "#0fa2e9",
  "main-purple": "#9900EF",
  "base-gray": "#FAFAFA",
};

export const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: tailwindColors,
      borderRadius: {
        "2.5xl": "20px",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

export default config;
