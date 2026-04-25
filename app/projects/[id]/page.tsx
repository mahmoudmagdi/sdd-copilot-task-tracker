import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import CreateTaskForm from "@/components/tasks/create-task-form";
import TaskList from "@/components/tasks/task-list";
import TaskSearchInput from "@/components/tasks/task-search-input";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ q?: string }>;
}

export default async function ProjectPage({
  params,
  searchParams,
}: ProjectPageProps) {
  const { id } = await params;
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

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

  const lowerQuery = query.toLowerCase();
  const filteredTasks = query
    ? project.tasks.filter((task) =>
        task.title.toLowerCase().includes(lowerQuery),
      )
    : project.tasks;

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
            ({filteredTasks.length})
          </span>
        </h2>
        <div className="mb-4">
          <TaskSearchInput initialValue={query} />
        </div>
        <TaskList tasks={filteredTasks} projectId={project.id} />
      </section>
    </main>
  );
}
