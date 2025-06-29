import { CoffeeOutlined } from "@ant-design/icons";
import { Button, Flex, Link, Text } from "@radix-ui/themes";
import ThemeToggle from "../atoms/ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";

const AppHeader = () => {
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
          <Link href="#">Home</Link>

          <Link href="#">Subscribe</Link>

          <Button variant="solid">
            <Text size={"3"}>Sign Up </Text>
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
