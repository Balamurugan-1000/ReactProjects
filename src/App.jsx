import React, { useEffect, useState } from "react";
import Fetch from "../API/Fetch";
import Populor from "./Components/Populor";
import ContentArea from "./Components/ContentArea";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route , Routes } from 'react-router';
import Layout from "./Components/Layout"; // Add missing import statement
import FullScreenRender from "./Routes/FullScreenRender";
import { useNavigate } from "react-router-dom";
import Search from "./Components/Search"


const App = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [videoID, setVideoID] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [populor , setPopulor] = useState([])
  const [popcount , setPopcount] =  useState(0)
  const [data , setData] = useState([])
  const [searchKey , setSearchKey] = useState("")
  const navigate = useNavigate();
  const [Fullscreendata , setFullscreendata] = useState([])
  
  useEffect(() => {
    Fetch({ movie, setMovie, page, setPage });
  }, [page]);



  useEffect(() => {
    if (videoID.length === movie.length) {
      setIsLoading(false); 
    }
  }, [videoID, movie]);

useEffect (() => {
  Populor( { populor : populor , data :data  ,setPopulor : setPopulor ,  setData : setData , popcount : popcount})
},[movie , popcount])

if (isLoading) {
  return <div>Loading...</div>; 
  
}

return (
  <>
    <Routes>
      <Route path="/" element={<Layout searchKey={searchKey} setSearchKey={setSearchKey} navigate={navigate} />} >
      <Route index element={<ContentArea setFullscreendata = {setFullscreendata} Fullscreendata={Fullscreendata} movie={movie} populor={populor} setPopcount={setPopcount} popcount={popcount} />} />
      <Route path = "/search" element={<Search searchKey={searchKey} setSearchKey={setSearchKey} navigate={navigate}  setFullscreendata = {setFullscreendata} Fullscreendata={Fullscreendata} />} />
      <Route path="/:id" element={<FullScreenRender movie={movie} setFullscreendata={setFullscreendata} Fullscreendata={Fullscreendata} />} />
      </Route>
    </Routes>
        
  </>
);
};

export default App;
