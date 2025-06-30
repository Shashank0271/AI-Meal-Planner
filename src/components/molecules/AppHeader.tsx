import { CoffeeOutlined } from "@ant-design/icons";
import { Button, Flex, Text, Link } from "@radix-ui/themes";
import ThemeToggle from "../atoms/ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import { useLocation } from "wouter";
import { useAuth } from "@clerk/clerk-react";

const AppHeader = () => {
  const [, navigate] = useLocation();
  const { isSignedIn, signOut, has } = useAuth();
  // console.log(has ? has({ plan: "5_dollar_plan" }) : undefined);
  return (
    <Flex
      direction="row"
      justify="between"
      align="center"
      width="100%"
      className="gray-200 px-18 py-2 radix-shadow-3"
    >
      <CoffeeOutlined className="text-4xl rounded-md bg-green-500 p-2" />

      <div className="flex flex-row items-center gap-4">
        <div className="max-md:hidden flex flex-row gap-4 items-center">
          <Link href="/home">Home</Link>
          <Link href="/subscribe">Subscribe</Link>
          <Button
            variant="solid"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (isSignedIn) {
                signOut();
              }
              navigate("/signup");
            }}
          >
            <Text size={"3"}>{isSignedIn ? "Log Out" : "Sign Up"}</Text>
          </Button>
        </div>
        <ThemeToggle />
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </Flex>
  );
};

export default AppHeader;
