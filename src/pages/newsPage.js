import React from "react";
import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const News = () => {
  return (
    <Container>
        <h1>News</h1>
        <h2>Link to fb feed?</h2>
    </Container>
  );
};

export default News;