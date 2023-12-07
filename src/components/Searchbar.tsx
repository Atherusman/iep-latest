import React from "react";
import { Link } from "react-router-dom";

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className=" w-full">
      <div className="flex mt-2 mr-5">
        <span className="pl-2.5 flex items-center justify-centerpointer-events-none">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="px-4 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
          // placeholder={placeholder}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
