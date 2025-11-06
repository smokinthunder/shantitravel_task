import { ERROR_MESSAGES } from "@/lib/constants";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

/**
 * Loading component with spinner
 */
export function LoadingState({ 
  message = "Loading...", 
  className = "" 
}: LoadingStateProps) {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <div className="flex items-center space-x-3">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        <span className="text-gray-600">{message}</span>
      </div>
    </div>
  );
}

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

/**
 * Error state component with retry option
 */
export function ErrorState({ 
  message = ERROR_MESSAGES.FETCH_FAILED, 
  onRetry,
  className = ""
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="text-red-500 text-5xl mb-4">⚠️</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-gray-600 mb-4">
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

interface EmptyStateProps {
  message?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

/**
 * Empty state component
 */
export function EmptyState({ 
  message = "No data available",
  description,
  action,
  className = ""
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center ${className}`}>
      <div className="text-gray-400 text-5xl mb-4">📝</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {message}
      </h3>
      {description && (
        <p className="text-gray-600 mb-4">
          {description}
        </p>
      )}
      {action}
    </div>
  );
}