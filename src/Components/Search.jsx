import React, { useEffect, useState } from "react";
import Render from "../Render";

const Search = ({ searchKey, setFullscreendata, Fullscreendata }) => {
  const [searchMovie, setSearchMovie] = useState([]);
  useEffect(() => {
    setSearchMovie([]);
    if (searchKey) {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDkxN2NiMGUxZDNhYjhhZTRhZDk5NzQzNTNiODU0YyIsInN1YiI6IjY1Njk3OGI4NzFmMDk1MDBhYTBlOTE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVgo4qHzgtniwB1nvSfSLY-6UbAHh7ZCiyqbXPf6zG0",
        },
      };

      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchKey}&include_adult=false&language=ta&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          response.results.forEach((element) => {
            if (element.poster_path !== null) {
              setSearchMovie((prev) => [...prev, element]);
            }
          });
        })
        .catch((err) => console.error(err));
    }
  }, [searchKey]);
  if (searchMovie.length > 0) {
    return (
      <div className=" bg-[#0d0c22] h-screen w-screen">
        <Render
          movie={searchMovie}
          setFullscreendata={setFullscreendata}
          Fullscreendata={Fullscreendata}
        />
      </div>
    );
  } else {
    return (
      <h1 className="h-screen w-screen text-4xl text-white-400 text-center    bg-[#0d0c22]">
        search for a movie !!!
      </h1>
    );
  }
};

export default Search;
