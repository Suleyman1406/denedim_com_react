import React from "react";
import styled from "styled-components";
import { AiOutlineMobile } from "react-icons/ai";
import {
  GiClothes,
  GiLipstick,
  GiNotebook,
  GiLifeBar,
  GiBedLamp,
} from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import {
  MdOutlineElectricalServices,
  MdSportsVolleyball,
  MdCardTravel,
} from "react-icons/md";
import { ContentContainer as Container } from "./CommentPage";
import { useProfile } from "../Context/ProfileContext";

const CategoryContainer = styled.div`
  width: 90%;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  justify-content: center;
  transition: 0.4s all;

  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
`;

const CategoryCard = styled.div`
  width: 20%;
  height: 200px;
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 40px;
  transition: 0.4s all;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  @media only screen and (max-width: 1350px) {
    width: 25%;
    height: 170px;
  }
  @media only screen and (max-width: 1000px) {
    width: 40%;
    height: 150px;
  }
  @media only screen and (max-width: 550px) {
    width: 45%;
    margin-right: 0;
    margin-left: 8px;
    height: 150px;
  }

  &:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  }
`;
const CategoryHead = styled.div`
  height: 80%;
  font-size: 70px;
  background-color: ${(props) => "#" + props.color};
  text-align: center;
  padding-top: 50px;
  transition: 0.4s all;

  @media only screen and (max-width: 1350px) {
    font-size: 65px;
    padding-top: 45px;
  }
  @media only screen and (max-width: 1100px) {
    padding-top: 40px;
    font-size: 60px;
  }
  @media only screen and (max-width: 1000px) {
    padding-top: 35px;
    font-size: 55px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 50px;
    svg {
      font-size: 50px;
    }
  }
`;
const CategoryFoot = styled.div`
  height: 20%;
  padding: 10px;
  font-weight: 600;
  background-color: rgba(220, 220, 220);
  transition: 0.4s all;
  @media only screen and (max-width: 1100px) {
    padding: 5px;
  }
  @media only screen and (max-width: 300px) {
    font-size: 12px;
    padding: 7px;
  }
`;

const Category = () => {
  let arr = [
    "Elektronik",
    "Giyim",
    "Kozmetik",
    "Kırtasiye",
    "Spor",
    "Saat & Aksesuar",
    "Yaşam/Hobi",
    "Dekorasyon",
    "Gıda",
    "Teknoloji",
    "Yazılım",
    "Seyahat",
  ];
  let color = [
    "f39893",
    "7f9bb9",
    "2e74a5",
    "a4c98e",
    "50b4ad",
    "b187b8",
    "208487",
    "75bad1",
    "76819f",
    "eb9f6e",
    "5e758c",
    "e8c05a",
  ];
  const { isLogged } = useProfile();
  return (
    <>
      <Container isLogged={isLogged}>
        <CategoryContainer>
          {arr.map((cat, index) => (
            <CategoryCard key={index}>
              <CategoryHead color={color[index]}>
                {cat === "Elektronik" && <MdOutlineElectricalServices />}
                {cat === "Giyim" && <GiClothes />}
                {cat === "Kozmetik" && <GiLipstick />}
                {cat === "Kırtasiye" && <GiNotebook />}
                {cat === "Spor" && <MdSportsVolleyball />}
                {cat === "Saat & Aksesuar" && <BsWatch />}
                {cat === "Yaşam/Hobi" && <GiLifeBar />}
                {cat === "Dekorasyon" && <GiBedLamp />}
                {cat === "Gıda" && <IoFastFoodOutline />}
                {cat === "Teknoloji" && <AiOutlineMobile />}
                {cat === "Yazılım" && <FaLaptopCode />}
                {cat === "Seyahat" && <MdCardTravel />}
              </CategoryHead>
              <CategoryFoot>{cat}</CategoryFoot>
            </CategoryCard>
          ))}
        </CategoryContainer>
      </Container>
    </>
  );
};

export default Category;
