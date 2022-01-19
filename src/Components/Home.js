import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

import { Outlet } from "react-router-dom";

const Home = () => {


    return (
            <div>
                <Navbar hasContent={true}/>
                <SideBar  />
                <Outlet />
            </div>
    )
}

export default Home
