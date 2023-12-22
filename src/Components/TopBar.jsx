import React from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from 'react-router-dom';

const TopBar = ({ setSearchKey  ,searchKey}) => {
  const navigate = useNavigate();
  const handleLogoclick = () => {
    navigate("/")
  }
  return (
    <header className="flex fixed z-10 justify-between grow items-center p-3  w-screen bg-darkblue">
      <div className="logo  text-4xl text-white  outline outline-purple p-1"

>
        <h1 className=" cursor-pointer" onClick={handleLogoclick}  >Movie</h1>
      </div>
      <div className="flex w-2/3 justify-between -ml-8 ">
       
        <nav className="text-[#aeadad]">
          <ul className="flex gap-8 text-xl  mr-10">
            <li className="hover:text-[#9143e0]">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#9143e0]">
              <a href="#">Movies</a>
            </li>
            <li className="hover:text-[#9143e0]">
              <a href="#">Tv Shows</a>
            </li>
            <li className="hover:text-[#9143e0]">
              <a href="#">People</a>
            </li>
            <li className="hover:text-[#9143e0]">
              <a href="#">More</a>
            </li>
          </ul>
        </nav>
        <div className="">
          <SearchBar  setSearchKey = {setSearchKey} navigate={navigate} searchKey={searchKey} />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
