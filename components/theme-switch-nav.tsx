"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitchNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-[-1px] right-[-70px] bg-sky-600 w-[3rem] h-[3rem] rounded-full flex items-center justify-center hover:scale-[1.1] active:scale-105 transition-all dark:bg-gray-950 hover:text-black hover:bg-slate-300 dark:hover:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={20}/> : <BsMoon size={20} />}
    </button>
  );
}
