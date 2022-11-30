import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const Home = () => {
  return (
    <Layout>
      <Div className="px-5">Hello World</Div>
    </Layout>
  );
};

const Div = styled.div`
  color: red;
`;

export default Home;
