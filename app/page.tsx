import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold text-zinc-900">Task Tracker</h1>
        <p className="text-zinc-500">Manage your projects and tasks.</p>
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 hover:border-zinc-500 transition-colors"
          >
            Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
