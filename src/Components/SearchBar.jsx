import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ searchKey, setSearchKey ,navigate}) => {
  return (
    <form className="search bg-[#0d0c22] flex justify-center items-center px-1 rounded-2xl"
    onSubmit={(e) => {
      e.preventDefault();
      navigate("/search");
    }}
    >
      <input
        autoFocus
        required
        type="text"
        placeholder="Search"
        value={searchKey}
        onChange={
      (e) => setSearchKey(e.target.value)
        }
        className=" text-[#494e4e] bg-transparent outline-none p-2 rounded-3xl"
      />
      <button type="submit"
      
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/search");
      }
    }
      >
        <IoSearchOutline className="text-purple text-2xl mr-3" />
      </button>
    </form>
  );
};

export default SearchBar;
