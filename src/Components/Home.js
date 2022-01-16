import React from 'react'
import { useState } from 'react'
import Content from './CommentPage'
import CommentPage from './CommentPage'
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
