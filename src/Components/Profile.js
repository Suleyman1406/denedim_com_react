import React, {  useEffect, useState } from 'react'
import styled from 'styled-components'
import { useProfile } from '../Context/ProfileContext'
import {BiCommentDetail} from 'react-icons/bi';
import {MdLocationOn} from 'react-icons/md';
import {AiFillLike} from 'react-icons/ai';
import Comments from './Comments';
import { useComments } from '../Context/CommentsContext';
import {HiOutlineLogout} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import {RiUserSettingsLine} from 'react-icons/ri'
const Container=styled.div`
    width: 85%;
    height: fit-content;
    min-height: 900px;
    margin: 20px auto;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1px;
`
const Top=styled.div`
    height: 60px;
    background-color: #f9ca24;
    padding: 0px 40px;
    overflow: hidden;
`
const TopName=styled.h1`
    margin-left: 145px;
    color: #ecf0f1;
    transform: translateY(37px);
`

const Header=styled.div`
    padding: 0px 40px;
    position: relative;

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
`
const Image=styled.img`
    padding: 0px;
    width: 120px;
    height: 120px;
    line-height: 50px;
    border-radius: 50%;
`
const NameContainer=styled.div`
    display: flex;
    overflow: hidden;
    height: fit-content;
`
const H1=styled.h1`
    display: inline;
    margin-left: 15px;
    transform: translateY(-23px);

`
const Nickname=styled.h4`
    transform: translate(15px,-25px);
    opacity: 0.7;
    
`
const ButtonContainer=styled.div`
    display: flex;
    position: absolute;
    background-color: white;
    padding: 15px;
    border-radius: 50px;
    align-items: center;
    top: -25px;
    right: 25px;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    transition: 0.2s all;
    &:hover{
        transform: translateY(-2px);
        background-color: rgba(245,245,245);
    }
`
const Text=styled.p`
    font-weight: 600;
    color: #f9ca24;
    transform: translate(10px,-10px);
`

const AboutContainer=styled.div`
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 25px;
    padding: 20px 40px;
    background-color: rgba(220,220,220,0.2);
    border-radius: 20px;
    border:1px dashed;
    border-color: rgba(192,192,192,0.4);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
    },[selected,userCommentsId,likedCommentsId,savedCommentsId,unLikedCommentsId])
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
                    <ButtonContainer>
                            <HiOutlineLogout style={{fontSize:'22px',marginRight:'5px'}}/>
                            <h4 style={{display:'inline'}}>Çıkış</h4>
                    </ButtonContainer>
                </Link>
                <Link to='/login' onClick={()=>setIsLogged(false)}>
                    <ButtonContainer style={{right:'150px'}}>
                            <RiUserSettingsLine style={{fontSize:'22px',marginRight:'5px'}}/>
                            <h4 style={{display:'inline'}}>Düzenle</h4>
                    </ButtonContainer>
                </Link>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <BiCommentDetail style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.commentCount} yorum
                </Text>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <AiFillLike style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.likeCount} beğeni
                </Text>
                <Text style={{float:"left",marginRight:'25px'}}>
                    <MdLocationOn style={{transform:"translateY(-3px)",float:"left",fontSize:'25px',marginRight:'5px'}}/>
                    {user.location} 
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
