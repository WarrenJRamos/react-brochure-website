import React from "react";
import { Route, Routes } from "react-router-dom";
import Experiences from "./components/Experiences";
import Partners from "./components/Partners";
import TravelAdvisory from "./components/TravelAdvisory";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div>COVID-19 Advisory</div>
      <Navbar />
      <Experiences />
      <Partners />
      <Contact />
      <TravelAdvisory />
    </div>
  );
};

export default App;

{
  /* <Routes>
<Route path="/" element={<Experiences />} />
<Route path="/" element={<Partners />} />
<Route path="/" element={<TravelAdvisory />} />
<Route path="/" element={<Contact />} />
</Routes> */
}
