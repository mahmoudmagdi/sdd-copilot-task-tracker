"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { createProjectSchema } from "@/lib/validations/project";

export async function createProject(formData: FormData) {
  const raw = {
    name: formData.get("name"),
    description: formData.get("description") || undefined,
  };

  const parsed = createProjectSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.errors[0].message };
  }

  await prisma.project.create({
    data: parsed.data,
  });

  revalidatePath("/projects");
  return { success: true };
}
