import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import { useProfile } from '../Context/ProfileContext';


const RegisterPage=()=>{
    const{setIsLogged}=useProfile();
    const[name,setName]=useState('');
    const[surname,setSurname]=useState('');
    const[nickname,setNickname]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[repassword,setRepassword]=useState('');
    const[job,setJob]=useState('');
    const[gender,setGender]=useState('');

    return (
        <>
        <div className="register">
        <h2>Üye kayıt</h2>
        <hr/>
        <div className="form_register ">
            <form action="#">
                <div className="group1"></div>
                <div className="group">
                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" " value={name} onChange={(e)=>setName(e.target.value)}/>
                        <label  className="form__label">Ad</label>
                    </div>

                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" " value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                        <label  className="form__label">Soyad</label>
                    </div>
                </div>

                <div className="group">
                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" " value={nickname} onChange={(e)=>setNickname(e.target.value)}/>
                        <label  className="form__label">Kullanıcı adı</label>
                    </div>

                    <div className="form__div">
                        <input type="email" className="form__input" placeholder=" " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label className="form__label">E-posta</label>
                    </div>
                </div> 

                <div className="group">
                    <div className="form__div">
                        <input type="password" className="form__input" placeholder=" " value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <label  className="form__label">Şifre</label>
                    </div>

                    <div className="form__div">
                        <input type="password" className="form__input" placeholder=" " value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
                        <label  className="form__label">Şifre tekrar</label>
                    </div>
                </div>

                <div className="group" id="radio_group" style={{"margin-bottom": "20px"}}>
                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" " value={job} onChange={(e)=>setJob(e.target.value)}/>
                        <label className="form__label">Meslek</label>
                    </div>
                    <div className="form__div invisible">
                        <input type="text" className="form__input" placeholder=" "/>
                        <label className="form__label"></label>
                    </div>

                    <div className="radio">

                        <label id="label">
                    <input type="radio" checked={gender==='MALE'} name="radio" value={gender}  onChange={()=>setGender('MALE')} />
                    
                    <span>Erkek</span>
                </label>

                        <label id="label">
                    <input type="radio" checked={gender==='FEMALE'} value={gender} name="radio" onChange={()=>setGender('FEMALE')} />
                    <span>Kadın</span>
                </label>

                    </div>
                </div>
                <div className="group">
                    <Link to="/" onClick={()=>setIsLogged(true)}>
                        <input id="submit_btn"  type="submit" value="Kayıt ol"/>
                    </Link>
                </div>
            </form>
            <div className="parapgraph group">
                <p>Kaydolarak <a href="#">Kullanım Şartlarımızı</a> ve <a href="#">Gizlilik Politikamızı</a> kabul etmiş olursunuz.
                </p>

            </div>
            <div className="toSignIn">
                <p>Hesabınız var mı? <Link to="/login" >Oturum Aç</Link> </p>

            </div>

        </div>
    </div>
    </>
    )
}






export default RegisterPage
