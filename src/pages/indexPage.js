import React from "react";
import styled from "styled-components";
import "../App.css";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const Index = () => {
  return (
    <Container>
      <h1>Friends of Kalang Headwaters</h1>
      <h2>Philosophy</h2>
      <p>
        The Friends of Kalang Headwaters is a community-based organisation,
        including the Bellingen Environment Centre, National Parks Association
        of NSW, businesses, and individuals from our community.
      </p>
      <h2>Mission</h2>
      <p>
        To protect, promote and preserve the cultural and natural heritage of
        the Kalang river forests and headwaters from logging.
      </p>
      <h2>Goals</h2>
      <p>
        Achieve permanent protection of the Kalang forests and headwaters by
        extending the Baalijin Nature Reserve via the Headwaters Conservation
        Proposal – A nature reserve for the Upper Kalang, Middle Bellinger and
        Nambucca Rivers (Headwaters Conservation Reserve);{" "}
      </p>
      <p>Support the Great Koala National Park campaign.</p>
      <p>Achieve these goals through non-violent, direct action.</p>
    </Container>
  );
};

export default Index;
