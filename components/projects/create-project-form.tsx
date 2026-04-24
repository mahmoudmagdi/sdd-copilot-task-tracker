"use client";

import { useActionState } from "react";
import { createProject } from "@/app/actions/project-actions";

type State = { error?: string; success?: boolean } | null;

export function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState<State, FormData>(
    createProject,
    null
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium text-zinc-700">
          Project Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="My project"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium text-zinc-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          maxLength={500}
          rows={3}
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
          placeholder="Optional description"
        />
      </div>
      {state?.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:opacity-50"
      >
        {isPending ? "Creating…" : "Create Project"}
      </button>
    </form>
  );
}
