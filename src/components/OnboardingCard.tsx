import { Flex, Text } from "@radix-ui/themes";
import type React from "react";

interface OnboardingCardProps {
  icon: React.ReactElement;
  title: string;
  content: string;
  wrapperStyle?: string;
}
// ReactNode vs ReactElement vs ReactType
const OnboardingCard: React.FC<OnboardingCardProps> = ({
  icon,
  title,
  content,
  wrapperStyle,
}) => (
  <Flex
    direction={"column"}
    justify={"start"}
    align={"center"}
    gap={{ sm: "6", xs: "4" }}
    style={{
      flex: 1,
      textAlign: "center",
    }}
    className={`md:max-w-1/4 ${wrapperStyle ?? ""}`}
  >
    <div className="p-6 bg-accent-8 rounded-full ">{icon}</div>
    <Text>{title}</Text>
    <Text style={{ color: "var(--gray-11)" }}>{content}</Text>
  </Flex>
);

export default OnboardingCard;
