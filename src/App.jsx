import { useEffect, useContext, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingContext } from "./Context/LoadingContext";

const Header = lazy(() => import('./Componments/Header'));
const Footer = lazy(() => import('./Componments/Footer'));
const Index = lazy(() => import('./Pages/Index'));
const Loader = lazy(() => import('./Componments/Loader'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Blog = lazy(() => import('./Pages/Blog'));
const SingleBlog = lazy(() => import('./Pages/SingleBlog'));
const Login = lazy(() => import('./Pages/Login'));
const Signup = lazy(() => import('./Pages/Signup'));
const Pricing = lazy(() => import('./Pages/Pricing'));
const Platform = lazy(() => import('./Pages/Platform'));


function App(){
  const location = useLocation();
  const { loading, startLoading, stopLoading } = useContext(LoadingContext)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    startLoading();
    const timer = setTimeout(() => stopLoading(), 300);
    return () => {
      clearTimeout(timer);
      stopLoading()
    }
  }, [location.pathname])

  return (
    <>
      {loading ? <Loader key="route-loader" /> : null}
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
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