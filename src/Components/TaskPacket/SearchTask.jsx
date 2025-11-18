/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchTask = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching:", query);
    onSearch(query);
  };

  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center w-full max-w-xl bg-white rounded-xl shadow-md px-4 py-2 border"
      >
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search your tasks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 outline-none px-3 py-2 text-gray-700 text-base"
        />

        {/* Search Button */}
        <button
          type="submit"
          onClick={handleSearch}
          className="flex items-center gap-1 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition"
        >
          <Search size={18} />
          Search
        </button>
      </motion.form>
    </div>
  );
};

export default SearchTask;
