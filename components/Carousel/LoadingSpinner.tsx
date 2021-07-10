export interface LoadingSpinnerProps {
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={`animate-spin rounded-full h-32 w-32 border-t-1 border-b-2 border-primary ${className}`}></div>
  )
}

export default LoadingSpinner
