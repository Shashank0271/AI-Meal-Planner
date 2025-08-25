import React from "react";

export enum PlanType {
  Free = "Free",
  Premium = "Premium",
  Pro = "Pro",
}

interface SubscriptionCardType {
  planType: PlanType;
  amount: number;
  heading: string;
  isPopular?: boolean;
  buttonLabel: string;
  perks: string[];
}

const SubscriptionCard: React.FC<SubscriptionCardType> = ({
  planType,
  amount,
  heading,
  perks,
  buttonLabel,
  isPopular = false,
}) => (
  <div className="flex flex-col items-center bg-gray-2  border border-gray-6  rounded-2xl p-8 shadow-lg w-80 max-w-1/2 min-h-[420px] transition-colors flex-1 relative">
    {isPopular ? (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-9 text-accent-contrast px-4 py-1 rounded-full text-xs font-bold shadow-md">
        Popular
      </span>
    ) : null}
    <span className="text-accent-10 text-2xl font-bold mb-2">{planType}</span>
    <span className="text-3xl font-extrabold text-gray-12 mb-2">₹{amount}</span>
    <span className="text-gray-10 mb-4">{heading}</span>
    <div className="flex flex-1 flex-col justify-between pb-6">
      <ul className="text-gray-9 text-sm mb-6 list-disc">
        {perks.map((perk) => (
          <li>{perk}</li>
        ))}
      </ul>
      <button className="bg-accent-9 hover:!bg-[var(--accent-10)] cursor-pointer text-accent-contrast font-semibold py-2 px-6 rounded-lg whitespace-nowrap">
        {buttonLabel}
      </button>
    </div>
  </div>
);

export default SubscriptionCard;
