import { useState, useEffect, useContext } from "react";
import Header from "./Componments/Header";
import Footer from "./Componments/Footer";
import Index from "./Pages/Index";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";
import Loader from "./Componments/Loader";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App(){
  const location = useLocation();
  const { loading, startLoading, stopLoading } = useContext(LoadingContext)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    startLoading();
    const timer = setTimeout(() => stopLoading(), 1000);
    return () => clearTimeout(timer);
  }, [location])

  return (
    <>
      {loading ? <Loader key="route-loader" /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:slug" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;