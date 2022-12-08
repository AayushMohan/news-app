"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemThemes, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div>DarkModeButton</div>;
};

export default DarkModeButton;
