import { CoffeeOutlined } from "@ant-design/icons";
import { Button, Flex, Link, Text } from "@radix-ui/themes";
import ThemeToggle from "./atoms/ThemeToggle";

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
      <Flex direction="row" gap="4" align="center">
        <Link href="#">Home</Link>

        <Link href="#">Subscribe</Link>

        <Button variant="solid">
          <Text size={"3"}>Sign Up </Text>
        </Button>

        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default AppHeader;
