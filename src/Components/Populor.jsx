import React from 'react'

const Populor = ({populor,data,setPopulor,setData , popcount}) => {
    let array = []
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDkxN2NiMGUxZDNhYjhhZTRhZDk5NzQzNTNiODU0YyIsInN1YiI6IjY1Njk3OGI4NzFmMDk1MDBhYTBlOTE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVgo4qHzgtniwB1nvSfSLY-6UbAHh7ZCiyqbXPf6zG0'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=ta&page=1', options)
        .then(response => response.json())
        .then(response => {
            array = response.results.slice(0,8)
            setPopulor(array)
            setData(prev => [...array])
            
        })
        .catch(err => console.error(err));
  return ;
}

export default Populor