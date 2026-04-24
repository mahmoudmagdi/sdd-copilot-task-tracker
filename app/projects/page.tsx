import { Suspense } from "react";
import { ProjectList } from "@/components/projects/project-list";
import { CreateProjectForm } from "@/components/projects/create-project-form";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-zinc-900">Projects</h1>
      <div className="mb-8 rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-zinc-800">New Project</h2>
        <CreateProjectForm />
      </div>
      <Suspense fallback={<p className="text-sm text-zinc-500">Loading projects…</p>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
