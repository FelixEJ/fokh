import React from "react";
import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const Donate = () => {
  return (
    <Container>
        <h1>Donate</h1>
        <p>Please make a donation, whatever you can afford, large or small, and help us help our forests. Whatever we do, we cannot do it without you.</p>
        <p>For the Forests,</p>
        <p>Friends of Kalang Headwaters</p>
        <p>—</p>
        <p>Bank Details</p>
        <p>BANK: BCU (Bananacoast Credit Union)</p>
        <p>ACCOUNT: 10676817</p>
        <p>BSB: 533000</p>
        <p>Please note donation as going to “Friends of Kalang Headwaters”</p>
        <p>FoKH is not tax deductible</p>
        <p>If you don’t feel right about just giving money on this site, you can always talk to a real person. Email FoKH:</p>
        <p>friendsofkalangheadwaters@gmail.com</p>
        <p></p>
    </Container>
  );
};

export default Donate;