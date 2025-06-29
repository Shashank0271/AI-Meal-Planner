export const {
  VITE_CLERK_PUBLISHABLE_KEY: clerkPublishableKey,
}: {
  // Clerk Configs
  VITE_CLERK_PUBLISHABLE_KEY: string;
} = { ...import.meta.env, ...(window as any)._env_ };
