import React from 'react'

const Fetch = ({movie , setMovie,page , setPage}) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDkxN2NiMGUxZDNhYjhhZTRhZDk5NzQzNTNiODU0YyIsInN1YiI6IjY1Njk3OGI4NzFmMDk1MDBhYTBlOTE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVgo4qHzgtniwB1nvSfSLY-6UbAHh7ZCiyqbXPf6zG0'
        }
      };
      const fetchDaata =  () => {
        
       fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        setMovie([...movie,...response.results])
        page <5 ? setPage(page + 1) : null
    })
      .catch(err => console.error(err));
      }
      fetchDaata()
}

export default Fetch