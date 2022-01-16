import React, { useState } from 'react'
import styled from 'styled-components'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import {FaShareAlt} from 'react-icons/fa'
import {BsBookmarkCheckFill,BsBookmarkPlus} from 'react-icons/bs'

const ContentContainer=styled.div`
    width: 75%;
    display: ${props=>props.isLogged?'inline-block':'block'};
    position: ${props=>props.isLogged?'absolute':'relative'};
    left: ${props=>props.isLogged?'20%':''};
    margin: ${props=>props.isLogged?'20px 35px':'20px auto'};
    padding-top:${props=>props.isLogged?'0px':'10px'} ;
    height: fit-content;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    @media only screen and (max-width: 1350px) {
        width: 70%;
        left: ${props=>props.isLogged?'25%':''};
        margin: ${props=>props.isLogged?'20px 30px':'20px auto'};

    }
    @media only screen and (max-width: 900px) {
        width: 65%;
        left: ${props=>props.isLogged?'30%':''};
        margin: ${props=>props.isLogged?'10px 25px':'10px auto'};

    }
    @media only screen and (max-width: 750px) {
        left: ${props=>props.isLogged?'5%':''};
        margin: ${props=>props.isLogged?'15px 10px':'15px auto'};

        width: 90%;
      
    }
`
const TodayContainer=styled.div`
    width: 99%;
    margin: 10px  10px 0px 10px;
    text-align: center;
    @media only screen and (max-width: 1050px) {
        margin: 15px 8px;

    }
    @media only screen and (max-width: 550px) {
        margin: 10px 5px;
    }
`

const TodayElement=styled.div`
    width: 42%;
    position: relative;
    height: fit-content;
    padding: 10px 20px 20px 20px;
    display: inline-block;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    transition: 0.4s all ;
    &::after {
        content: "";
        clear: both;
        display: table;
    }
    &:hover{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        cursor: pointer;    
    }
    @media only screen and (max-width: 1150px) {
        width: 80%;
        margin-right: 0!important;
        margin-left: 0!important;
        margin-top:20px;
    }
    @media only screen and (max-width: 1150px) {
        width: 90%;
        margin-right: 0!important;
        margin-left: 0!important;
        margin-top:20px;
    }
`

const TodayHeader=styled.h3`
    text-align: center;
    padding: 8px;

    border-bottom: 0.5px solid 	rgba(192,192,192,0.4);
    margin-bottom: 5px;
    color: rgba(127, 210, 245);
`
const TodayImg=styled.img`
    width: 15%;
    min-width: 70px;
    padding: 2px;
    float: left;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: 0.7s all ease-in-out;
    &:hover{
        width: 30%;
        margin-bottom: 5px;
        transition-delay:0.3s;
    }
`
const TodayPrg=styled.p`
    width: 80%;
    text-align: left;
    float: left;
    font-size: 12px;
    padding: 10px;
    transition: 0.2s all;

    @media only screen and (max-width: 1350px) {
        padding: 5px !important;
        width: 70%;
    }
    @media only screen and (max-width: 1050px) {
        padding: 5px !important;
        width: 60%;
    }
    @media only screen and (max-width: 550px) {
        padding: 3px !important;
        font-size: 10px;
        width: 70%;
    }
`

const CommentsContainer=styled.div`
    height: fit-content;
`

const CommentsHeadContainer=styled.div`
    padding: 20px;
`
const CommentHeader=styled.h4`
    color: rgba(0,0,0,0.8);

    display: inline-block;
    margin-right: 40px;
    cursor: pointer;
    padding:10px ;
    transition: 0.2s background-color,0.1s border-bottom-width;
    border-bottom: ${(props)=>props.isPopSelected?'3px solid  rgba(127, 210, 245)':'none'};
    &:hover{
        background-color: rgba(220,220,220,0.4);
    }
`
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

const ProductName=styled.h5`
    margin-bottom: 1px;
    color: rgba(0,0,0,0.7);

`
const UserName=styled.h6`
    margin-bottom: 4px;
    color: black;
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



const CommentPage = ({isLogged}) => {
    const[isPopSelected,setIsPopSelected]=useState(true);
  
    return (
        <>
            <ContentContainer isLogged={isLogged}>
            <TodayContainer>
                <TodayElement style={{marginRight:'15px'}}>
                    <TodayHeader>Günün Ürünü</TodayHeader>
                    <TodayImg src='images/phone.jpg' />
                    <TodayPrg style={{fontWeight:'bold',padding:'3px 10px'}}>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</TodayPrg>
                    <TodayPrg> IP67 düzeyinde suya dayanıklı Samsung Galaxy A52 telefonla tanışın!</TodayPrg>
                </TodayElement>
                <TodayElement style={{marginLeft:'15px'}}>
                    <TodayHeader>Günün Yorumu</TodayHeader>
                    <TodayImg src='images/vacuumCleaner.jpg' />
                    <TodayPrg style={{fontWeight:'bold',padding:'3px 10px'}}>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</TodayPrg>

                    <TodayPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</TodayPrg>
                </TodayElement>
            </TodayContainer>
            <CommentsContainer>
                    <CommentsHeadContainer>
                        <CommentHeader isPopSelected={isPopSelected} onClick={()=>setIsPopSelected(true)}>
                            Popüler
                        </CommentHeader>
                        <CommentHeader isPopSelected={!isPopSelected} onClick={()=>setIsPopSelected(false)}>
                            Yeni
                        </CommentHeader>
                    </CommentsHeadContainer>
                    <CommentContainer>
                    <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Fatih Orkun</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Ürün güzel fakat size paket mührünün fotoğrafını yolluyorum. Kime gelse bu şekilde, huylanır. Açtım jelatinlerini kendim söktüm evet sıfır telefon ama dikkat edelim</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>56</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>8</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/vacuumCleaner.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}} >Fatih Orkun</UserName>
                        <ProductName>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</ProductName>
                        <CommentPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>38</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>10</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Emre Usta</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Kamerası mükemmel  iki örnek  bırakıyorum aşağı. Sesi ve ekranida güzel şimdilik bir sıkıntı yok. Şu esneme  sorununa yok çok şükür.</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>28</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>5</LikeNum>

                        {true && <SavedIcon/>}
                        {false && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/vacuumCleaner.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Anonim</UserName>
                        <ProductName>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</ProductName>
                        <CommentPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>22</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>2</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Fatih Orkun</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Ürün güzel fakat size paket mührünün fotoğrafını yolluyorum. Kime gelse bu şekilde, huylanır. Açtım jelatinlerini kendim söktüm evet sıfır telefon ama dikkat edelim</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>56</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>8</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/vacuumCleaner.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Anonim</UserName>
                        <ProductName>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</ProductName>
                        <CommentPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>38</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>10</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Emre Usta</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Kamerası mükemmel  iki örnek  bırakıyorum aşağı. Sesi ve ekranida güzel şimdilik bir sıkıntı yok. Şu esneme  sorununa yok çok şükür.</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>28</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>5</LikeNum>

                        {true && <SavedIcon/>}
                        {false && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                    <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Fatih Orkun</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Ürün güzel fakat size paket mührünün fotoğrafını yolluyorum. Kime gelse bu şekilde, huylanır. Açtım jelatinlerini kendim söktüm evet sıfır telefon ama dikkat edelim</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>56</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>8</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/vacuumCleaner.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}} >Fatih Orkun</UserName>
                        <ProductName>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</ProductName>
                        <CommentPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>38</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>10</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Emre Usta</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Kamerası mükemmel  iki örnek  bırakıyorum aşağı. Sesi ve ekranida güzel şimdilik bir sıkıntı yok. Şu esneme  sorununa yok çok şükür.</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>28</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>5</LikeNum>

                        {true && <SavedIcon/>}
                        {false && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/vacuumCleaner.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Anonim</UserName>
                        <ProductName>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</ProductName>
                        <CommentPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>22</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>2</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Fatih Orkun</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Ürün güzel fakat size paket mührünün fotoğrafını yolluyorum. Kime gelse bu şekilde, huylanır. Açtım jelatinlerini kendim söktüm evet sıfır telefon ama dikkat edelim</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>56</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>8</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/vacuumCleaner.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Anonim</UserName>
                        <ProductName>Mini el kuru ve ıslak kablosuz kablosuz elektrik süpürgesi</ProductName>
                        <CommentPrg>X Marka Elektrik Süpürgesi boyutu küçük ama çok kullanışlı. Cok az yer kaplıyor</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>38</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>10</LikeNum>

                        {false && <SavedIcon/>}
                        {true && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
                    <CommentContainer>
                        <CommentImg src='images/phone.jpg'/>
                        <CommentContentContainer>
                        <UserName style={{fontSize:'16px'}}>Emre Usta</UserName>
                        <ProductName>Samsung Galaxy A52 128GB Siyah Cep Telefonu SM-A525FZKHTUR</ProductName>
                        <CommentPrg>Kamerası mükemmel  iki örnek  bırakıyorum aşağı. Sesi ve ekranida güzel şimdilik bir sıkıntı yok. Şu esneme  sorununa yok çok şükür.</CommentPrg>
                        <LikeIcon/>
                        <LikeNum>28</LikeNum>
                        <DisLikeIcon/>
                        <LikeNum>5</LikeNum>

                        {true && <SavedIcon/>}
                        {false && <AddToSavedIcon/>}
                        <ShareIcon/>
                        </CommentContentContainer>
                    </CommentContainer>
  
            </CommentsContainer>
            </ContentContainer>
        </>
    )
}

export default CommentPage
