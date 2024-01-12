import { Route, Routes } from "react-router-dom";
import Home from "./Content/Home/Home";
import Portfolio from "./Content/Portfolio/Portfolio";
import Pages from "./Content/Pages/Pages";
import Services from "./Content/Services/Services";
import Footer from "./Content/Footer/Footer";
import Contact from "./Content/Contact/Contact";
import Loyaut from "./Content/Home/Loyaut";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loyaut />}>
          <Route index element={<Home />} />
          <Route exact path='/portfolio' element={<Portfolio />} />
          <Route exact path='/pages' element={<Pages />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/footer' element={<Footer />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
