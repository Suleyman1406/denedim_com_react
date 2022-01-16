import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class LoginPage extends Component   {
    
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            rememberMe: false
        }
    }



    render(){
        return(
        <>
        <div className="register log ">
            <h2>Üye Girişi</h2>
            <hr/>
            <form action="#">
                <div className="login form__div">
                    <input type="text" className="form__input" placeholder=" " value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                    <label htmlFor="" className="form__label">Kullanıcı adı / E-posta</label>
                </div>
                <div className="login form__div">
                    <input  type="password" className="form__input" placeholder=" " value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    <label htmlFor="" className="form__label">Şifre</label>
                </div>
                <div className="login form__div">
                    <label className="container">Beni hatırla
                    <input type="checkbox" checked={this.state.rememberMe===true} onChange={()=>this.setState(prevState=>({rememberMe:!prevState.rememberMe}))}/>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="group">
                    <input id="submit_btn" type="submit" value="Giriş Yap"/>
                </div>
            </form>
            <div className="toRegister">
                <p>Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link> </p>
            </div>
        </div>
        </>
        )
    }
}


export default LoginPage