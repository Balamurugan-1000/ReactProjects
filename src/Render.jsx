import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";

const Render = ({ movie, setFullscreendata, Fullscreendata }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-5 grid-flow-row gap-10 mx-5">
      {movie.map((item) => {
        return (
          <div
            key={Math.random()}
            className="flex items-center justify-between flex-col mt-10 hover:scale-110 transition-all delay-300 cursor-pointer scroll-smooth ease-linear bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-400 via-gray-600 to-blue-900 p-5 box-border"
            onClick={() => {
              setFullscreendata(item);
              navigate(`/${item.id}`);
              console.log(Fullscreendata);
            }}
          >
            <img
              className="rounded-lg h-[250px] w-[250px]"
              key={Math.random()}
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
            <div className="">
              <h1 className="text-3xl font-bold" key={Math.random()}>
                {item.title}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Render;
