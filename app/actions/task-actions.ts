"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { createTaskSchema, TaskStatusEnum } from "@/lib/validations/task";

export async function createTask(projectId: string, formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description") || undefined,
    status: formData.get("status"),
    priority: formData.get("priority"),
    dueDate: formData.get("dueDate") || undefined,
  };

  const parsed = createTaskSchema.safeParse(raw);

  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }

  await prisma.task.create({
    data: {
      ...parsed.data,
      projectId,
    },
  });

  revalidatePath(`/projects/${projectId}`);
  return { success: true };
}

export async function updateTaskStatus(taskId: string, projectId: string, status: string) {
  const parsed = TaskStatusEnum.safeParse(status);

  if (!parsed.success) {
    return { error: "Invalid status" };
  }

  await prisma.task.update({
    where: { id: taskId },
    data: { status: parsed.data },
  });

  revalidatePath(`/projects/${projectId}`);
  return { success: true };
}

export async function deleteTask(taskId: string, projectId: string) {
  await prisma.task.delete({
    where: { id: taskId },
  });

  revalidatePath(`/projects/${projectId}`);
  return { success: true };
}
