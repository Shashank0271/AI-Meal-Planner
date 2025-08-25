import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import SubscriptionCard, {
  PlanType,
} from "../components/molecules/SubscriptionCard";

const Subscribe = () => {
  // TODO : integrate Stripe custom integration
  // LIMIT the number of meal plans we can have on the basis of subscription
  // Store the meal plans , record how many meal plans a user has on basis of subscription
  //SETUP backend , optional : Clerk auth middleware on spring boot -> spring security
  const { isSignedIn, isLoaded } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (isSignedIn === false) {
      navigate("/signup");
    }
  }, [isSignedIn]);

  return (
    <div
      className={`flex flex-row mx-[10%] items-center justify-center ${
        isSignedIn === undefined ? "flex-1" : ""
      } `}
    >
      {/* Subscription Plans */}
      <div
        className="flex flex-row flex-wrap gap-8 w-full max-w-5xl justify-center  
        md:flex-row md:gap-8
        sm:flex-col sm:gap-6  sm:items-center"
      >
        {/* Free Plan */}
        <SubscriptionCard
          planType={PlanType.Free}
          amount={0}
          heading="Basic access to meal planner"
          buttonLabel="Free Plan"
          perks={["1 meal plan", "Limited Features", "Community Support"]}
        />

        {/* ₹250 Plan */}
        <SubscriptionCard
          planType={PlanType.Pro}
          amount={250}
          heading="For growing needs"
          buttonLabel="Choose Pro"
          perks={[
            "Up to 5 meal plans",
            "Priority support",
            "Advanced Features",
          ]}
          isPopular
        />

        {/* ₹500 Plan */}
        <SubscriptionCard
          planType={PlanType.Premium}
          amount={500}
          heading="All features unlocked"
          buttonLabel="Choose Premium"
          perks={[
            "Unlimited Meal plans",
            "expert support",
            "Early access to new features",
          ]}
        />
      </div>
    </div>
  );
};

export default Subscribe;
