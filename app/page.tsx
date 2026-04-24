import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 py-32 px-6 text-center">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Task Tracker
        </h1>
        <p className="max-w-sm text-zinc-500 dark:text-zinc-400">
          Manage your projects and tasks in one place.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/projects"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-8 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            View Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
