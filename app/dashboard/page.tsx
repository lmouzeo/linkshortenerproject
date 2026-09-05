import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <header className="flex items-center justify-between">
        <h1>Dashboard</h1>
        <UserButton />
      </header>
    </main>
  );
}
