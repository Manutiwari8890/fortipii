import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Footer(){
    const [scrollActive, setScrollActive] = useState(false);

    const bottomToTop = () => {
        window.scroll({
            top : 0,
            behavior : "smooth"
        })
    }

    useEffect(() => {
        function handleScroll(){
            if(window.scrollY>150){
                setScrollActive(true)
            }else{
                setScrollActive(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <footer className="bg-primary pt-12 border-t border-[#ffffff12]">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-y-3 px-0 pb-10 md:gap-y-2 md:gap-x-8 md:grid-cols-2 lg:gap-2 lg:grid-cols-4 lg:gap-5 xl:gap-10">
                        <div className="company-detail">
                            <Link to="/" className="inline-block">
                                <img src="/assets/images/fortipii-light.svg" alt="" className="w-30"/>
                            </Link>
                            <p className="text-sm font-semibold leading-5 text-[#ffffff59] mt-2 max-w-40">Protecting your clients' sensitive data. <br /> <em className="text-accent mt-2 inline-block lg:mt-0">"So safe, it's boring."</em></p>
                        </div>
                        <div className="footer-links">
                            <h4 className="text-xs font-semibold uppercase text-white/35 mb-3 mt-2">Platform</h4>
                            <ul>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">One-time scan & protect</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Ongoing protection</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">FortiPIIScore</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Email monitoring</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">WISP documentation</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4 className="text-xs font-semibold uppercase text-white/35 mb-3 mt-2">Company</h4>
                            <ul>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">About</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Blog</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Careers</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-links">
                            <h4 className="text-xs font-semibold uppercase text-white/35 mb-3 mt-2">Legal</h4>
                            <ul>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Privacy policy</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Terms of service</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Security</Link>
                                </li>
                                <li>
                                    <Link className="text-sm text-white/50 font-semibold py-2 inline-block w-full hover:text-accent">Data processing agreement</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className={`TopToBotton ${scrollActive ? "active" : ""}`} onClick={() => bottomToTop()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="m-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.38346 14.5459V3.01257L6.2768 6.11924L5.3328 5.1619L10.0501 0.443237L14.7688 5.1619L13.8248 6.12057L10.7168 3.01257V14.5459H9.38346ZM2.87146 19.1099C2.25724 19.1099 1.7448 18.9046 1.33413 18.4939C0.923463 18.0832 0.717686 17.5703 0.716797 16.9552V13.7246H2.05013V16.9552C2.05013 17.1606 2.13546 17.349 2.30613 17.5206C2.4768 17.6921 2.6648 17.7775 2.87013 17.7766H17.2301C17.4346 17.7766 17.6226 17.6912 17.7941 17.5206C17.9657 17.3499 18.051 17.1615 18.0501 16.9552V13.7246H19.3835V16.9552C19.3835 17.5695 19.1781 18.0819 18.7675 18.4926C18.3568 18.9032 17.8439 19.109 17.2288 19.1099H2.87146Z" fill="#fff"></path></svg>
                        <i></i>
                    </button>
                </div>
                <div className="py-6 text-center bg-primary/10 border-t border-white/7">
                    <div className="container px-5 mx-auto lg:px-10">
                        <div className="flex justify-between flex-wrap gap-y-3">
                            <p className="text-sm text-white/25 font-semibold">© 2026 Fortipii, Inc. All rights reserved. &nbsp; · &nbsp; <a href="" className="text-xs text-white/50 font-semibold hover:text-accent">Privacy </a> &nbsp; · &nbsp; <a href="" className="text-xs text-white/50 font-semibold hover:text-accent">Terms</a></p>
                            <div className="flex gap-2">
                                <span className="text-[11px] font-semibold text-white/35 border border-white/10 px-3 py-1 rounded-full">GLBA</span>
                                <span className="text-[11px] font-semibold text-white/35 border border-white/10 px-3 py-1 rounded-full">IRS Pub 4557</span>
                                <span className="text-[11px] font-semibold text-white/35 border border-white/10 px-3 py-1 rounded-full">FTC Safeguards</span>
                                <span className="text-[11px] font-semibold text-white/35 border border-white/10 px-3 py-1 rounded-full">CCPA</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </>
    )
}

export default Footer;