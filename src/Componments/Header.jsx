import { Link, NavLink, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Header(){
    const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
    const [activeTab, setActiveTab] = useState('home');
    const [hoverTab, setHoverTab] = useState('home');
    const location = useLocation();
    const [isScroll, setIsScroll] = useState(false);
    const [menu, setMenu] = useState(false);

    const navRef = useRef(null);

    useEffect(() => {
        if (navRef.current) {
            setActiveTab(location.pathname)
            setHoverTab(location.pathname)
            const activeBtn = navRef.current.querySelector(
                `a[data-page="${location.pathname}"]`
            );
            if (activeBtn) {
                setLineStyle({
                    left: activeBtn.offsetLeft,
                    width: activeBtn.offsetWidth,
                });
            }
        }
    }, [activeTab, location.pathname]);

    const handleHover = (e) => {
        const button = e.target;
        const nav = navRef.current;
        if (button && nav) {
            const { offsetLeft, offsetWidth } = button;
            setHoverTab(e.currentTarget.dataset.page)
            setLineStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    };

    const handleLeave = () => {
        if (navRef.current) {
            const activeBtn = navRef.current.querySelector(
                `a[data-page="${activeTab}"]`
            );
            if (activeBtn) {
                setHoverTab(activeTab)
                setLineStyle({
                    left: activeBtn.offsetLeft,
                    width: activeBtn.offsetWidth,
                });
            }
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPercent = (scrollTop / docHeight) * 100;
            setIsScroll(scrollTop > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <>
            <header>
                <nav className={`bg-white  border fixed left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 ease-in-out py-4 ${menu ? "min-h-80" : "min-h-20 content-center "} ${isScroll ? " mx-auto border-[#26365626] rounded-full top-2 shadow-sm sticky-wrapper w-[95%] lg:py-2 lg:w-[95%] xl:w-[95%] 2xl:w-3/4" : "w-full border-transparent top-0"} xl:min-h-20 2xl:min-h-25`}>
                    <div className="container mx-auto px-2 lg:px-5">
                        <div className="flex gap-2 items-center justify-between">
                            <Link className="mr-6" to="/">
                                <img src="/assets/images/fortipii.svg" alt="Fortipii" className="w-45" />
                            </Link>
                            <ul className={`gap-1 fixed z-10000 top-22 left-0 border-1 border-transparent rounded-0 px-2 py-2 transition-all transition-ease-in-out duration-300 origin-top overflow-hidden ${menu ? "opacity-100 h-50 rotate-x-0 w-full delay-200" : "opacity-0 w-0 relative border-[#26365626] h-0 rotate-x-90" } md:px-8 lg:rounded-full xl:top-0 xl:px-2 xl:w-max xl:border-[#26365626] xl:w-auto xl:flex xl:justify-center xl:relative xl:h-max xl:overflow-y-visible xl:translate-y-0`}  ref={navRef} onMouseLeave={handleLeave}>
                                <li className="nav-item">
                                    <NavLink to="/" className={`inline-block text-xl text-[#263656] font-medium font-commissioner py-2 px-2 w-full lg:px-6 xl:text-base xl:w-max ${hoverTab=="/" ? "text-primary xl:text-white" : ""}`} data-page="/" onMouseEnter={handleHover}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className={`inline-block text-xl text-[#263656] font-medium font-commissioner py-2 px-2 w-full lg:px-6 xl:text-base xl:w-max ${hoverTab=="/about" ? "text-primary xl:text-white" : ""}`}  data-page="/about"  onMouseEnter={handleHover}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/services" className={`inline-block text-xl text-[#263656] font-medium font-commissioner py-2 px-2 w-full lg:px-6 xl:text-base xl:w-max ${hoverTab=="/services" ? "text-primary xl:text-white" : ""}`}  data-page="/services" onMouseEnter={handleHover}>Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className={`inline-block text-xl text-[#263656] font-medium font-commissioner py-2 px-2 w-full lg:px-6 xl:text-base xl:w-max ${hoverTab=="/contact" ? "text-primary xl:text-white" : ""}`}  data-page="/contact"  onMouseEnter={handleHover}>Contact</NavLink>
                                </li>
                                <span
                                    className="absolute top-1/2 -translate-y-1/2 h-[42px] bg-primary rounded-full transition-all -z-1 hidden xl:block"
                                    style={{
                                        left: `${lineStyle.left}px`,
                                        width: `${lineStyle.width}px`,
                                    }}
                                />
                            </ul>
                            <div className="flex gap-2 items-center">
                                <Link className="btn-primary bg-secondary font-commissioner text-base relative font-medium text-white py-3 px-8 rounded-full hidden">Sign Up</Link>
                                <Link className="btn-secondary bg-primary font-commissioner text-base relative font-medium text-white py-3 px-8 rounded-full hidden">Login</Link>
                                <button className={`block ml-4 humburger cursor-pointer group text-center content-center lg:block xl:hidden 2xl:hidden ${menu ? "active" : ""}`} onClick={() => setMenu((pre) => !pre)}>
                                    <div className="flex flex-col overflow-hidden w-12 h-12 justify-center relative gap-1.5 relative m-auto">
                                        <div className="w-10 h-1 bg-secondary rounded-full line-1"></div>
                                        <div className="flex justify-start gap-1 items-center min-h-1.5 line-2">
                                            <span className="block w-7 h-1 bg-secondary rounded-full group-hover:w-8"></span>
                                            <span className="block w-1.5 h-1.5 bg-primary rounded-full group-hover:opacity-0"></span>
                                        </div>
                                        <div className="block w-6 h-1 bg-secondary rounded-full line-3"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {menu &&
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-[2px]" onClick={() => setShowModal(false)}>
                    </div>
                }
            </header>
        </>
    )
}

export default Header;