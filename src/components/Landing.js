import React from "react";
import styled from "styled-components";
import LandImage from "./mac.gif";
import { Link, useHistory } from "react-router-dom";

const Landing = () => {
  const history = useHistory();
  return (
    <Container>
      <TextCOntain>
        <MainText>ChatBDCL</MainText>
        <SubText>The World Best Chat App</SubText>
      </TextCOntain>

      <ImageDiv src={LandImage} alt="" />
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button>Proceed To Login</Button>
      </Link>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const TextCOntain = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const MainText = styled.div`
  font-weight: 700;
  font-size: xx-large;
`;

const SubText = styled.div`
  font-size: small;
  font-weight: 600;
`;

const ImageDiv = styled.img`
  width: 700px;
  margin-bottom: 20px;

  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;

const Button = styled.div`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  background-color: #4a87ed;
`;
