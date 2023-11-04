import React from "react";
import Layout from "./shared/Layout";

const NotFound = () => {
  const style = {
    fontWeight: "blod",
    textAlign: "center",
  };

  return (
    <Layout>
      <p style={style}>Unfortunately! we can't find that page</p>
    </Layout>
  );
};

export default NotFound;
