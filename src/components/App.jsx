import { Route, Routes } from "react-router-dom";
import Home from "./Content/Home/Home";
import Portfolio from "./Content/Portfolio/Portfolio";
import Pages from "./Content/Pages/Pages";
import Services from "./Content/Services/Services";
import Footer from "./Content/Footer/Footer";
import Contact from "./Content/Contact/Contact";
import Navbar from "./Content/Home/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/pages' element={<Pages />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/footer' element={<Footer />} />
      </Routes>
    </>
  );
};
