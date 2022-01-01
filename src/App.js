import React from "react";
import { Route, Routes } from "react-router-dom";
import Experiences from "./components/Experiences";
import Partners from "./components/Partners";
import TravelAdvisory from "./components/TravelAdvisory";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { Container } from "./styles/ContainerStyled";
import GlobalStyles from "./styles/GlobalStyled";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      {/* <div>COVID-19 Advisory</div> */}
      <Header />
      <Container>
        <Experiences />
        <Partners />
        <Contact />
        <TravelAdvisory />
      </Container>
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
