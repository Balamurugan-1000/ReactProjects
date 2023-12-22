import React from 'react'
import PopulorRender from "./PopulorRender";
import Render from "../Render";



const ContentArea = ({populor,setPopcount,popcount ,movie , setFullscreendata ,Fullscreendata , setGenreName ,genreName , genre ,setGenre }) => {
  return (
    <div className='text-white  bg-[#0d0c22] mt-7'>
      setGenreName = {setGenreName} genreName = { genreName} genre = {genre} setGenre = { setGenre}
        <PopulorRender   populor={populor}  setPopcount={setPopcount} popcount={popcount} setFullscreendata = {setFullscreendata} Fullscreendata={Fullscreendata} />
        <Render movie={movie} setFullscreendata = {setFullscreendata} Fullscreendata={Fullscreendata}/>


    </div>
  )
}

export default ContentArea