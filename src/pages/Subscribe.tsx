import { PricingTable, useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Spinner } from "@radix-ui/themes";

const Subscribe = () => {
  const { isSignedIn } = useAuth();
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
      }`}
    >
      {isSignedIn === undefined ? <Spinner size={"3"} /> : <PricingTable />}
    </div>
  );
};

export default Subscribe;
