"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitchNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-[-1px] right-[-70px] bg-white w-[3rem] h-[3rem] border border-white border-opacity-40 rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
