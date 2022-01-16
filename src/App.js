import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import CommentPage from './Components/CommentPage';
import { useState } from 'react';
import Category from './Components/Category';
function App() {
  const[isLogged,setIsLogged]=useState(true);
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Home isLogged={isLogged} setIsLogged={setIsLogged}/>}>
          <Route index element={<CommentPage isLogged={isLogged} />} />
          <Route path="category" element={<Category isLogged={isLogged}/>} />

      </Route>
      <Route  path="/register" element={
        <>
          <Navbar hasContent={false} isLogged={false}/>
          <RegisterPage/>
        </>
      }/>
      <Route  path="/login" element={
        <>
          <Navbar hasContent={false} isLogged={false}/>
          <LoginPage/>
        </>
      }/>

      </Routes>
    </Router>
  );
}

export default App;
