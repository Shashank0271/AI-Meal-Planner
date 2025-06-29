import { useAuth, useUser } from "@clerk/clerk-react";
import type React from "react";
import type { ReactNode } from "react";
import { Route, type RouteProps } from "wouter";

interface ProtectedRouteProps extends RouteProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({
  children,
  ...rest
}) => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  return <Route {...rest}>{children}</Route>;
};
