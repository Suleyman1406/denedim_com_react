import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProfile } from '../Context/ProfileContext';
import { ContentContainer as Container } from './CommentPage'
import CreatableSelect from 'react-select/creatable'
import {BsDownload} from 'react-icons/bs'
import {AiFillCloseSquare} from 'react-icons/ai'
const PostShareContainer=styled.div`
    padding: 15px 20px;
`
const Header=styled.h2`
    display: inline-block;
    margin-left: 15px;
    padding: 15px 5px 15px 0px;
    cursor: pointer;
    border-bottom:3px solid rgb(158,149,200);
`
const BodyContainer=styled.div`
    width: 100%;
    padding: 25px;
`
const SelectLabel=styled.h3`
    margin-bottom: 5px;
    padding: 2px 2px 2px 0px;
`
const SelectInput=styled(CreatableSelect)`
    margin-bottom: 25px;
`
const Input=styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 25px;
    border:1px solid #DADCE0;
    transition: 0.5s border;
    &:hover{
        border:1px solid rgba(128, 134, 139,0.7);
    }
    &:focus{
        outline:1.5px solid rgb(158,149,200);
    }
`
const TextArea=styled.textarea`
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 1rem;
    margin-bottom: 25px;
    border:1px solid #DADCE0;
    transition: 0.5s border;
    &:hover{
        border:1px solid rgba(128, 134, 139,0.7);
    }
    &:focus{
        outline:1.5px solid rgb(158,149,200);
    }
`
const ImagesContainer=styled.div`
    width: 80%;
    height: 150px;
    display: inline-block;
`

const ImageInput=styled.label`
    padding: 45px 15px ;
    width: 150px;
    display: inline-block;
    border:1px dashed #DADCE0;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    font-weight: 600;
    transform: translateY(-50px);
    transition: 0.3s all;
    &:hover{
        opacity: 0.8;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    }
`
const ImageContainer=styled.div`
    height: 150px;
    width: 750px;
    display: inline-block;
    position: relative;
`
const Image=styled.img`
    width: 150px;
    height: 150px;
    background-color: white;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: absolute;
    left:${props=>props.i*75+"px"};
    z-index: ${props=>10-props.i};
    margin-left: 5px;
    object-fit:cover;
    object-position:50% 50%;
`
const DeleteBtn=styled(AiFillCloseSquare)`
    position: absolute;
    z-index: 11;
    top: 5px;
    left:${props=>(props.i*75)+130+"px"};
    font-size: 20px;
    color: #cb2027;
    transition: 0.2s all;
    background-color: white;
    &:hover{
        opacity: 0.9;
    }

`
const ButtonContainer=styled.div`
    width: 20%;
    height: 150px;
    display: inline-block;
    text-align: end;
`

const ShareButton=styled.button`
    background-color: rgb(158,149,200);
    padding: 20px 35px;
    border: none;
    font-weight: 700;
    color:white;
    font-size: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 5px;
    transform: translateY(-45%);
    transition: 0.2s all;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
`

const theme=(theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
        ...theme.colors,
        primary25: 'rgba(158,149,200,0.4)',
        primary: 'rgb(158,149,200)',
    },
    });

const brands = [
    { value: 'Samsung', label: 'Samsung' },
    { value: 'Nokia', label: 'Nokia' },
    { value: 'Iphone', label: 'Iphone' },
    { value: 'Xiaomi', label: 'Xiaomi' },
    { value: 'Oppo', label: 'Oppo' },
    { value: 'Huawei', label: 'Huawei' },
    { value: 'Asus', label: 'Asus' },
  ]

const categories=[
    { value: 'Elektronik', label: 'Elektronik' },
    { value: 'Giyim', label: 'Giyim' },
    { value: 'Kırtasiye', label: 'Kırtasiye' },
    { value: 'Saat & Aksesuar', label: 'Saat & Aksesuar' },
    { value: 'Spor', label: 'Spor' },
    { value: 'Dekorasyon', label: 'Dekorasyon' },
    { value: 'Yaşam/Hobi', label: 'Yaşam/Hobi' },
    { value: 'Teknoloji', label: 'Teknoloji' },
    { value: 'Gıda', label: 'Gıda' },
    { value: 'Seyahat', label: 'Seyahat' },
    { value: 'Yazılım', label: 'Yazılım' },
]

const PostShare = () => {
    const{isLogged}=useProfile();
    const[images,setImages]=useState([]);
    const[imageURLs,setImageURLs]=useState([])
     useEffect(()=>{
        if(images.length<1)return;
        const newImageURls=[]
        images.forEach(i=>newImageURls.push(URL.createObjectURL(i)));
        setImageURLs(newImageURls);
     },[images])
     const onImageChange=(e)=>{
         if(e.target.files.length<=5)
         setImages([...e.target.files])
         else
         alert('En fazla 5 fotoğraf ekleyebilirsiniz.')
     }
     const deleteImage=(i)=>{
         imageURLs.splice(i,1)
         setImageURLs([...imageURLs]);
     }

  return <>
        <Container isLogged={isLogged}>
            <PostShareContainer>
                <Header>Gönderi Paylaş</Header>
                <BodyContainer>
                    <SelectLabel>Kategori</SelectLabel>
                    <SelectInput      isClearable theme={theme} placeholder='Kategori seçiniz...' options={categories}/>
                    <SelectLabel>Marka</SelectLabel>
                    <SelectInput isClearable theme={theme} placeholder='Marka seçiniz...' options={brands}/>
                    <SelectLabel>Başlık</SelectLabel>
                    <Input placeholder='Başlık giriniz...' type='text' />
                    <SelectLabel>Yorum</SelectLabel>
                    <TextArea placeholder='Yorum giriniz...'/>
                    <ImagesContainer>
                        <ImageInput htmlFor="files"><BsDownload style={{transform:'translateY(2px)',display:'block',margin:'0px auto 15px auto',fontSize:22}}/> Add Images</ImageInput>
                        <input id='files' style={{display:'none'}} type="file" multiple accept="image/*" onChange={onImageChange}  />
                        <ImageContainer>
                            {imageURLs.map((URL,i)=><>
                                <Image key={i} i={i} src={URL}/>
                                <DeleteBtn i={i} onClick={()=>deleteImage(i)}/>
                            </>)}
                        </ImageContainer>
                    </ImagesContainer>
                    <ButtonContainer>
                        <ShareButton>Paylaş</ShareButton>

                    </ButtonContainer>
                </BodyContainer>
            </PostShareContainer>
        </Container>
    </>;
};

export default PostShare;
