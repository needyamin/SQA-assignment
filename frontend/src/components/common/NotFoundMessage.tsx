type NotFoundMessageProps = {
    query:string
}

const NotFoundMessage = ({query}:NotFoundMessageProps) => {
  return (
    <div className="mt-8 p-8 bg-white rounded-lg border border-slate-200 text-center">
    <p className="text-slate-600">
      No documents found matching "{query}". Try a different search
      term.
    </p>
  </div>
  )
}

export default NotFoundMessage