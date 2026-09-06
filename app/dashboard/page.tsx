import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <header className="flex items-center justify-between px-6 py-4">
        <h1>Dashboard</h1>
        <UserButton />
      </header>
    </main>
  );
}
