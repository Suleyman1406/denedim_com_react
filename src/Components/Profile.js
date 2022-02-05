import React, {  useEffect, useState } from 'react'
import styled from 'styled-components'
import { useProfile } from '../Context/ProfileContext'
import {BiCommentDetail,BiInfoCircle} from 'react-icons/bi';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';
import Comments from './Comments';
import { useComments } from '../Context/CommentsContext';
import {HiOutlineLogout} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {RiUserSettingsLine} from 'react-icons/ri'
import {GoLocation} from 'react-icons/go'
const Container=styled.div`
    width: 85%;
    height: fit-content;
    min-height: 900px;
    margin: 20px auto;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1px;
    
    transition: 1s all;
    @media only screen and (max-width: 1100px) {
        width: 95%;
    };
`
const Top=styled.div`
    height: 60px;
    background-color: rgb(158,149,200);
    padding: 0px 40px;
    overflow: hidden;
`
const TopName=styled.h1`
    margin-left: 145px;
    color: black;
    transform: translateY(37px);
    display: inline-block;
    background-color: rgba(255,255,255,0.3);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding-right: 3px;
    padding-left: 3px;
    @media only screen and (max-width: 950px) {
        display: none;
    }
`

const Header=styled.div`
    padding: 0px 40px;
    position: relative;
    @media only screen and (max-width: 950px) {
        text-align:center;
    }
`
const ImageContainer=styled.div`
    width: fit-content;
    display: flex;
    height: 130px;
    width: 130px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
    float: left;
    margin-top: -50px;
    @media only screen and (max-width: 950px) {
       float:none;   
       height: 120px;
       width: 120px;
       display:inline-block ;
    }
`
const Image=styled.img`
    padding: 0px;
    width: 120px;
    height: 120px;
    line-height: 50px;
    border-radius: 50%;
    @media only screen and (max-width: 950px) {

    }
`
const NameContainer=styled.div`
    display: flex;
    overflow: hidden;
    height: fit-content;
    @media only screen and (max-width: 950px) {
        text-align: center;
        display: block;
    }
`
const H1=styled.h1`
    display: inline;
    margin-left: 15px;
    transform: translateY(-23px);
    padding-right: 3px;
    padding-left: 3px;
    @media only screen and (max-width: 950px) {
        transform: translateY(0);
    }
    @media only screen and (max-width: 500px) {
        font-size: 25px!important;
    }

`
const Nickname=styled.h4`
    transform: translate(18px,-25px);
    opacity: 0.7;
    @media only screen and (max-width: 950px) {
    transform: translateY(-5px);
    }
`
const ButtonContainer=styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    padding: 15px;
    border-radius: 50px;
    align-items: center;
    top: -25px;
    right:${props=>props.isFirst?'25px':'150px'};
    color: black;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: 0.2s all;
    &:hover{
        transform: translateY(-2px);
        background-color: rgba(245,245,245);
    }
    @media only screen and (max-width: 950px) {
        right:${props=>props.isFirst?'25px':'100px'};
        padding: 13px;
        top: -24px;
    }
    @media only screen and (max-width: 600px) {
        right:${props=>props.isFirst?'5px':'60px'};
        top: -22px;
        padding: 11px;
    }
    @media only screen and (max-width: 400px) {
        top:${props=>props.isFirst?'0px':'-50px'};
        right: 10px;
        padding: 11px;
    }
   
`
const ButtonText=styled.h4`
    display:'inline';
    margin-left: 5px;
    @media only screen and (max-width: 950px) {
        display: none!important;
    }
`

const Text=styled.p`
    font-weight: 600;
    color:rgb(158,149,200);
    transform: translate(10px,-10px);
    cursor: pointer;
    @media only screen and (max-width: 950px) {
        display: inline-block;
        transform: translate(0);
        width: 25%;
        margin-right: 5px!important;
        margin-bottom: 10px;
        float: none!important;
    }
    @media only screen and (max-width: 800px) {
        width: 35%;
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 600px) {
        width: 48%;
        margin-bottom: 5px;
    }
    @media only screen and (max-width: 400px) {
        width: 100%;
        margin-bottom: 5px;
    }
`

const AboutContainer=styled.div`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    padding: 20px 40px;
    background-color: rgba(220,220,220,0.2);
    border-radius: 20px;
    border:1px dashed;
    border-color: rgba(192,192,192,0.4);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    @media only screen and (max-width: 950px) {
        margin-top: 10px;
    }
`



const About=styled.p`
    padding: 10px;
`
const CommentContainer=styled.div`
    padding: 20px;


`
const CommentContHeader=styled.div`
    margin-left: 40px;
    margin-bottom: 15px;
    @media only screen and (max-width: 750px) {
        margin-left: 10px;
    }
    @media only screen and (max-width: 450px) {
        display: block;
        text-align: center;
    }
`
const Content=styled.h3`
    color: rgba(0,0,0,0.8);
    display: inline-block;
    margin-right: 40px;
    cursor: pointer;
    padding:10px ;
    transition: 0.2s background-color,0.1s border-bottom-width;
    border-bottom: ${(props)=>props.isSelected?'3px solid  #f9ca24':'none'};
    &:hover{
        background-color: rgba(220,220,220,0.4);
    }
    @media only screen and (max-width: 750px) {
        margin-right: 15px;
        font-size: 17px;
    }
    @media only screen and (max-width: 600px) {
        margin-right: 5px;
        font-size: 15px;
    }
    @media only screen and (max-width: 500px) {
        margin-right: 2px;
        font-size: 14px;
        padding: 5px;
    }
    @media only screen and (max-width: 450px) {
        margin-right: 5px;
        font-size: 15px;
        padding: 7px;
    }
`
const Profile = () => {
    const{setIsLogged,user,userCommentsId,likedCommentsId,unLikedCommentsId,savedCommentsId}=useProfile();
    const{comments}=useComments();
    const[selected,setSelected]=useState('Comment');
    const[selectedComments,setSelectedComments]=useState([]);
    useEffect(()=>{
        let a;
        if(selected==='Comment')
        a=comments.filter((com)=>userCommentsId.includes(com.id))
        else if(selected==='Liked')
        a=comments.filter((com)=>likedCommentsId.includes(com.id))
        else
        a=comments.filter((com)=>savedCommentsId.includes(com.id))
        setSelectedComments([...a]);
    },[selected,userCommentsId,likedCommentsId,savedCommentsId,unLikedCommentsId,comments])
    return (
        <Container>
            <Top><TopName>{user.name+" "+user.surname}</TopName></Top>
            <Header>
                <ImageContainer>
                    <Image src="images/avatar.jpg"/>
                </ImageContainer>
                <NameContainer>
                    <H1>{user.name+" "+user.surname}</H1>
                </NameContainer>
                <Nickname>@{user.nickname}</Nickname>
                <Link to='/login' onClick={()=>setIsLogged(false)}>
                    <ButtonContainer isFirst={true}>
                            <HiOutlineLogout style={{fontSize:'22px'}}/>
                            <ButtonText >Çıkış</ButtonText>
                    </ButtonContainer>
                </Link>
                <Link to='/login' onClick={()=>setIsLogged(false)}>
                    <ButtonContainer isFirst={false} >
                            <RiUserSettingsLine style={{fontSize:'22px'}}/>
                            <ButtonText >Düzenle</ButtonText>
                    </ButtonContainer>
                </Link>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <BiCommentDetail style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.commentCount} yorum
                </Text>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <AiOutlineLike style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.likeCount} beğeni
                </Text>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <GoLocation style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.location} 
                </Text>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <BiInfoCircle style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.age+" yaş"} 
                </Text>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <MdOutlineWorkOutline style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.job} 
                </Text>
            </Header>        
            <AboutContainer>
                <h3>Hakkımda</h3>
                <About>{user.about}</About>
            </AboutContainer>  
            <CommentContainer>
                <CommentContHeader>
                    <Content onClick={()=>setSelected('Comment')} isSelected={selected===('Comment')}>
                        Yorumlarım
                    </Content>
                    <Content onClick={()=>setSelected('Liked')} isSelected={selected===('Liked')}>
                        Beğendiklerim
                    </Content>
                    <Content onClick={()=>setSelected('Saved')} isSelected={selected===('Saved')}>
                        Kaydettiklerim
                    </Content>
                </CommentContHeader>
                <Comments comments={selectedComments}/>
            </CommentContainer>
        </Container>
    )
}

export default Profile
