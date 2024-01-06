import type {Config} from 'tailwindcss'
import {shadcnPlugin} from "./shadcnplugin.ts";
import animatePlugin from "tailwindcss-animate";
export const shadcnPreset = {
  content: [],
  darkMode: ["class"],
  plugins: [shadcnPlugin, animatePlugin ]
} satisfies Config
