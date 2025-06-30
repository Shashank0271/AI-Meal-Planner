import { Flex, Theme } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { useTheme } from "../../contexts/Theme/ThemeContext";
import AppHeader from "../molecules/AppHeader";
import { ClerkProvider } from "@clerk/clerk-react";
import { clerkPublishableKey } from "../../environmentVariables";
import { dark, experimental__simple } from "@clerk/themes";

export default function MainLayout({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();
  return (
    // wrap all the providers here at top level to create a singleton like pattern
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      afterSignOutUrl={"/"}
      appearance={{
        pricingTable: {
          baseTheme: isDark ? dark : experimental__simple,
          variables: { colorPrimary: "#31AA70" },
          elements: {
            pricingTableCard: {
              marginInline: 24,
            },
          },
        },
        signIn: {
          baseTheme: isDark ? dark : experimental__simple,
          variables: { colorPrimary: "#31AA70" },
        },
      }}
    >
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
            transition: "background-color 0.4s, color 0.4s , opacity 0.4s",
          }}
        >
          <AppHeader />
          <Flex
            style={{ flex: 1, paddingTop: 24, paddingBottom: 8 }}
            direction={"column"}
          >
            {children}
          </Flex>
        </Flex>
      </Theme>
    </ClerkProvider>
  );
}
