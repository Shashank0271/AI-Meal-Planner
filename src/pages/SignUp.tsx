import { SignIn } from "@clerk/clerk-react";
import { useTheme } from "../contexts/Theme/ThemeContext";
import { dark, experimental__simple } from "@clerk/themes";

const SignUp = () => {
  const { isDark } = useTheme();
  return (
    <div className="flex items-center justify-center">
      <SignIn
        appearance={{ baseTheme: isDark ? dark : experimental__simple }}
      />
    </div>
  );
};

export default SignUp;
