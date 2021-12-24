import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
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
