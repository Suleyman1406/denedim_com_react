import React from "react";
import ImageSlider from "./ImageSlider";
import { AiFillLike, AiFillDislike, AiFillCloseSquare } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { BsBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import styled from "styled-components";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "30px 20px",
  zIndex: 1000,
  borderRadius: 2,
  height: "95vh",
  overflow: "auto",
  transition: "0.5s all",
  width: "50%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .4)",
  zIndex: 1000,
};

const CommentContainer = styled.div`
  position: relative;
  width: 94%;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 25px 5px 25px;
  cursor: pointer;
  transition: 0.2s all;
  border-bottom: 1px solid rgba(220, 220, 220, 0.5);
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  @media only screen and (max-width: 1150px) {
    padding: 10px 20px 5px 20px;
  }
  @media only screen and (max-width: 950px) {
    padding: 10px 15px 5px 15px;
  }
  @media only screen and (max-width: 550px) {
    padding: 10px 5px 5px 5px;
  }
`;
const CommentImg = styled.img`
  width: 12%;
  float: left;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 120px;
  border-radius: 50%;
  background-color: white;
  @media only screen and (max-width: 1150px) {
    width: 15%;
  }
  @media only screen and (max-width: 950px) {
    width: 18%;
  }
  @media only screen and (max-width: 550px) {
    width: 25%;
    padding: 2px;
  }
`;

const CommentContentContainer = styled.div`
  float: left;
  width: 88%;
  padding: 15px;
  @media only screen and (max-width: 1150px) {
    width: 85%;
  }
  @media only screen and (max-width: 950px) {
    width: 82%;
    padding: 10px;
  }
  @media only screen and (max-width: 550px) {
    width: 75%;
    padding: 5px;
  }
`;

const UserName = styled.h6`
  margin-bottom: 4px;
  color: black;
`;

const ProductName = styled.h5`
  margin-bottom: 1px;
  color: rgba(0, 0, 0, 0.7);
`;
const CommentPrg = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
`;
const LikeNum = styled.p`
  display: inline-block;
  transform: translateY(-10px);
  font-weight: 600;
  font-size: 14px;
  color: rgba(0, 0, 0);
  margin-right: 15px;
  @media only screen and (max-width: 550px) {
    margin-right: 3px;
    font-size: 12px;
  }
`;

const LikeIcon = styled(AiFillLike)`
  font-size: 35px;
  padding: 5px;
  color: rgba(127, 210, 245);
  transition: 0.1s all;

  @media only screen and (max-width: 550px) {
    font-size: 32px;
    transform: translateY(-1px);
  }
`;
const DisLikeIcon = styled(AiFillDislike)`
  font-size: 35px;
  padding: 5px;
  color: rgba(127, 210, 245);
  transform: translateY(5px);
  transition: 0.1s all;

  @media only screen and (max-width: 550px) {
    font-size: 32px;
    transform: translateY(3px);
  }
`;

const ShareIcon = styled(FaShareAlt)`
  font-size: 35px;
  padding: 5px;
  color: rgba(127, 210, 245);
  transform: translateY(3px);
  transition: 0.1s all;

  @media only screen and (max-width: 550px) {
    font-size: 32px;
    transform: translateY(2px);
  }
`;

const SavedIcon = styled(BsBookmarkCheckFill)`
  font-size: 35px;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 15px;
  color: rgb(158, 149, 200);
  transition: 0.1s all;

  @media only screen and (max-width: 550px) {
    position: initial;
    font-size: 32px;
    transform: translateY(2px);
    float: right;
  }
`;
const AddToSavedIcon = styled(BsBookmarkPlus)`
  font-size: 35px;
  padding: 5px;
  position: absolute;
  right: 10px;
  top: 15px;
  color: rgba(127, 210, 245);
  transition: 0.1s all;

  @media only screen and (max-width: 550px) {
    position: initial;
    font-size: 32px;
    transform: translateY(2px);
    float: right;
  }
`;

const SubCommentContainer = styled.div`
  margin-left: 80px;
  @media only screen and (max-width: 900px) {
    margin-left: 60px;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 40px;
  }
  @media only screen and (max-width: 500px) {
    margin-left: 25px;
  }
`;

const AddCommentContainer = styled.div`
  padding: 30px;
  margin-top: -30px;
  margin-bottom: 50px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 16px;
  padding: 5px 10px;
  border: 1px solid rgba(220, 220, 220, 0.6);
  &:focus {
    outline: 1px solid rgba(220, 220, 220, 0.9);
  }
  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
const AddCommmentBtn = styled.button`
  float: right;
  padding: 10px;
  font-size: 18px;
  border: none;
  margin-top: 10px;
  border-radius: 3px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s all;
  font-weight: 700;
  background-color: rgba(135, 208, 239, 0.7);
  color: white;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const CloseIcon = styled(AiFillCloseSquare)`
  position: absolute;
  right: 20px;
  font-size: 30px;
  top: 20px;
  padding: 1px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: #ff0000;
  transition: 0.2s all;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 25px;
    top: 15px;
    right: 15px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 20px;
    top: 10px;
    right: 10px;
  }
`;

const CommentModal = ({ close, comment: com, info }) => {
  return (
    <>
      <div style={OVERLAY_STYLES} onClick={close} />
      <div style={MODAL_STYLES} className="a">
        <CloseIcon onClick={close} />
        <ImageSlider />
        <CommentContainer className="noSelect">
          <CommentImg src="images/avatar.jpg" />
          <CommentContentContainer>
            <UserName style={{ fontSize: "16px" }}>
              {com.userName}
              <p
                style={{
                  color: "rgba(0,0,0,0.9)",
                  fontWeight: "500",
                  display: "inline",
                  fontSize: "13px",
                }}
              >
                {" "}
                @{com.nickname}
              </p>
            </UserName>
            <ProductName>{com.productName}</ProductName>
            <CommentPrg>{com.comment}</CommentPrg>
            <LikeIcon />
            <LikeNum>{com.likeNum}</LikeNum>
            <DisLikeIcon />
            <LikeNum>{com.unlikeNum}</LikeNum>
            <ShareIcon />

            {info.isLogged && <AddToSavedIcon />}
          </CommentContentContainer>
        </CommentContainer>
        <SubCommentContainer>
          <CommentContainer className="noSelect">
            <CommentImg src="images/avatar.jpg" />
            <CommentContentContainer>
              <UserName style={{ fontSize: "16px" }}>
                {com.userName}
                <p
                  style={{
                    color: "rgba(0,0,0,0.9)",
                    fontWeight: "500",
                    display: "inline",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  @{com.nickname}
                </p>
              </UserName>
              <CommentPrg>{com.comment}</CommentPrg>
            </CommentContentContainer>
          </CommentContainer>
          <CommentContainer className="noSelect">
            <CommentImg src="images/avatar.jpg" />
            <CommentContentContainer>
              <UserName style={{ fontSize: "16px" }}>
                {com.userName}
                <p
                  style={{
                    color: "rgba(0,0,0,0.9)",
                    fontWeight: "500",
                    display: "inline",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  @{com.nickname}
                </p>
              </UserName>
              <CommentPrg>{com.comment}</CommentPrg>
            </CommentContentContainer>
          </CommentContainer>
          <CommentContainer style={{ border: "none" }} className="noSelect">
            <CommentImg src="images/avatar.jpg" />
            <CommentContentContainer>
              <UserName style={{ fontSize: "16px" }}>
                {com.userName}
                <p
                  style={{
                    color: "rgba(0,0,0,0.9)",
                    fontWeight: "500",
                    display: "inline",
                    fontSize: "13px",
                  }}
                >
                  {" "}
                  @{com.nickname}
                </p>
              </UserName>
              <CommentPrg>{com.comment}</CommentPrg>
            </CommentContentContainer>
          </CommentContainer>
        </SubCommentContainer>
        <AddCommentContainer>
          <TextArea placeholder="Yorum yazınız..." />
          <AddCommmentBtn>Yorum ekle</AddCommmentBtn>
        </AddCommentContainer>
      </div>
    </>
  );
};

export default CommentModal;
