import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  BarChart3,
  Check,
  Link2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="min-h-screen overflow-hidden bg-[#080b14] text-white">
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <a href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-cyan-400 text-[#080b14]">
            <Link2 className="size-4" />
          </span>
          Shortly
        </a>
        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="ghost" className="text-slate-300 hover:bg-white/10 hover:text-white">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-white text-slate-950 hover:bg-cyan-100">Get started</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </header>

      <section className="relative mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute -left-40 -top-48 size-[32rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-200">
            <Sparkles className="size-4" />
            <span>Simple links. Bigger impact.</span>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            Links that go
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              further.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Turn long, forgettable URLs into short links people trust. Share
            your ideas faster, then learn what makes them click.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 gap-2 bg-cyan-300 px-5 text-slate-950 hover:bg-cyan-200">
                Create your first link
                <ArrowRight className="size-4" />
              </Button>
            </SignUpButton>
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white">
              Explore features
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            {["Free to start", "No credit card", "Built for sharing"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="size-4 text-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 to-violet-400/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur-sm sm:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-medium text-white">Your links</p>
                <p className="mt-1 text-xs text-slate-500">Updated just now</p>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300">Live</span>
            </div>
            <div className="space-y-3">
              {[
                ["short.ly/launch", "Product launch", "2,481 clicks"],
                ["short.ly/guide", "Getting started guide", "1,204 clicks"],
                ["short.ly/news", "Monthly newsletter", "892 clicks"],
              ].map(([link, label, clicks], index) => (
                <div key={link} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#101522] p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                      <Link2 className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">{label}</p>
                      <p className="mt-1 truncate text-xs text-slate-500">{link}</p>
                    </div>
                  </div>
                  <span className="ml-3 shrink-0 text-xs text-slate-400">{clicks}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-300/10 to-violet-300/10 p-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="size-5 text-cyan-300" />
                <span className="text-sm text-slate-300">Total clicks this month</span>
              </div>
              <span className="text-lg font-semibold text-white">4,577</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-[#0c101c] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Everything you need</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Make every click count.</h2>
            <p className="mt-4 text-slate-400">A focused toolkit for creating, sharing, and understanding your links.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [Zap, "Instant short links", "Create memorable links in seconds and get back to what matters."],
              [BarChart3, "Useful analytics", "See how your audience engages with every link you share."],
              [ShieldCheck, "Reliable by design", "Keep your links organized, accessible, and ready to share."],
            ].map(([Icon, title, description]) => (
              <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-10 lg:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Ready to share smarter?</h2>
        <p className="mx-auto mt-4 max-w-lg text-slate-400">Create your first short link and make your next share more memorable.</p>
        <SignUpButton mode="modal">
          <Button size="lg" className="mt-8 h-11 gap-2 bg-white px-5 text-slate-950 hover:bg-cyan-100">
            Get started for free
            <ArrowRight className="size-4" />
          </Button>
        </SignUpButton>
      </section>
    </main>
  );
}
