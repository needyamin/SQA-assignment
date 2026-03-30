import { Loader } from "lucide-react"

const LoadingIndicator = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center py-12">
            <Loader className="w-8 h-8 text-blue-600 animate-spin mb-4" />
            <p className="text-slate-600 font-medium">
              Searching legal documents...
            </p>
          </div>
  )
}

export default LoadingIndicator