"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { createProjectSchema } from "@/lib/validations/project";

export type CreateProjectState = {
  errors?: {
    name?: string[];
    description?: string[];
  };
  message?: string;
};

export async function createProject(
  _prevState: CreateProjectState,
  formData: FormData,
): Promise<CreateProjectState> {
  const raw = {
    name: formData.get("name"),
    description: formData.get("description") ?? undefined,
  };

  const parsed = createProjectSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  await prisma.project.create({
    data: {
      name: parsed.data.name,
      description: parsed.data.description,
    },
  });

  revalidatePath("/projects");

  return { message: "Project created." };
}
