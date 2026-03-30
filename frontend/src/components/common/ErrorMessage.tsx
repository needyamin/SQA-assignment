import { AlertCircle } from "lucide-react";

type ErrorMessageProps = {
  error: Error | null;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="font-semibold text-red-900">Error</p>
        <p className="text-red-800 text-sm mt-1">{error?.message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
