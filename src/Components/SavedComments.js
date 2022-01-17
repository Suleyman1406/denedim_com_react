import React from 'react'
import styled from 'styled-components'
import { useComments } from '../Context/CommentsContext'
import { useProfile } from '../Context/ProfileContext'
import { ContentContainer as Container } from './CommentPage'
import Comments from './Comments'

const Header=styled.h2`
    padding: 20px 40px 20px 40px;
`
const NoContent=styled.div`
    color: rgb(192,192,192);
    text-align: center;
    margin-top: 18%;
    font-size: 50px;
    font-weight: 500;
`
const SavedComments = () => {
    const{isLogged,savedCommentsId}=useProfile();
    const{comments,setComments}=useComments();
    
    return (
        <Container isLogged={isLogged}>
            <Header>Kaydedilenler</Header>
            <Comments comments={comments.filter((e)=>savedCommentsId.includes(e.id))} setComments={setComments}/>
            {savedCommentsId.length===0 &&
                <NoContent>
                        Kaydettiğiniz bir yorum yok.
                </NoContent>
            }
        </Container>
    )
}

export default SavedComments
