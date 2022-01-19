import React from 'react'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import {FaShareAlt} from 'react-icons/fa'
import {BsBookmarkCheckFill,BsBookmarkPlus} from 'react-icons/bs'
import styled from 'styled-components'
import { useProfile } from '../Context/ProfileContext'

const CommentContainer=styled.div`
    position: relative;
    width: 94%;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 25px 5px 25px;
    cursor: pointer;
    border-bottom: 1px solid rgba(220,220,220,0.7);
        &::after {
        content: "";
        clear: both;
        display: table;
    }
`
const CommentImg=styled.img`
    width: 12%;
    float: left;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    min-width: 70px;
    max-width: 120px;
    background-color: white;
    @media only screen and (max-width: 1150px) {
       width: 15%;
    }
    @media only screen and (max-width: 950px) {
       width: 18%;
    }
    @media only screen and (max-width: 550px) {
        width: 25%;
    }
`
const CommentContentContainer=styled.div`
    float: left;
    width: 88%;
    padding: 15px;
    @media only screen and (max-width: 1150px) {
       width: 85%;
    }
    @media only screen and (max-width: 950px) {
       width: 82%;
    }
    @media only screen and (max-width: 550px) {
        
    }
`

const UserName=styled.h6`
    margin-bottom: 4px;
    color: black;
`

const ProductName=styled.h5`
    margin-bottom: 1px;
    color: rgba(0,0,0,0.7);

`
const CommentPrg=styled.p`
    margin-bottom: 10px;
    font-size: 14px;
   
`
const LikeNum=styled.p`
    display: inline-block;
    transform: translate(-25px,-10px);
    font-weight: 600;
    font-size: 14px;
    color: rgba(0,0,0);

    
`
    
const LikeIcon=styled(AiFillLike)`
    font-size: 35px;
    padding: 5px;
    margin-right: 25px;
    color: rgba(127, 210, 245);
    transition: 0.1s all;
    &:hover{
        opacity: 0.5;
       
    }
`
const DisLikeIcon=styled(AiFillDislike)`
   font-size: 35px;
    padding: 5px;
    margin-right: 25px;
    margin-left: -10px;
    color: rgba(127, 210, 245);
    transform: translateY(5px);
    transition: 0.1s all;
    &:hover{
        opacity: 0.5;
       
    }
`

const ShareIcon=styled(FaShareAlt)`
   font-size: 35px;
    padding: 5px;
    color: rgba(127, 210, 245);
    transform: translateY(3px);
    transition: 0.1s all;
    &:hover{
        opacity: 0.5;
       
    }
`

const SavedIcon=styled(BsBookmarkCheckFill)`
    font-size: 35px;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 15px;
    color: rgba(127, 210, 245);
    transition: 0.1s all;
    &:hover{
        opacity: 0.5;
       
    }
`
const AddToSavedIcon=styled(BsBookmarkPlus)`
    font-size: 35px;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 15px;
    color: rgba(127, 210, 245);
    transition: 0.1s all;
    &:hover{
        opacity: 0.5;
       
    }
`



const Comments = ({comments}) => {
    const{user,setUser,isLogged,savedCommentsId,setSavedCommentsId,likedCommentsId,unLikedCommentsId,setLikedCommentsId,setUnLikedCommentsId}=useProfile();
    const removeFromArr=(id,arr)=>{
        const index = arr.indexOf(id);
        if (index > -1) {
            arr=arr.splice(index, 1);
        }
        return index;
    }
    const removeFromSaved=(id)=>{
        removeFromArr(id,savedCommentsId)
        setSavedCommentsId([...savedCommentsId]);
    }
    const addToSaved=(id)=>{
        setSavedCommentsId([...savedCommentsId,id])
    }
    

    const like=(id)=>{
        let comment=comments.filter(e=>e.id===id)[0];
        if(!likedCommentsId.includes(id)){
            setLikedCommentsId([...likedCommentsId,id]);
            if(unLikedCommentsId.includes(id)){
                removeFromArr(id,unLikedCommentsId);
                comment.unlikeNum--;
            }
            comment.likeNum++;
            user.likeCount++;
        } else{
            removeFromArr(id,likedCommentsId);
            comment.likeNum--;
            setLikedCommentsId([...likedCommentsId])
            user.likeCount--;
        }    
    }
    const dislike=(id)=>{
        let comment=comments.filter(e=>e.id===id)[0];
        if(!unLikedCommentsId.includes(id)){
            setUnLikedCommentsId([...unLikedCommentsId,id]);
            if(likedCommentsId.includes(id)){
                removeFromArr(id,likedCommentsId);
                comment.likeNum--;
                user.likeCount--;

            }
            comment.unlikeNum++;
            
        } else{
            removeFromArr(id,unLikedCommentsId);
            comment.unlikeNum--;
            setUnLikedCommentsId([...unLikedCommentsId])
        }    
    }
    
    return (
        <>
            {
                comments.map((com)=>{
                    return <CommentContainer key={com.id}>
                                <CommentImg src={com.image}/>
                                <CommentContentContainer>
                                    <UserName style={{fontSize:'16px'}}>{com.userName}<p style={{color:'rgba(0,0,0,0.9)',fontWeight:'500',display:'inline',fontSize:'13px'}}>  @{com.nickname}</p></UserName>
                                    <ProductName>{com.productName}</ProductName>
                                    <CommentPrg>{com.comment}</CommentPrg>
                                    <LikeIcon onClick={()=>like(com.id)} style={likedCommentsId.includes(com.id)? {color:'#f1c40f'}:{}}/>
                                    <LikeNum >{com.likeNum}</LikeNum>
                                    <DisLikeIcon onClick={()=>dislike(com.id)} style={unLikedCommentsId.includes(com.id)? {color:'#f1c40f'}:{}}/>
                                    <LikeNum >{com.unlikeNum}</LikeNum>

                                    {isLogged && 
                                        (
                                            savedCommentsId.includes(com.id) ? <SavedIcon onClick={()=>removeFromSaved(com.id)}/>:<AddToSavedIcon onClick={()=>addToSaved(com.id)}/>
                                        )
                                    }
                                    
                                    <ShareIcon/>
                                </CommentContentContainer>
                            </CommentContainer>
                })
            }
        </>
    )
}

export default Comments
