import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import LoadingFallback from "./LoadingFallback";
import ErrorFallback from "./ErrorFallback";

interface WithBoundaryProps {
  children: React.ReactNode;
}

const SafeSuspense = ({ children }: WithBoundaryProps) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};

export default SafeSuspense;
