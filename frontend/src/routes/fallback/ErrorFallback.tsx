import type { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert" className="bg-red-100 text-red-800 p-4 rounded">
      <p className="font-semibold">Something went wrong:</p>
      <pre className="text-sm mt-2 whitespace-pre-wrap">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-3 px-3 py-1 bg-red-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
