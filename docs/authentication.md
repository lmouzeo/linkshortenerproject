# Authentication Standards

## Overview

Authentication in this app is handled exclusively by **Clerk** (`@clerk/nextjs`). Do not introduce any other auth method, library, or custom session/JWT handling.

## Rules

1. **Clerk only** — all sign-in, sign-up, session, and user-management logic must go through Clerk's SDK/components. Never hand-roll auth (custom cookies, NextAuth, Passport, etc.).
2. **Modal sign-in/sign-up** — `SignInButton` and `SignUpButton` must always use `mode="modal"`. Do not link to dedicated `/sign-in` or `/sign-up` pages for triggering auth from the app UI.
   ```tsx
   <SignInButton mode="modal">
     <button>Sign in</button>
   </SignInButton>
   <SignUpButton mode="modal">
     <button>Sign up</button>
   </SignUpButton>
   ```
3. **`/dashboard` is protected** — it must require an authenticated user. Enforce this in `proxy.ts` via `clerkMiddleware`, using `auth.protect()` for the `/dashboard` route (and any nested routes under it).
   ```ts
   import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

   const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

   export default clerkMiddleware(async (auth, req) => {
     if (isProtectedRoute(req)) {
       await auth.protect();
     }
   });
   ```
4. **Signed-in users redirect away from the homepage** — if a signed-in user hits `/`, redirect them server-side to `/dashboard` (check `userId` from `auth()` in `app/page.tsx` and call `redirect("/dashboard")` from `next/navigation`).
   ```tsx
   import { auth } from "@clerk/nextjs/server";
   import { redirect } from "next/navigation";

   export default async function Home() {
     const { userId } = await auth();
     if (userId) redirect("/dashboard");
     // ...render public homepage
   }
   ```
5. **Use Clerk components for auth state UI** — `<Show when="signed-in">` / `<Show when="signed-out">`, `<UserButton />`, etc., rather than custom conditionals on user data.
