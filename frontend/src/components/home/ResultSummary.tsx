interface ResultsSummaryProps {
  summary: string;
}

export default function ResultsSummary({
    summary,
}: ResultsSummaryProps) {
  return (
    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <p className="text-slate-700">
        <span className="font-semibold text-blue-900">{summary}</span>
      </p>
    </div>
  );
}
