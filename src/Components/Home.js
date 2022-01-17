import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

import { Outlet } from "react-router-dom";

const Home = ({isLogged,setIsLogged}) => {


    return (
            <div>
                <Navbar hasContent={true} isLogged={isLogged} setIsLogged={setIsLogged}/>
                <SideBar  isLogged={isLogged}/>
                <Outlet isLogged={isLogged}/>
            </div>
    )
}

export default Home
