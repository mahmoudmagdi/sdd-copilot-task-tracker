import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { CreateTaskForm } from "@/components/tasks/create-task-form";
import { TaskList } from "@/components/tasks/task-list";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      tasks: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <Link href="/projects" className="text-sm text-zinc-500 hover:text-zinc-700">
        ← Back to Projects
      </Link>
      <h1 className="mt-4 mb-1 text-2xl font-bold text-zinc-900">{project.name}</h1>
      {project.description && (
        <p className="mb-6 text-sm text-zinc-500">{project.description}</p>
      )}
      <div className="mb-8 rounded-lg border border-zinc-200 bg-white p-6">
        <h2 className="mb-4 text-lg font-semibold text-zinc-800">Add Task</h2>
        <CreateTaskForm projectId={project.id} />
      </div>
      <h2 className="mb-4 text-lg font-semibold text-zinc-800">Tasks</h2>
      <TaskList tasks={project.tasks} projectId={project.id} />
    </div>
  );
}
