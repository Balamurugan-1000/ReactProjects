import React from 'react'
import TopBar from "./TopBar";
import { Outlet } from 'react-router-dom';

const Layout = ({setSearchKey,navigate, searchKey}) => {
  return (
    
    <div className="flex  flex-col justify-start font-montserrat ">
    <TopBar  setSearchKey = {setSearchKey} searchKey={searchKey}  navigate={navigate}/>
    <Outlet />
    </div>
  )
}

export default Layout