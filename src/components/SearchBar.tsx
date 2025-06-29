
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

const SearchBar = ({ onSearch, loading }: SearchBarProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative backdrop-blur-md bg-slate-800/30 border border-slate-600/40 rounded-2xl p-2 flex flex-col sm:flex-row items-center gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name (e.g., London, Tokyo, New York)"
            className="flex-1 w-full bg-transparent text-white placeholder-slate-400 px-4 py-3 focus:outline-none text-lg"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !city.trim()}
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 min-w-[140px] shrink-0"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Searching...</span>
              </div>
            ) : (
              'Get Weather'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
