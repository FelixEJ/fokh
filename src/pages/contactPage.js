import React from "react";
import "../App.css";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
`;

const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>
        <p>If you wish to get in touch, please send us an email. We will endeavour to reach you as soon as possible.</p>
        <p>friendsofkalangheadwaters@gmail.com</p>
    </div>
  );
};

export default Contact;