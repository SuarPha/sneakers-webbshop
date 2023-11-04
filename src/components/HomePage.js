import React from "react";
import Layout from "./shared/Layout";
import Hero from "./Hero";
import MainSection from "./main-section/MainSection";
import FeaturedCollection from "./featured-collection/FeaturedCollection";
import Announcement from "./Announcement";

const HomePage = () => {
  return (
    <>
      <Announcement />
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default HomePage;
