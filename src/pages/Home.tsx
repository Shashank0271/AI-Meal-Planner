import { Button, Flex, Heading, Section, Text } from "@radix-ui/themes";
import OnboardingCard from "../components/molecules/OnboardingCard";
import { CheckIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { useTheme } from "../contexts/Theme/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();
  console.log(isDark);
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      width={"100%"}
    >
      <div
        className={`w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-2xl shadow-xl border border-accent-8
          backdrop-blur-md flex flex-col gap-6 text-center items-center py-9 px-8 
          ${isDark ? "opacity-100" : "opacity-70"}`}
        style={{
          background:
            "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 0%, rgba(237, 221, 83, 1) 100%)",
        }}
      >
        <Heading size={"8"} className="text-shadow-lg text-accent-contrast">
          Personalized AI Meal Plans
        </Heading>
        <Text className="text-shadow-lg text-accent-contrast font-bold text-white">
          Let our AI do the planning . You focus on cooking and enjoying !
        </Text>
        <Button style={{ backgroundColor: "var(--accent-10)" }}>
          Get started
        </Button>
      </div>

      {/* giving the section a height of 100% was taking up all the space , squishing the card */}
      <Section size={{ sm: "2", xs: "4" }}>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          width={"100%"}
          height={"100%"}
          style={{ flex: 1 }}
        >
          <h1 className="text-3xl text-shadow-2xs text-shadow-theme font-semibold">
            How it works
          </h1>
          <div style={{ marginBlock: 24 }} />
          <Flex
            direction={{ sm: "row", xs: "column" }}
            justify={"center"}
            align={{ sm: "start", xs: "center" }}
            gap={{ sm: "7", xs: "9" }}
            style={{ paddingInline: 16 }}
          >
            <OnboardingCard
              icon={<PersonIcon style={{ width: 20, height: 20 }} />}
              title="Create an Account"
              content="Sign up or Sign in to access your personalized meal plans"
            />
            <OnboardingCard
              icon={<GearIcon style={{ width: 20, height: 20 }} />}
              title="Set Your Preferences"
              content="Set your dietary preferences and goals to tailor your meal plans"
            />
            <OnboardingCard
              icon={<CheckIcon style={{ width: 20, height: 20 }} />}
              title="Receive Your Meal Plan"
              content="Get your personalized meal plan delivered weekly to your account"
            />
          </Flex>
        </Flex>
      </Section>
    </Flex>
  );
};

export default Home;
