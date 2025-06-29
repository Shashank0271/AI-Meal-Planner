import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Tooltip, useThemeContext } from "@radix-ui/themes";
import { Toggle } from "radix-ui";
import { useState } from "react";
import { useTheme } from "../../contexts/Theme/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();
  const { accentColor } = useThemeContext();
  const [animating, setAnimating] = useState(false);

  const handleToggle = () => {
    setAnimating(true);
    toggleTheme();
    setTimeout(() => setAnimating(false), 400); // turn it off after 4 seconds
  };

  return (
    <Tooltip content="Toggle theme">
      <Toggle.Root
        className="cursor-pointer"
        style={{
          backgroundColor: isDark ? accentColor : "white",
          boxShadow: "var(--shadow-6)",
          borderRadius: "9999px",
          padding: "0.5rem 0.7rem",
          border: isDark ? "none" : "1px solid green",
        }}
        onPressedChange={handleToggle}
      >
        <div
          className={`transition-transform duration-400 ${
            animating ? "rotate-180" : ""
          }`}
        >
          {isDark ? <MoonOutlined /> : <SunOutlined />}
        </div>
      </Toggle.Root>
    </Tooltip>
  );
};

export default ThemeToggle;


/*
You are correct: Wouter is a client-side router and will preserve React state and context during navigation, so the DOM and JS are not reloaded.

If you were using Radix UI’s router (or any router that triggers a full page reload or remounts the app), that could cause the state/context to reset, leading to the theme issue you described.

Summary:

Wouter: Preserves state/context on navigation (no reload).
Radix UI’s router (or similar): May cause remount/reload, resetting state/context.
If you stick with Wouter for routing, your theme and other React state will persist as expected during navigation!
*/