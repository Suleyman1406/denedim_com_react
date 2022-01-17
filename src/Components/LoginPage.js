import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useProfile } from '../Context/ProfileContext';


const LoginPage=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[rememberMe,setRememberMe]=useState(false);
    const{setIsLogged}=useProfile();
    
    return(
        <>
        <div className="register log ">
            <h2>Üye Girişi</h2>
            <hr/>
            <form action="#">
                <div className="login form__div">
                    <input type="text" className="form__input" placeholder=" " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="" className="form__label">Kullanıcı adı / E-posta</label>
                </div>
                <div className="login form__div">
                    <input  type="password" className="form__input" placeholder=" " value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="" className="form__label">Şifre</label>
                </div>
                <div className="login form__div">
                    <label className="container">Beni hatırla
                        <input type="checkbox" checked={rememberMe===true} onChange={()=>setRememberMe(prev=>(!prev))}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="group">
                    <Link to='/'>
                        <input id="submit_btn" type="submit" value="Giriş Yap" onClick={()=>setIsLogged(true)}/>
                    </Link>
                </div>
            </form>
            <div className="toRegister">
                <p>Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link> </p>
            </div>
        </div>
        </>
    )
}



export default LoginPage