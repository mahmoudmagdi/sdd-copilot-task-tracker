<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

This repository is spec-driven: start from the relevant file in `/specs` and do not implement behavior outside the active spec or issue scope.

Use the current project layout (root `app/` and `lib/`, not `src/` in this repo). Follow existing examples such as Prisma setup in `lib/prisma.ts` and Zod schemas in `lib/validations/*.ts`.

For mutations, prefer server actions under `app/actions/`; do not access Prisma from client components.

Validate changes with `npm run lint` and `npm run build`; use `npm run db:generate` and `npm run db:migrate` when schema/database changes are involved.
<!-- END:nextjs-agent-rules -->
