import { z } from "zod";

export const TaskStatusEnum = z.enum(["TODO", "IN_PROGRESS", "DONE", "CANCELLED"]);
export const TaskPriorityEnum = z.enum(["LOW", "MEDIUM", "HIGH"]);

export const createTaskSchema = z.object({
  title: z.string().min(2).max(150),
  description: z.string().max(1000).optional(),
  status: TaskStatusEnum,
  priority: TaskPriorityEnum,
  dueDate: z.coerce.date().optional(),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
