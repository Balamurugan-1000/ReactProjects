import React, { useEffect, useState } from "react";
import Populor from "./Populor";
import ActiveBar from "./ActiveBar";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const PopulorRender = ({ populor, popcount, setPopcount , setFullscreendata, Fullscreendata }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState([]);
  const [genreName, setGenreName] = useState([]);
  useEffect(() => {
    if (populor.length !== 0) {
      setData(populor[popcount]);
    }
  }, [populor, popcount]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDkxN2NiMGUxZDNhYjhhZTRhZDk5NzQzNTNiODU0YyIsInN1YiI6IjY1Njk3OGI4NzFmMDk1MDBhYTBlOTE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVgo4qHzgtniwB1nvSfSLY-6UbAHh7ZCiyqbXPf6zG0"
      }
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenre(response.genres))
      .catch((err) => console.error(err));

    setGenreName(
      genre.filter((item) => populor[popcount].genre_ids.includes(item.id))
    );
  }, [populor, genre, popcount]);


  useEffect(() => {
    const interval = setInterval(() => {
      setPopcount((prevPopcount) =>
        prevPopcount < 6 ? prevPopcount + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [setPopcount]);

  return (
    
<div className="w-screen text-center h-[650px] box-border transition-all  -mt-5  delay-150 ease-linear">
      <div className="h-[600px] mx-5 bg-[#12102e] w-[1400px] absolute p-4 mt-[40px] flex items-center rounded-lg">
        <div className="left flex flex-col  relative items-start   w-1/3 h-full">

          <p className=" text-[14px]">
                  {
                  genreName.map((item) => (
                    <span key={Math.random()} className="mr-2  text-purple ml-0"> /{item.name} </span>
                  ))
                }
          </p>
          <h1 className="text-[40px] h-[200px]  w-auto font-bold  left-0 mt-10 ">{data.original_title}</h1>
          <p className="mt-5 text-slate-500">{ data.overview}</p>
          <div className="absolute bottom-[100px]">
            <button  className="bg-purple text-white rounded-full hover:bg-[#8c30e3] p-2 mt-10"
            onClick={() => {
              setFullscreendata(data);
              navigate(`/${data.id}`);
            
            }}
            >See Details</button>
            <button className=" hover:text-white  text-slate-600 rounded-full p-2 mt-10 ml-5">See Details</button>
          </div>

            <div className="Acti">
              <ActiveBar  populor = {populor} popcount = { popcount} setPopcount = {setPopcount}/>
            </div>
        </div>
        <div className="rigght h-full relative rounded-2xl ml-[70px] w-2/3">
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="h-full absolute  rounded-2xl w-full" alt="" />
        </div>

      </div>
    </div>


  );
};

export default PopulorRender;