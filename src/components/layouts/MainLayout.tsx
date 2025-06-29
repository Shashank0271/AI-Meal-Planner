import { Flex, Theme } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import AppHeader from "../molecules/AppHeader";

export default function MainLayout({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();
  return (
    // wrap all the providers here at top level to create a singleton like pattern
    <Theme
      accentColor="green"
      grayColor="slate"
      appearance={isDark ? "dark" : "light"}
    >
      <Flex
        direction={"column"}
        style={{
          height: "100vh",
          maxWidth: 1640,
          margin: "0 auto",
        }}
      >
        <AppHeader />
        <Flex style={{ flex: 1, paddingTop: 24 }} direction={"column"}>
          {children}
        </Flex>
      </Flex>
    </Theme>
  );
}
