import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../NewCollections/NewCollections";
import Newsletter from "../Components/NewsLetter/Newsletter";

const Home = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </main>
  );
};

export default Home;