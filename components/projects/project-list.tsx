import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function ProjectList() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (projects.length === 0) {
    return (
      <p className="text-zinc-500 text-sm">
        No projects yet. Create one above.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {projects.map((project) => (
        <li key={project.id}>
          <Link
            href={`/projects/${project.id}`}
            className="block rounded-lg border border-zinc-200 bg-white px-5 py-4 hover:border-zinc-400 transition-colors dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-zinc-500"
          >
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              {project.name}
            </p>
            {project.description && (
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                {project.description}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
