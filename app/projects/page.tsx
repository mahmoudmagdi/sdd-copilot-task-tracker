import { Suspense } from "react";
import CreateProjectForm from "@/components/projects/create-project-form";
import ProjectList from "@/components/projects/project-list";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects — Task Tracker",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>

        <section className="mt-8 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-900">
          <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
            New Project
          </h2>
          <CreateProjectForm />
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-base font-semibold text-zinc-900 dark:text-zinc-50">
            All Projects
          </h2>
          <Suspense
            fallback={<p className="text-sm text-zinc-500">Loading…</p>}
          >
            <ProjectList />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
