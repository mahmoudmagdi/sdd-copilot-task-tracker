interface SummaryCardProps {
  title: string;
  value: number;
}

export function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-50">{value}</p>
    </div>
  );
}
