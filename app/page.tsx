import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col bg-zinc-50 px-6 py-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:px-10">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-800">
        <span className="text-lg font-semibold tracking-tight">LinkShortener</span>
        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-200 dark:text-zinc-300 dark:hover:bg-zinc-800">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="rounded-md bg-zinc-950 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
                Sign up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Simple links, shared fast</p>
        <h1 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-7xl">Make every link easier to remember.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Create short, clear links for the people and projects you care about.
        </p>
      </section>
    </main>
  );
}
