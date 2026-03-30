import { Search } from "lucide-react";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (text: string) => void;
  isLoading: boolean;
};

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    onSearch(inputValue);
  };
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="search"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyUp={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search for legal documents..."
            className="w-full px-4 py-3 pl-11 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        </div>
        <button
          onClick={handleSearch}
          disabled={isLoading || !inputValue}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed shadow-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
