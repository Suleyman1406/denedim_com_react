import React, { useEffect, useState } from 'react'
import styled,{css} from "styled-components";
import { Link as LinkR} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import {AiFillSetting} from 'react-icons/ai'
import {MdNotificationsActive} from 'react-icons/md'
import {BiSearchAlt2} from 'react-icons/bi'
import { useProfile } from '../Context/ProfileContext';
const Nav = styled.nav`
    height:57px;
    background-image: linear-gradient(90deg, rgba(139,199,152,1) 0%, rgba(147,178,184,1) 25%, rgba(158,149,200,1) 50%, rgba(149,182,222,1) 75%, rgba(135,208,239,1) 100%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-size: 1rem;
    top: 0;
    z-index: 1000;
    @media screen and (max-width:600){
        transition:  0.8s all ease;
        margin-bottom: 10px;
    }
`
const NavbarContainer =styled.div`
    display: flex;
    justify-content: space-between;
    height: 57px;
    z-index: 1;
    width: 100%;
    padding: 0 12px;

`


const NavLogo = styled.img`
  width: 150px;
  transition: 0.2s all;
  transform: translateY(2.5px);

  &:hover{
    width: 170px;
  }
`
const LogoContainer=styled.div`
    width: 35px;
    overflow: hidden;
 
       
`
const NavLink =styled(LinkR)`
    text-decoration: none;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    width: 20%;
   
`


const NavBtns=styled.div`
    width: 16%;
    display: flex;  
    justify-content: end;
    margin: auto 0px;
    
    font-size: 0.8rem;
    @media only screen and (max-width: 960px) {
    display: none;
  }
`
const NavBtn=css`
     background-color: white;
    border-radius: 50px;
    height: 40px;
    width: 40px;
    padding: 5px;
    margin-right: 15px;
    transition: 0.2s all linear;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    &:hover{
        transform: translateY(-3px);
        opacity: 0.9;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
     
    }
`

const NavBtnSettings=styled(AiFillSetting)`
    ${NavBtn}
`

const NavBtnNotf=styled(MdNotificationsActive)`
    ${NavBtn}

`
const NavLoginBtn=styled.button`
    padding: 6px;
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.40rem;
    margin-right: 15px;
   
    color: white;
    transition: .2s all linear;
    &:hover{
      cursor: pointer;
      font-size: 1.5rem;
      transform: translateY(-1px);
      color: rgb(156, 0, 191,0.5);
    }
`

const NavBtnBack=styled.div`
    display: inline-block;
    z-index: 9999;
    transform: translateY(2.5px);
`

const NavMiddle=styled.div`
  padding-right: 40px;
  width: 50%;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  
`
const NavMidItem=styled.h2`
  width: 50%;
  display: inline-block;
  font-size: 1.15rem;
  color: white;
  cursor: pointer;
  transition: 0.2s all ease;
  text-align: start;
  &:hover{
    transform: translateY(-3px);
    background-color: rgba(255,255,255,0.1);
    padding: 20px;
    font-size: 1.4rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

const BarContainer=styled.div`
  display: none;

  @media only screen and (max-width: 960px) {
  display: flex;
  height: 100%;
  width: auto;
  align-items: center;
  margin-right: 10px;
  transition: 0.5s all;
  transform: ${props=>props.isOpen? 'rotate(-90deg)' : 'rotate(0deg)'} ;

  }
`
const  Bar =styled(FaBars)`
  color:white;
  height: 60%;
  width: 26px;
  transition: 0.35s all linear;
  &:hover{
    width: 28px;
  }
`
const BarMenu=styled.div`
  display: none;
  @media only screen and (max-width: 960px) {
    display: initial;
    position: fixed;
    opacity: ${props=>(props.isOpen ? '100%' :'0')};
    top: ${props=>(props.isOpen ?props.isFixed?'0px' :'57px' :'-110%')};
    transition: 0.5s all linear;
    width: 100%;
    height: 100%;
    z-index: 1001;
    
    background-color: rgba(255,255,255,0.9);
    
  }
`
const BarMenuItem=styled.div`
  width: 100%;
  display: block;
  text-align: center;
  transition: 0.4s all linear;
  &:hover {
    transform: translateY(-5px);
    opacity: 0.8;
    font-size: 26px;
    background-color:rgb(220,220,220,0.2) ;
    cursor: pointer;
  }
  &:hover .barMenuBtn{
    background-color:none ;
  }
  
`
const BtnContainer=styled.div`
  width: 100%;
  text-align: center;
  
`
const BarMenuLink =styled(LinkR)`
  display: block;
  padding: 30px;
  text-decoration: none;
  font-size: 22px;
  font-weight: 400;
  color: black; 
  opacity: 1;
  
  @media only screen and (max-height: 850px) {
    font-size:22px;
    padding:40px;    
  }
  @media only screen and (max-height: 700px) {
    font-size:20px;
    padding:30px;    
  }
  @media only screen and (max-height: 600px) {
    font-size:18px;
    padding:25px;    
  }
  @media only screen and (max-width: 280px) {
    font-size:18px;
  }
`
const  BarMenuLine=styled.div`
  width: 50%;
  margin: auto;
  border-bottom: 2px solid rgba(127, 210, 245,0.7);
  
`
const BarMenuBtn=styled.button`
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 20px;
  width: 40%;
  border-radius: 15px;
  border:none;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background-color: rgba(127, 210, 245,0.8);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  transition: 0.2s all linear;
  &:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    color: black;
  }
  @media only screen and (max-height: 600px) {
    margin-top: 10px;
  }
  @media only screen and (max-width: 300px) {
    width: 48%;
    font-size:18px;
  }
`
const SearchContainer=styled.div`
  width: 100%;
  text-align: center;
`
const Search=styled.div`
  position: relative;
  width: 40%;
  margin: auto;
  transition: 0.2s all;
  @media only screen and (max-width: 1550px) {
    width: 50%;
  }

  @media only screen and (max-width: 1200px) {
    width: 70%;
    margin: 0;
  }
  @media only screen and (max-width: 960px) {
    width: 80%;
  }
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
  @media only screen and (max-width: 500px) {
    width: 130%;
    margin-left: -20px;
  }
`

const SearchInput=styled.input`
  width: 100%;
  padding:12px;
  border-radius: 20px;
  border:none;
  outline:none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  transition: 0.2s all;
  &:focus{
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;  
  }
    overflow: hidden;
    padding-right:35px;

`
const SearchIcon=styled(BiSearchAlt2)`
  position: absolute;
  right: 8px;
  top: 9px;
  font-size: 23px;
  color:rgba(125, 125, 125);
  transition: 0.2s all;
  &:hover{
    font-size: 25px;
  }
`
const MobileMenuContainer=styled.div`
  display: relative;
  height: 100%;
`
const Last=styled.div`
  position: absolute;
  background-color: white;
  top:15%;
  background-color: transparent;
  width: 100%;
`

const Navbar = ({hasContent}) => {
  const[isOpen,setIsOpen] =useState(false);
  const[searchInput,setSearchInput] =useState("");
  const {isLogged,setIsLogged}=useProfile();
  const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  const toggle= ()=>{
    setIsOpen(!isOpen)
  }
    return (
      <Nav>
        <NavbarContainer >
            <NavLink to="/">
                <LogoContainer>
                      <NavLogo src={"images/logo.jpg"}/>
                </LogoContainer>
            </NavLink>
            {hasContent &&
            <>
            <NavMiddle>
                <SearchContainer>
                  <Search>
                    <SearchInput onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder='Aramak istediğiz ürün adını giriniz...'>
                    </SearchInput>
                    <SearchIcon/>
                  </Search>
                </SearchContainer>
            </NavMiddle>
           
            <NavBtns  >
                <LinkR to="/login">
                {!isLogged &&
                  <NavBtnBack>
                      <NavLoginBtn >Giriş Yap</NavLoginBtn>
                  </NavBtnBack>
                }
                </LinkR>
              <NavBtnBack>
                  <NavBtnNotf style={{color:'rgba(125, 125, 125)',padding:'7px'}}/>
              </NavBtnBack>
              <NavBtnBack>
                  <NavBtnSettings style={{color:'rgba(125, 125, 125)',padding:'7px'}}/>
              </NavBtnBack>
              
            </NavBtns>
            <BarContainer toggle={toggle}  isOpen={isOpen} >
              <Bar  onClick={toggle} />
            </BarContainer>
            </>}
        </NavbarContainer>
        <BarMenu isOpen={isOpen} onClick={toggle} isFixed={scrollPosition>=60?true:false}>
        <MobileMenuContainer>
          <Last>
            <BarMenuItem>
                <BarMenuLink className="menuLink" to='/' onClick={toggle}>
                  Ayarlar
                </BarMenuLink>
                <BarMenuLine className="hr" />
            </BarMenuItem>
            { isLogged && 
            <BarMenuItem>
                <BarMenuLink className="menuLink" to='/' onClick={toggle}>
                  Bildirimler
                </BarMenuLink>
                <BarMenuLine className="hr"/>
            </BarMenuItem>
            }
            { !isLogged &&
            <>
              <BarMenuItem>
                  <BarMenuLink className="menuLink"  to='/' onClick={toggle}>
                    Kategoriler
                  </BarMenuLink>
                  <BarMenuLine className="hr"/>
              </BarMenuItem>
              
              </>
            }
              <BtnContainer>
                <LinkR to="/login" onClick={toggle}>
                  <BarMenuBtn className="barMenuBtn">
                  {isLogged ? 'Çıkış Yap' : 'Giriş Yap'}
                  </BarMenuBtn>
                </LinkR>
            </BtnContainer>
              </Last>
            </MobileMenuContainer>
            
        </BarMenu>
      </Nav>

    )
}

export default Navbar
