import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import {
  Tooltip,
  useThemeContext,
} from "@radix-ui/themes";
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
