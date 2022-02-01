import React from "react";
import styled from "styled-components";
import HeaderImage from "../images/header.jpg";

const Image = styled.img`
  width: 100%;
  display: block;

  margin-left: auto;
  margin-right: auto;
  background-color: none;
`;

const Container = styled.div`
  display: block;

  margin-left: auto;
  margin-right: auto;
`;

const Header = () => {
  return (
    <Container>
      <a href="/">
        <Image
          src={HeaderImage}
          alt="Friends of Kalang Headwaters text over image of the Kalang valley and Dorrigo plateau."
        />
      </a>
    </Container>
  );
};

export default Header;
