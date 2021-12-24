import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class RegisterPage extends Component   {
    
    constructor(props){
        super(props);
        this.state={
            name:'',
            surname:'',
            nickname:'',
            email:'',
            password:'',
            repassword:'',
            job:'',
            gender:''
        }
    }



    render(){
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
                            <input type="text" className="form__input" placeholder=" " value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                            <label  className="form__label">Ad</label>
                        </div>

                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " value={this.state.surname} onChange={(e)=>this.setState({surname:e.target.value})}/>
                            <label  className="form__label">Soyad</label>
                        </div>
                    </div>

                    <div className="group">
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " value={this.state.nickname} onChange={(e)=>this.setState({nickname:e.target.value})}/>
                            <label  className="form__label">Kullanıcı adı</label>
                        </div>

                        <div className="form__div">
                            <input type="email" className="form__input" placeholder=" " value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                            <label className="form__label">E-posta</label>
                        </div>
                    </div>

                    <div className="group">
                        <div className="form__div">
                            <input type="password" className="form__input" placeholder=" " value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                            <label  className="form__label">Şifre</label>
                        </div>

                        <div className="form__div">
                            <input type="password" className="form__input" placeholder=" " value={this.state.repassword} onChange={(e)=>this.setState({repassword:e.target.value})}/>
                            <label  className="form__label">Şifre tekrar</label>
                        </div>
                    </div>

                    <div className="group" id="radio_group">
                        <div className="form__div">
                            <input type="text" className="form__input" placeholder=" " value={this.state.job} onChange={(e)=>this.setState({job:e.target.value})}/>
                            <label className="form__label">Meslek</label>
                        </div>
                        <div className="form__div invisible">
                            <input type="text" className="form__input" placeholder=" "/>
                            <label className="form__label"></label>
                        </div>

                        <div className="radio">

                            <label id="label">
                        <input type="radio" checked={this.state.gender==='MALE'} name="radio" value={this.state.gender}  onChange={()=>this.setState({gender:'MALE'})} />
                        
                        <span>Erkek</span>
                    </label>

                            <label id="label">
                        <input type="radio" checked={this.state.gender==='FEMALE'} value={this.state.gender} name="radio" onChange={()=>this.setState({gender:'FEMALE'})} />
                        <span>Kadın</span>
                    </label>

                        </div>
                    </div>
                    <div className="group">
                        <input id="submit_btn" type="submit" value="Kayıt ol"/>
                    </div>
                </form>
                <div className="parapgraph group">
                    <p>Kaydolarak <a href="#">Kullanım Şartlarımızı</a> ve <a href="#">Gizlilik Politikamızı</a> kabul etmiş olursunuz.
                    </p>

                </div>
                <div className="toSignIn">
                    <p>Hesabınız var mı? <Link to="/login">Oturum Aç</Link> </p>

                </div>

            </div>
        </div>
        </>
        )
    }
}


export default RegisterPage
