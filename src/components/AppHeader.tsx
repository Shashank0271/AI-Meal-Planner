import { CoffeeOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import {
  Button,
  Tooltip,
  Flex,
  Link,
  Text,
  useThemeContext,
} from "@radix-ui/themes";
import { Toggle } from "radix-ui";
import { useTheme } from "../contexts/Theme/ThemeContext";
import { useState } from "react";

const AppHeader = () => {
  const { toggleTheme, isDark } = useTheme();
  const { accentColor } = useThemeContext();
  const [animating, setAnimating] = useState(false);

  const handleToggle = () => {
    setAnimating(true);
    toggleTheme();
    setTimeout(() => setAnimating(false), 400); // turn it off after 4 seconds
  };

  return (
    <Flex
      direction="row"
      justify="between"
      align="center"
      width="100%"
      className="gray-200 px-18 py-2 radix-shadow-3"
    >
      <CoffeeOutlined className="text-4xl rounded-md bg-green-500 p-2" />
      <Flex direction="row" gap="4" align="center">
        <Link href="#">Home</Link>

        {/* Subscribe TODO : remove when user is signed out */}
        <Link href="#">Subscribe</Link>

        <Button variant="solid">
          <Text size={"3"}>Sign Up </Text>
        </Button>

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
      </Flex>
    </Flex>
  );
};

export default AppHeader;
