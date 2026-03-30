import type { Document } from "@/interface/common.interface";


type DocumentListProps =  {
  documents: Document;
}

export default function ShowDocumentListList({ documents }: DocumentListProps) {
  return (
    <div className="mt-8 space-y-4">
    
        <div
          className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-200"
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-lg font-semibold text-slate-900 flex-1">
              {documents.title}
            </h3>
           
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            {documents.content}
          </p>
        </div>
      
    </div>
  );
}
