import Link from "next/link";
import { prisma } from "@/lib/prisma";

export async function ProjectList() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    include: { _count: { select: { tasks: true } } },
  });

  if (projects.length === 0) {
    return (
      <p className="text-sm text-zinc-500">
        No projects yet. Create your first project above.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {projects.map((project) => (
        <li key={project.id}>
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-5 py-4 hover:border-zinc-400 transition-colors"
          >
            <div>
              <p className="font-medium text-zinc-900">{project.name}</p>
              {project.description && (
                <p className="mt-1 text-sm text-zinc-500">{project.description}</p>
              )}
            </div>
            <span className="text-sm text-zinc-400">
              {project._count.tasks} task{project._count.tasks !== 1 ? "s" : ""}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
