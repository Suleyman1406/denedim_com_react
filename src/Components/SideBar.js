import React, { useEffect } from 'react';
import styled from 'styled-components';
import {MdLocationOn} from 'react-icons/md';
import {BiCommentDetail} from 'react-icons/bi';
import {AiFillLike} from 'react-icons/ai';
import {FaUserEdit,FaShareAlt,FaArrowAltCircleRight} from 'react-icons/fa';
import {RiCoupon2Fill} from 'react-icons/ri';
import { useMediaPredicate } from "react-media-hook";
import { useState } from 'react';
import {MdCategory} from 'react-icons/md';
import {BsBookmarkCheckFill} from 'react-icons/bs';

 const Bar=styled.div`
    position: ${(props)=>(props.isFixed?  'fixed' : 'absolute' )};
   top: ${(props)=>(props.isFixed?  '-15px' : '' )};
    width: 20%;
    margin-top: 1px;
    background-color: white;
    height: fit-content;
    z-index: 998;
    display: inline-block;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition: 0.5s all;
    height: 100%;
    @media only screen and (max-width: 1350px) {
        width: 25%;
    }
    @media only screen and (max-width: 900px) {
        width: 30%;
    }
    @media only screen and (max-width: 750px) {
        width: 250px;
        transform:${(props)=>(props.openBtnDisplay?  'translateX(0px)' : 'translateX(-235px)' )};
        .openCloseIcon{
            transform: ${(props)=>(props.openBtnDisplay?  'rotate(180deg)' :'rotate(0)' )} ;
        }
    }
`

 const BarContainer=styled.div`
    padding: 20px;

`
 const ProfileContainer=styled.div`
    width: 80%;
    margin:  auto;
    padding-top: 10px;
    margin-bottom: 20px;
    text-align: center;
`

 const BarImg=styled.img`
    padding: 0px;
    width: 120px;
    height: 120px;
    line-height: 50px;
    border-radius: 50%;
    

`

 const BarBtn=styled.button`
    width: 100%;
    display: block;
    margin-bottom:15px;
    background: transparent;
    padding: 15px;
    border-radius: 5px 10px;
    font-size: 16px;
    display: inline-block;
    font-weight: 800;
    color: black;
    border:none;

    font-family: 'Encode Sans Expanded',sans-serif;
    transition: 0.4s all ease;
    &:hover {
        background-color: rgba(135,208,239,0.4);
        cursor: pointer;
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 1350px) {
        font-size: 14px;
      
  }
`

 const BtnIcon=styled.i`
    float: left;
    color: black;
    transform: translate(50%, 25%);
`

const ProfileParag=styled.p`
    font-size: ${(props)=>(props.isName?  '20' : '15' )+'px'};
    padding: 10px;
    color: ${(props)=>(props.isName?  'black' : '#87d0ef' )} ;
    font-weight: ${(props)=>(props.isName?  '600' : '300' )} ;
    transition: 0.2s all ;
    cursor: pointer;
    &:hover{
        color: black;
        background-color: ${(props)=>(props.isName?  '' : 'rgba(220,220,220,0.2)' )};
        border-radius: 10px;
    }
`
const Icon=styled(FaArrowAltCircleRight)`
        display: none;
        position: absolute;
        right:-17px;
        color:rgba(135,208,239);
        background-color:rgba(255,255,255);
        border-radius:50%;
        padding:5px;

        transition: 0.3s all;
        @media only screen and (max-width: 750px) {
        display: inline;
        }
        &:hover{
            padding: 4px;
            opacity: 0.9;
        }
    
`


const SideBar = ({isLogged}) => {
    const biggerThan400 = useMediaPredicate("(max-width: 1350px)");
    const [openBtnDisplay,setOpenBtnDisplay]=useState(false);
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
    
    return (
        <>
       {isLogged &&
            <Bar openBtnDisplay={openBtnDisplay} isFixed={scrollPosition>=60?true:false}>
                    <BarContainer>
                        <Icon className='openCloseIcon'  size={40}  onClick={()=>setOpenBtnDisplay(!openBtnDisplay)}/>
                        <ProfileContainer className='sss'>
                        <BarImg src="images/avatar.jpg"/>
                            
                            <ProfileParag isName={true} >Hande Işıklı</ProfileParag>
                            <ProfileParag isName={false}><MdLocationOn style={{transform:"translateY(3px)",float:"left"}}/> Denizli, Turkey</ProfileParag>
                            <ProfileParag isName={false}><BiCommentDetail style={{transform:"translateY(3px)",float:"left"}}/> 109 Yorum</ProfileParag>
                            <ProfileParag isName={false}><AiFillLike style={{transform:"translateY(3px)",float:"left"}}/> 82 begenme</ProfileParag>
                        </ProfileContainer>
                    
                        <BarBtn>
                            <FaUserEdit  style={{transform:"translateY(-1px)",float:"left",marginLeft:"10px"}}  size={biggerThan400?20:25} />
                            Profil
                        </BarBtn>
                        <BarBtn>
                            <MdCategory    style={{transform:"translateY(-1px)",float:"left",marginLeft:"10px"}} size={biggerThan400?20:25}  />
                            Kategoriler
                        </BarBtn>
                        <BarBtn>
                            <BsBookmarkCheckFill  style={{transform:"translateY(-1px)",float:"left",marginLeft:"10px"}} size={biggerThan400?20:25} />
                            Kaydedilenler
                        </BarBtn>
                        <BarBtn>
                            <RiCoupon2Fill  style={{transform:"translateY(-1px)",float:"left",marginLeft:"10px"}} size={biggerThan400?20:25}/>
                            Kuponlar
                        </BarBtn>
                        <BarBtn>
                            <FaShareAlt   style={{transform:"translateY(-1px)",float:"left",marginLeft:"10px"}} size={biggerThan400?20:25} />
                            Paylaş
                        </BarBtn>
                        
                    </BarContainer>

            </Bar>
            }
        </>
    )
}

export default SideBar