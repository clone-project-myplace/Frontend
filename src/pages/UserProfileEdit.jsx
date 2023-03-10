import React, { useRef, useState } from "react";
import styled from "styled-components";
import defaultProfileImg from "../assets/default_profile.jpeg";
import { HiPencil } from "react-icons/hi";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import { HiArrowLeft } from "react-icons/hi2";
import { uploadProfile } from "../api/getDetail";
import { navbarColorCode } from "../constants/colorCode";

const UserProfileEdit = () => {
  const accessToken = window.localStorage.getItem("accessToken");

  const [newimage, setNewImage] = useState("");
  const [file, setFile] = useState("");
  const [isStored, setIsStored] = useState(false);

  const location = useLocation();

  const receivedNickname = location.state.currentNickname;
  const receivedImgUrl = location.state.currentImgUrl;

  const onImgPostHandler = (event) => {
    setNewImage([]);
    for (let i = 0; i < event.target.files.length; i++) {
      setFile(event.target.files[i]);
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.addEventListener("loaded", (event) => {
        newimage.src = event.target.result;
      });
      reader.onloadend = () => {
        const base = reader.result;
        if (base) {
          const baseSub = base.toString();
          setNewImage((newimage) => [...newimage, baseSub]);
        }
      };
    }

    setIsStored(true);
  };

  const fileInput = useRef();

  const onImgButton = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const mutation = useMutation(() => uploadProfile(formData, accessToken));

  const formData = new FormData();

  const onSubmitPostHandler = async (event) => {
    event.preventDefault();

    formData.append("imgUrl", file);
    setIsStored(true);
    mutation.mutate(formData);
    alert("업로드 완료!");
  };

  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/");
  };

  //useEffect 써서 저장하기 눌렀을때 프로필에 사진 보여주기 가능?
  const handleOnClickLogOutBtn = () => {
    localStorage.removeItem("accessToken");
    alert("로그아웃!");
    window.location.replace("/");
  };

  return (
    <>
      <div>
        <Navbar
          expand="lg"
          sticky="top"
          style={{
            display: "flex",
          }}
        >
          <Navbar.Brand onClick={navToHome} style={{ cursor: "pointer" }}>
            <HiArrowLeft size={34} />
          </Navbar.Brand>
          <Title>프로필 설정</Title>
        </Navbar>
        <ProfileLayout>
          <form encType="multipart/form-data" onSubmit={onSubmitPostHandler}>
            <ProfileArea>
              <StButton onClick={onImgButton}>
                {isStored ? (
                  <img
                    style={ProfileImg}
                    //사진 여기로 전달 받기!
                    src={newimage}
                    alt="profile image"
                  />
                ) : (
                  <img
                    style={ProfileImg}
                    src={receivedImgUrl}
                    alt="profile image"
                  />
                )}
              </StButton>
              <EditPencilArea>
                <HiPencil color={navbarColorCode} />
              </EditPencilArea>
            </ProfileArea>
            <input
              type="file"
              accept="img/*"
              onChange={onImgPostHandler}
              ref={fileInput}
              style={{ display: "none" }}
            />
            <NicknameArea>
              <Label>닉네임</Label>
              <input type="text" value={receivedNickname} readOnly />
              <Label>소개</Label>
              <textarea
                type="text"
                placeholder="예. 분당구  빵집 & 케이크 맛집 탐험가"
                readOnly
              />
            </NicknameArea>
            <StyledButton background="#00b49b" color="#fff">
              저장하기
            </StyledButton>
          </form>
          <StyledButton onClick={handleOnClickLogOutBtn} color="#342e2e">
            로그아웃
          </StyledButton>
        </ProfileLayout>
      </div>
    </>
  );
};

export default UserProfileEdit;

const ProfileLayout = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const ProfileImg = {
  padding: "2px",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
};

const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Label = styled.div`
  color: #8f8f8f;
  display: block;
  font-weight: ${(props) => props.fontWeight};
`;

const EditPencilArea = styled.div`
  background-color: gray;
  position: relative;
  right: 20px;
  top: 37px;
  border-radius: 70%;
  overflow: hidden;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(256, 256, 256, 0.8);
`;

const NicknameArea = styled.div`
  input {
    box-sizing: border-box;
    height: 46px;
    width: 100%;
    outline: none;
    border-radius: 8px;
    padding: 0 12px;
    font-size: 14px;
    border: 1px solid #eee;
  }
  textarea {
    width: 100%;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 12px;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const StButton = styled.div`
  border: none;
  cursor: pointer;
`;

const StyledButton = styled.button`
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  background: ${(props) => props.background};
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
