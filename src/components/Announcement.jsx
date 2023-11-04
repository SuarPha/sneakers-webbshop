import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.5rem;
  height: 30px;
  background-color: #2b787e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 300;
`;
const Announcement = () => {
  return <Container>Nice Deal! Free Shipping on Order Over $500</Container>;
};

export default Announcement;
