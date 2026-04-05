import { Link, NavLink, useLocation } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Header(){
    const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 });
    const [activeTab, setActiveTab] = useState('home');
    const [hoverTab, setHoverTab] = useState('home');
    const location = useLocation();
    const [isScroll, setIsScroll] = useState(false);
    const [menu, setMenu] = useState(false);
    const {isLogin, user, logout} = useContext(AuthContext);

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
            }else {
                setHoverTab(null)
                setLineStyle({
                    left: 0,
                    width: 0,
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
            }else {
                setHoverTab(null)
                setLineStyle({
                    left: 0,
                    width: 0,
                });
            }
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
        setMenu(false)
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
                <nav className={`bg-[#FAFAFA]/96 fixed left-1/2 -translate-x-1/2 z-[999] transition-all duration-300 w-full backdrop-blur-lg ease-in-out py-2 min-h-17 content-center shadow-xs sticky-wrapper lg:py-4 xl:py-2 top-0 xl:min-h-17 2xl:min-h-17`}>
                    <div className="container mx-auto px-5 lg:px-10">
                        <div className={`flex gap-2 items-center justify-between`}>
                            <Link className="mr-6" to="/">
                                <img src="/assets/images/fortipii.svg" alt="Fortipii" className={`${isScroll ? "w-35 md:w-35" : "w-40"} lg:w-45 xl:w-30`} />
                            </Link>
                            <ul className={`gap-1 fixed z-10000 bg-secondary items-center top-17 left-0 border-1 border-gray rounded-0 px-5 py-4 transition-all transition-ease-in-out duration-300 origin-top overflow-hidden ${menu ? "opacity-100 h-115 rotate-x-0 w-full delay-200" : "opacity-0 w-0 relative border-[#26365626] h-0 rotate-x-90 xl:rotate-x-0 xl:opacity-100" } md:px-8 md:py-[2px] xl:rounded-full xl:top-0 xl:px-[6px] xl:w-max xl:border-[#26365626] xl:w-auto xl:flex xl:justify-center xl:relative xl:h-max xl:overflow-y-visible xl:translate-y-0`}  ref={navRef} onMouseLeave={handleLeave}>
                                <li className="nav-item">
                                    <NavLink to="/" className={`inline-block text-xl text-slate font-semibold py-2.5 px-1 w-full lg:px-4 xl:text-sm xl:w-max ${hoverTab=="/" ? "text-primary xl:text-primary" : ""}`} data-page="/" onMouseEnter={handleHover}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/about" className={`inline-block text-xl text-slate font-semibold py-2.5 px-2 w-full lg:px-4 xl:text-sm xl:w-max ${hoverTab=="/about" ? "text-primary xl:text-primary" : ""}`}  data-page="/about"  onMouseEnter={handleHover}>About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/platform" className={`inline-block text-xl text-slate font-semibold py-2.5 px-2 w-full lg:px-4 xl:text-sm xl:w-max ${hoverTab=="/platform" ? "text-primary xl:text-primary" : ""}`}  data-page="/platform" onMouseEnter={handleHover}>Platform</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/pricing" className={`inline-block text-xl text-slate font-semibold py-2.5 px-2 w-full lg:px-4 xl:text-sm xl:w-max ${hoverTab=="/pricing" ? "text-primary xl:text-primary" : ""}`}  data-page="/pricing" onMouseEnter={handleHover}>Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/blog" className={`inline-block text-xl text-slate font-semibold py-2.5 px-2 w-full lg:px-4 xl:text-sm xl:w-max ${hoverTab=="/blog" ? "text-primary xl:text-primary" : ""}`}  data-page="/blog" onMouseEnter={handleHover}>Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className={`inline-block text-xl text-slate font-semibold py-2.5 px-2 w-full lg:px-4 xl:text-sm xl:w-max ${hoverTab=="/contact" ? "text-primary xl:text-primary" : ""}`}  data-page="/contact"  onMouseEnter={handleHover}>Contact</NavLink>
                                </li>
                                {!isLogin ?
                                    <>
                                        <li className="nav-item block py-2 xl:hidden">
                                            <Link to="/" className="bg-transparent text-xl relative font-semibold text-center text-slate py-3 px-4.5 w-full inline-block border-[1.5px] border-gray rounded-full hover:border-accent hover:text-teal">Log in</Link>
                                        </li>
                                        <li className="nav-item block py-2 xl:hidden">
                                            <Link to="/contact" className="bg-accent text-xl relative font-bold text-primary py-3 px-5 inline-block w-full text-center rounded-full hover:bg-teal hover:text-white">Get early access</Link>
                                        </li>
                                    </> :
                                     ''
                                }
                                <span
                                    className="absolute top-1/2 -translate-y-1/2 h-[35px] bg-white shadow-sm rounded-full transition-all -z-1 hidden xl:block"
                                    style={{
                                        left: `${lineStyle.left}px`,
                                        width: `${lineStyle.width}px`,
                                    }}
                                />
                            </ul>
                            <div className="flex gap-2 items-center">
                                {!isLogin ?
                                    <>
                                        <Link to="/" className="bg-transparent text-sm relative font-semibold text-slate py-2 px-4.5 border-[1.5px] border-gray rounded-full hidden xl:block 2xl:block hover:border-accent hover:text-teal">Log in</Link>
                                        <Link to="/contact" className="bg-accent text-sm relative font-bold text-primary py-2.25 px-5 rounded-full hidden xl:block 2xl:block hover:bg-teal hover:text-white">Get early access</Link>
                                    </> :
                                    <>
                                        <div className="flex gap-2 items-center px-4 border-r-2 mr-2 border-[#26365626]">
                                            <h2 className="text-lg text-[#263656] font-semibold">{user?.user_nicename}</h2>
                                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5 text-primary">
                                                <path d="m10.958,15.576c-.156.528-.706.833-1.244.673-.553-.165-1.129-.249-1.714-.249-3.309,0-6,2.691-6,6v1c0,.552-.447,1-1,1s-1-.448-1-1v-1c0-4.411,3.589-8,8-8,.778,0,1.548.112,2.286.332.529.158.83.715.672,1.244Zm13.042-1.14v3.085c0,4.032-3.973,5.942-5.126,6.406-.12.048-.247.072-.373.072-.153,0-.307-.035-.463-.113-1.123-.562-5.038-2.796-5.038-6.365v-3.085c0-1.295.826-2.439,2.055-2.848l3.131-1.038c.203-.067.426-.067.629,0l3.13,1.038c1.229.408,2.056,1.553,2.056,2.848Zm-2,0c0-.432-.275-.813-.686-.949l-2.814-.933-2.815.933c-.409.136-.685.518-.685.949v3.085c0,2.28,2.63,3.888,3.545,4.379,1.031-.454,3.455-1.796,3.455-4.379v-3.085ZM14,6c0,3.309-2.691,6-6,6s-6-2.691-6-6S4.691,0,8,0s6,2.691,6,6Zm-2,0c0-2.206-1.794-4-4-4s-4,1.794-4,4,1.794,4,4,4,4-1.794,4-4Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <button className="btn-primary bg-secondary font-commissioner text-base relative font-semibold text-white py-3 px-8 rounded-full hidden cursor-pointer xl:block 2xl:block" onClick={() => logout()}>Logout</button>
                                    </>
                                }
                                <button className={`block ml-4 humburger cursor-pointer group text-center content-center lg:block xl:hidden 2xl:hidden ${menu ? "active" : ""}`} onClick={() => setMenu((pre) => !pre)}>
                                    <div className="flex flex-col overflow-hidden w-12 h-12 justify-center relative gap-1.5 relative m-auto">
                                        <div className="w-10 h-1 bg-primary rounded-full line-1"></div>
                                        <div className="flex justify-start gap-1 items-center min-h-1.5 line-2">
                                            <span className="block w-7 h-1 bg-primary rounded-full group-hover:w-8"></span>
                                            <span className="block w-1.5 h-1.5 bg-primary rounded-full group-hover:opacity-0"></span>
                                        </div>
                                        <div className="block w-6 h-1 bg-primary rounded-full line-3"></div>
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