import IconCard from "../Componments/IconCard";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../Context/LoadingContext";
import LightCard from "../Componments/LightCard";
import { motion } from "framer-motion";


function About() {
    const [openFaq, setOpenFaq] = useState(0);
    const [faqs, setFaqs] = useState([]);
    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    // useEffect(() => {
    //     const getPageContent = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}page/about`);
    //             const result = await response.json();

    //             if (!result?.status) {
    //                 throw new Error(result?.message);
    //             }
    //             setContent(result?.data?.content)
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             stopLoading();
    //         }
    //     };

    //     getPageContent();
    // }, []);

    // useEffect(() => {
    //     const getFaqContent = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}faqs?page=1`);
    //             const result = await response.json();

    //             if (!result?.status) {
    //                 throw new Error(result?.message);
    //             }
    //             setFaqs(result?.data)
    //             setOpenFaq(result?.data?.[0]?.id)
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             stopLoading();
    //         }
    //     };

    //     getFaqContent();
    // }, []);


    
    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 }
    };


    return (
        <>
            <section className="bg-primary py-16 relative mt-17 lg:mt-20 lg:py-18 xl:py-22 xl:mt-17">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-sm tracking-[0.12em] mb-2 text-accent font-medium uppercase lg:text-lg">About us</p>
                            <h2 className="text-white text-3xl font-bold tracking-[-0.3px] family-normal mb-4 lg:text-4xl xl:leading-16 xl:text-[54px]">Built by the people who <br/>wrote the rules</h2>
                            <p className="text-white/45 text-base max-w-120 mx-auto lg:leading-6 lg:text-lg xl:leading-7 xl:text-xl">Founding members of IRS security initiatives protecting taxpayers nationwide — we've spent our careers fighting identity theft at the national level.</p>
                        </div>
                        <div className="w-125 h-75 bg-[radial-gradient(ellipse,rgba(94,209,192,0.12)_0%,transparent_70%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-7 lg:gap-14 lg:grid-cols-2">
                        <div className="text-left content-center">
                            <p className="text-xs font-semibold text-teal uppercase tracking-[0.12em]">Our mission</p>
                            <h2 className="text-primary text-[40px] family-normal mt-4 mb-5 font-bold leading-12">Protecting the protectors</h2>
                            <p className="text-lg text-slate max-w-130 mx-auto mb-3 lg:mb-5">Tax preparers and financial professionals are on the front lines every tax season — processing millions of Americans' most sensitive financial data. Yet many small practices have little or no formal data protection in place.</p>
                            <p className="text-lg text-slate max-w-130 mx-auto mb-3 lg:mb-5">We built Fortipii because we've seen what happens when that data falls into the wrong hands — identity theft, financial devastation, broken client trust, and businesses destroyed overnight.</p>
                            <p className="text-lg text-slate max-w-130 mx-auto">Fortipii makes enterprise-grade data protection accessible to every practice, regardless of size. You handle the taxes. We'll handle the rest.</p>
                        </div>
                        <div className="content-center flex flex-col gap-6">
                            <motion.div 
                                variants={fadeTop}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-light border border-accent rounded-3xl p-8 flex gap-5 flex-col lg:flex-row lg:items-center"
                            >
                                <div className="bg-teal w-13 h-13 rounded-xl content-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-6 h-6 text-white mx-auto"><path d="M19.944,2.642,12,.009,4.056,2.642A3,3,0,0,0,2,5.49V12c0,7.524,9.2,11.679,9.594,11.852l.354.157.368-.122C12.712,23.755,22,20.577,22,12V5.49A3,3,0,0,0,19.944,2.642Zm-7.5,11.347a1.873,1.873,0,0,1-1.335.553h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4L8.868,10.16,11.112,12.5l5.181-5.181,1.414,1.414Z" fill="currentColor" /></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className="text-primary text-base family-normal font-bold mb-3">IRS Security Summit</h4>
                                    <p className="text-base font-medium text-teal">Both Fortipii founders are founding members of the IRS Security Summit — the national initiative that sets cybersecurity standards for the entire tax preparation industry.</p>
                                </div>
                            </motion.div>
                            <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><path d="M11 2L3 5.5V11c0 4.2 3.2 8 8 9 4.8-1 8-4.8 8-9V5.5L11 2Z" stroke="#35A897" strokeWidth="1.5" fill="none"></path><path d="M8 11l2.5 2.5 4-5" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>', title : "20+ years in tax preparation", detail : "Shannon Bond's background spans product management, government relations, and leading the national conversation on taxpayer data security."}} />
                            <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="2" y="3" width="18" height="16" rx="2.5" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><rect x="5" y="7" width="7" height="3" rx="1.5" fill="#35A897" opacity="0.35"></rect><path d="M5 13h12M5 16h8" stroke="#35A897" strokeWidth="1.2" strokeLinecap="round"></path></svg>', title : "25+ years enterprise fintech", detail : "Satyan Penmetsa built and led technology platforms at Wolters Kluwer and Broadridge — organizations trusted with billions in financial data."}} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center mb-10">
                        <p className="text-base text-slate uppercase tracking-[0.12em] lg:text-lg">The founders</p>
                        <h2 className="text-primary text-3xl family-normal mt-2 mb-3 font-bold lg:text-[40px]">Meet the team behind Fortipii</h2>
                        <p className="text-base text-slate max-w-130 mx-auto lg:text-lg">Two industry veterans with a combined 45+ years protecting financial data at the highest levels.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2">
                        <div className="bg-secondary border border-gray rounded-[26px] border-t-4 border-t-accent px-8 py-6">
                            <div className="flex gap-5 items-center pb-4 mb-4 border-b border-gray">
                                <div className="bg-teal rounded-full w-14 h-14 text-xl family-normal rounded-full text-center content-center font-bold text-white">S</div>
                                <div className="text-left flex-1">
                                    <h4 className="text-primary text-lg font-bold family-normal mb-1">Shannon Bond</h4>
                                    <p className="text-teal text-sm font-semibold">Co-founder & CEO</p>
                                    <em className="text-sm text-muted font-semibold">Former VP & GM, US Preparer Market — Wolters Kluwer Tax & Accounting</em>
                                </div>
                            </div>
                            <ul className="p-0">
                                <li className="flex gap-3 text-sm text-primary items-center font-bold family-normal mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Founding member, IRS Security Summit
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Co-lead, Security Summit Tax Pro Work Group
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Chair of CERCA; Former IRS ETAAC member
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    20+ years in tax preparation industry
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Led product management & government relations
                                </li>
                            </ul>
                        </div>
                        <div className="bg-secondary border border-gray rounded-[26px] border-t-4 border-t-accent px-8 py-6">
                            <div className="flex gap-5 items-center pb-4 mb-4 border-b border-gray">
                                <div className="bg-primary rounded-full w-14 h-14 text-xl family-normal rounded-full text-center content-center font-bold text-white">S</div>
                                <div className="text-left flex-1">
                                    <h4 className="text-primary text-lg font-bold family-normal mb-1">Satyan Penmetsa</h4>
                                    <p className="text-teal text-sm font-semibold">Co-founder & CTO</p>
                                    <em className="text-sm text-muted font-semibold">Former VP & CTO, Tax & Accounting US — Wolters Kluwer / Broadridge</em>
                                </div>
                            </div>
                            <ul className="p-0">
                                <li className="flex gap-3 text-sm text-primary items-center font-bold family-normal mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Founding member, IRS Security Summit
                                </li>
                                <li className="flex gap-3 text-sm text-primary items-center font-bold family-normal mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Founding board member, IRS ISAC
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    SVP Software Engineering @ Broadridge
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    8 years CTO at Wolters Kluwer Tax & Accounting
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    25+ years enterprise fintech platforms
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-primary rounded-[26px] py-8 px-4 lg:py-12 lg:px-6">
                        <p className="text-center text-accent text-xs font-bold uppercase tracking-[0.12em] mb-4">Why we built Fortipii</p>
                        <p className="text-center max-w-full font-medium mx-auto text-white/85 text-base leading-6 mb-5 lg:leading-8 lg:text-xl lg:max-w-5/7">"Having spent our careers fighting identity theft at the national level, we've seen firsthand the catastrophic consequences when taxpayer data is stolen. We built Fortipii to protect tax preparers and their clients from these preventable disasters."</p>
                        <p className="text-sm text-white/35 text-center font-semibold">— Shannon Bond & Satyan Penmetsa, Co-founders</p>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center mb-10">
                        <p className="text-base text-slate uppercase tracking-[0.12em] lg:text-lg">Our values</p>
                        <h2 className="text-primary text-3xl leading-10 family-normal mt-2 mb-3 font-bold lg:leading-13 lg:text-[40px]">What we stand for</h2>
                        <p className="text-lg text-slate max-w-130 mx-auto">The principles that guide every product decision we make.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-x-5 gap-y-6 lg:grid-cols-3">
                        <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><path d="M11 2L3 5.5V11c0 4.2 3.2 8 8 9 4.8-1 8-4.8 8-9V5.5L11 2Z" stroke="#35A897" strokeWidth="1.5" fill="none"></path><path d="M8 11l2.5 2.5 4-5" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>', title : "Privacy by design", detail : "Your client data never leaves your environment. We process everything locally — there's nothing to breach on our end."}} />
                        <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><circle cx="11" cy="11" r="8" stroke="#35A897" strokeWidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round"></path></svg>', title : "Quietly relentless", detail : "The best security software is the kind you never have to think about. We work in the background so you can focus on your clients."}} />
                        <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="2" y="3" width="18" height="16" rx="2.5" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><rect x="5" y="7" width="7" height="3" rx="1.5" fill="#35A897" opacity="0.35"></rect><path d="M5 13h12M5 16h8" stroke="#35A897" strokeWidth="1.2" strokeLinecap="round"></path></svg>', title : "Built for real businesses", detail : "No IT team? No problem. Fortipii is designed for the solo practitioner and the 10-person office — not the enterprise with a security team."}} />
                        <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><circle cx="11" cy="11" r="8" stroke="#35A897" strokeWidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round"></path></svg>', title : "Honest simplicity", detail : "We don't use fear. We don't use jargon. We tell you what your risk is, show you what we protected, and let the results speak."}} />
                        <LightCard data={{icon : '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="w-6 h-6 mx-auto text-[#35A897]" ><path d="M24.062,9.033H14.849L12,.156l-2.849,8.877H-.062l7.46,5.453-2.864,8.863,7.467-5.488,7.467,5.488-2.864-8.863,7.46-5.453Zm-6.5,11.676l-5.562-4.089-5.562,4.089,2.134-6.604L3,10.033h6.881l2.119-6.605,2.12,6.605h6.88l-5.571,4.072,2.134,6.604Z" fill="currentColor" /></svg>', title : "Industry expertise", detail : "We aren't security generalists who stumbled into tax. We come from the industry — and that shapes everything we build."}} />
                        <LightCard data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><circle cx="11" cy="11" r="8" stroke="#35A897" strokeWidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round"></path></svg>', title : "Always compliant", detail : "GLBA, IRS Pub 4557, FTC Safeguards Rule — we track the regulatory landscape so you don't have to."}} />
                    </div>
                </div>
            </section>
            <section className="bg-primary py-16 relative lg:py-18 xl:py-22">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-xs tracking-[0.12em] mb-2 text-accent font-bold uppercase">Ready to get started?</p>
                            <h2 className="text-white font-bold tracking-[-0.3px] family-normal mb-2 text-3xl xl:text-[40px]">Join the early access program</h2>
                            <p className="text-white/45 text-base leading-6 max-w-100 mx-auto mb-3 lg:text-lg lg:leading-7 lg:mb-5 xl:mb-10">Be among the first tax professionals to protect their clients' sensitive data with Fortipii.</p>
                            <em className="text-sm font-semibold text-accent">"We don't do drama. Just privacy."</em>
                            <div className="flex gap-4 mt-5 justify-center items-center flex-wrap lg:mt-7">
                                <a href="#" className="text-base font-bold bg-accent text-primary py-3 px-5 rounded-full family-normal hover:bg-teal lg:px-10">See pricing — from free →</a>
                                <a href="#" className="text-base font-semibold border-[2px] border-white/35 text-white py-3 px-5 rounded-full hover:text-accent hover:border-accent lg:px-10">Watch the demo</a>
                            </div>
                        </div>
                        <div className="w-125 h-75 bg-[radial-gradient(ellipse,rgba(94,209,192,0.12)_0%,transparent_70%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;