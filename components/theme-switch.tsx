"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 dark:text-slate-400 hover:text-orange-400 text-slate-700 dark:hover:text-slate-200 bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-b dark:from-indigo-700 dark:to-purple-700 w-[4rem] h-[4rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={25} /> : <BsMoon size={25} />}
    </button>
  );
}
