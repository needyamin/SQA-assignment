import ErrorMessage from "@/components/common/ErrorMessage";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import ResultsSummary from "@/components/home/ResultSummary";
import SearchBar from "@/components/home/SearchBar";
import ShowDocumentListList from "@/components/home/ShowDocumentListList";
import useSearchPortal from "@/hooks/useSearchPortal";
import type { Document } from "@/interface/common.interface";
import { useState } from "react";

const HomePage = () => {
  const { data, isPending, onSearch, error } = useSearchPortal();
  const [query, setQuery] = useState("");

  const handleSearch = (searchText: string) => {
    setQuery(searchText);
    onSearch(searchText);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Legal Assistant
          </h1>
          <p className="text-slate-600 text-lg">
            Search and explore legal documents and regulations
          </p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isPending} />

        {isPending && <LoadingIndicator />}
       


        {
         data?.matched_docs?.length > 0 && (
            <>
              <ResultsSummary
               summary={data?.summary}
              />
              {data.matched_docs.map((doc:Document) =>(
                    <ShowDocumentListList key={doc.id} documents={doc} />
              ))}
             
            </>
          )}

        {
          data?.matched_docs?.length === 0 && <NotFoundMessage query={query} />}
           {error && <ErrorMessage error={error}/>}
      </div>
    </main>
  );
};

export default HomePage;
