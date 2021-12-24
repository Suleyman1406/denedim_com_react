import React from 'react'
import { useState } from 'react'
import Content from './Content'
import Navbar from './Navbar'
import SideBar from './SideBar'



const Home = () => {

    const[isLogged,setIsLogged]=useState(false);

    return (
            <div>
                <Navbar hasContent={true} isLogged={isLogged} setIsLogged={setIsLogged}/>
                <SideBar  isLogged={isLogged}/>
                <Content isLogged={isLogged}/>
            </div>
    )
}

export default Home
