import React from "react";
import Video from "../../API/Video";

const RenderFull = ({ item , videoLink ,setNewMovie , newMovie}) => {
  return (
    <div className="h-full mt-[0px] flex justify-between  grow w-full ml-3 shrink  bg-[#000] mx-5">
      return (
      <div className="h-full mt-[70px] flex justify-between  grow w-full ml-3 shrink  bg-[#000]">
        <div className="text-[#a6b4b6] h-[760px] font-montserrat ">
          <h1 className="text-[76px] whitespace-pre-wrap mt-3 ml-3 w-500px overflow-clip">
            {item.original_title}
          </h1>
          <div className="">
            <h2 className="mt-5 font-montserrat  text-xl">
              {" "}
              <span className="text-purple mr-1">ReleaseDate </span> {":    "}{" "}
              {item.release_date}
            </h2>
          </div>
          <div className=" flex flex-col gap-0 ">
            <h2 className="mt-5 font-montserrat text-purple text-xl">OverView</h2>
            <p className="w-[500px] font-subtitle font-light mt-4 indent-10">
              {item.overview}
            </p>
          </div>
          <div className="">
            <h2 className="mt-5 font-montserrat text-xl">
              {" "}
              <span className="text-purple mr-1">Popularity </span> {":    "}{" "}
              {item.popularity}
            </h2>
          </div>
          <div className="">
            <h2 className="mt-5 font-montserrat text-xl">
              {" "}
              <span className="text-purple mr-1">Vote Average </span> {":    "}{" "}
              {item.vote_average}
            </h2>
          </div>
          <div className="">
            <h2 className="mt-5 font-montserrat text-xl">
              {" "}
              <span className="text-purple mr-1">Vote Count </span> {":    "}{" "}
              {item.vote_count}
            </h2>
        </div>
       
        </div>
        
        <div className="relative   h-[750px] w-[700px]">
          <img
            className="rounded-lg  bg-[#12102e]   h-[760px] w-[700px] fixed"
            key={Math.random()}
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
          />
        </div>
      </div>
      )
    </div>
  );
};

export default RenderFull;
