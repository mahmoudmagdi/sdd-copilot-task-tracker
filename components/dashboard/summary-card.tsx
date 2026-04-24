interface SummaryCardProps {
  label: string;
  value: number;
}

export function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white px-6 py-5">
      <p className="text-sm text-zinc-500">{label}</p>
      <p className="mt-1 text-3xl font-bold text-zinc-900">{value}</p>
    </div>
  );
}
