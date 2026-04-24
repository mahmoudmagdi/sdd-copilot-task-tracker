import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CreateTaskForm from "@/components/tasks/create-task-form";
import TaskList from "@/components/tasks/task-list";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      tasks: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">{project.name}</h1>
        {project.description && (
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            {project.description}
          </p>
        )}
        <p className="mt-2 text-xs text-zinc-400">
          Created {new Date(project.createdAt).toLocaleDateString()}
        </p>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-semibold">Add Task</h2>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
          <CreateTaskForm projectId={project.id} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">
          Tasks{" "}
          <span className="text-sm font-normal text-zinc-400">
            ({project.tasks.length})
          </span>
        </h2>
        <TaskList tasks={project.tasks} projectId={project.id} />
      </section>
    </main>
  );
}
