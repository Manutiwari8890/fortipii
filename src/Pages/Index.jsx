import { Link } from "react-router-dom";
import IconCard from "../Componments/IconCard";
import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../Context/LoadingContext";
import { motion } from "framer-motion";

function Index(){
    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const [showVideo, setShowVideo] = useState(false);
    // useEffect(() => {
    //     const getPageContent = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}page/home`);
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

    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 }
    };

    const slideRight = {
        hidden: { x: -150 },
        visible: { x: 0 }
    };

    const popUp = {
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1 }
    };

    const container = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <section className="bg-secondary relative border-t border-gray mt-17 py-12 pb-16 lg:mt-20 lg:py-18 xl:py-20 xl:mt-17">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-5 gap-5">
                        <div className="col-span-5 lg:pr-5 lg:col-span-3">
                            <div className="flex items-center gap-2 text-xs font-semibold text-teal bg-light border border-teal w-max px-5 py-2 mb-3 lg:mb-5 rounded-full"><div className="w-1 h-1 rounded-full bg-accent"></div>Now in early access · Tax & financial professionals</div>
                            <motion.h2 
                                variants={fadeRight}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="text-primary text-4xl family-normal mt-2 mb-2 font-bold lg:text-5xl lg:leading-13 xl:mb-3 xl:leading-17 xl:text-6xl">
                                    From risk assessment to <span className="text-teal">full protection</span> — one platform
                            </motion.h2>
                            <p className="text-xl text-slate max-w-130 mt-3 mb-4 leading-8 lg:mt-6">Fortipii finds, scores, and shields your clients' sensitive data across your files, drives, and email — quietly, automatically, completely.</p>
                            <em className="text-slate text-sm font-semibold ">"So safe, it's boring." — That's the goal.</em>
                            <div className="flex gap-2 items-center my-4 lg:gap-4 lg:my-5 xl:my-8">
                                <a href="" className="text-base font-bold bg-primary text-white py-4 px-6 rounded-full family-normal hover:bg-teal hover:-translate-y-[2px] lg:px-10">Get early access →</a>
                                <button className="text-base font-semibold border-[2px] border-gray text-primary py-4 px-6 rounded-full hover:text-accent hover:border-accent flex gap-1 cursor-pointer lg:px-10" onClick={() => setShowVideo(true)}>
                                    <div className="bg-white rounded-full content-center text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-5 h-5"><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.963,0-9-4.038-9-9S7.037,3,12,3s9,4.038,9,9-4.037,9-9,9Zm-3-13.5l8,4.5-8,4.5V7.5Z" fill="currentColor" /></svg>
                                    </div>
                                    Watch the demo
                                </button>
                            </div>
                            <ul className="mb-3 lg:mb-0">
                                <li className="flex gap-3 text-sm text-muted items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    We never store or access your clients' sensitive data
                                </li>
                                <li className="flex gap-3 text-sm text-muted items-center font-semibold mb-3">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    Works on Windows & Mac — no IT setup required
                                </li>
                                <li className="flex gap-3 text-sm text-muted items-center font-semibold">
                                    <div className="bg-light border border-teal/50 p-1 rounded-full"><svg viewBox="0 0 9 9" fill="none" className="w-2.5 h-2.5"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                                    GLBA and IRS Pub 4557 compliant workflow
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-5 content-center relative lg:col-span-2">
                            <div className="w-100 h-100 bg-[radial-gradient(circle,rgba(94,209,192,0.18)_0%,transparent_70%)] absolute -top-10 -right-30"></div>
                            <motion.div
                                variants={fadeTop}
                                initial="hidden"
                                whileInView="visible"
                                className="bg-primary rounded-4xl relative"
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative overflow-hidden px-6 py-6">
                                    <div className="w-45 h-45 bg-[radial-gradient(circle,rgba(94,209,192,0.18)_0%,transparent_50%)] absolute -top-10 -right-10"></div>
                                    <p className="text-xs text-accent tracking-[0.12em] uppercase font-bold mb-4">FortiPIIScore · Your Practice</p>
                                    <div className="text-5xl font-bold text-white items-center flex gap-4"><p className="family-normal ">84</p> <span className="bg-accent px-4 py-1 text-xs rounded-full text-primary font-bold">Protected</span></div>
                                    <p className="text-xs text-white/45 mt-2 mb-6 font-bold">Sensitive client data risk score — updated today</p>
                                    <div className="item mb-4">
                                        <div className="flex justify-between mb-1.5">
                                            <p className="text-xs text-white/55 font-semibold">Tax returns & W-2s</p>
                                            <p className="text-xs text-white/55 font-semibold">96%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }} className="bg-accent rounded-full h-full w-[96%]">
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="item mb-4">
                                        <div className="flex justify-between mb-1.5">
                                            <p className="text-xs text-white/55 font-semibold">Email attachments</p>
                                            <p className="text-xs text-white/55 font-semibold">71%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }} className="bg-[#F5A742] rounded-full h-full w-[71%]">
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="item mb-5">
                                        <div className="flex justify-between mb-1.5">
                                            <p className="text-xs text-white/55 font-semibold">Shared drives</p>
                                            <p className="text-xs text-white/55 font-semibold">88%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1, delay: 0.5 }}
                                                viewport={{ once: true }} className="bg-secondary rounded-full h-full w-[88%]">
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 border flex gap-4 border-gray rounded-xl absolute w-full max-w-90 -bottom-10 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:-left-10 lg:max-w-100">
                                    <div className="icon bg-light rounded-lg w-10 h-10 text-center content-center">
                                        <svg viewBox="0 0 16 16" fill="none" className="w-5 h-6 mx-auto"><path d="M8 1.5L2 4v5c0 3.5 2.5 6.7 6 7.5 3.5-.8 6-4 6-7.5V4L8 1.5Z" fill="#D8F5F1" stroke="#35A897" strokeWidth="1.3"></path><path d="M5.5 8l2 2 3.5-3.5" stroke="#35A897" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    <div className="text-left">
                                        <h6 className="text-sm font-bold text-primary family-normal">247 files protected today</h6>
                                        <p className="text-slate text-sm font-semibold">Sensitive data protected automatically</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {showVideo &&
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] backdrop-blur-[2px]" onClick={() => setShowVideo(false)}>
                    <div className="bg-secondary border border-gray-200 shadow-xs p-4 w-9/10 rounded-3xl lg:w-2/3 xl:w-1/2" onClick={(e) => e.stopPropagation()}>
                        <iframe className="w-full h-50 rounded-2xl lg:h-80" src="https://www.youtube.com/embed/QqVdIt5sPOo?si=WzGg8xZAgCURNG1H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            }
            <section className="bg-[#FAFAFA] py-5 border-t border-gray">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="flex gap-1 items-center flex-wrap lg:gap-2">
                        <p className="text-muted text-xs font-bold">Compliance ready:</p>
                        <span className="bg-secondary text-slate py-2 px-2 text-xs rounded-full font-bold border border-gray lg:px-3">GLBA</span>
                        <span className="bg-secondary text-slate py-2 px-2 text-xs rounded-full font-bold border border-gray lg:px-3">IRS Pub 4557</span>
                        <span className="bg-secondary text-slate py-2 px-2 text-xs rounded-full font-bold border border-gray lg:px-3">FTC Safeguards Rule</span>
                        <span className="bg-secondary text-slate py-2 px-2 text-xs rounded-full font-bold border border-gray lg:px-3">CCPA</span>
                        <span className="bg-secondary text-slate py-2 px-2 text-xs rounded-full font-bold border border-gray lg:px-3">SOC 2 Type II</span>
                    </div>
                </div>
            </section>
            <section className="bg-primary py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center mb-10">
                        <p className="text-lg text-accent uppercase tracking-[0.12em]">How it works</p>
                        <h2 className="text-white text-[30px] leading-10 family-normal mt-2 mb-3 font-bold lg:text-[40px] lg:leading-13">One end-to-end workflow</h2>
                        <p className="text-lg text-white/45 max-w-130 mx-auto">From first scan to ongoing protection — Fortipii handles every step, automatically.</p>
                    </div>
                    <div className="relative">
                        <div className="w-[2px] h-150 bg-linear-end absolute top-10 left-1/2 -translate-x-1/2 animate-pulse lg:w-4/5 lg:h-[1px]"></div>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            className="grid grid-cols-1 gap-5 lg:grid-cols-5"
                        >
                            <motion.div
                                variants={fadeTop}
                                className="text-center group"
                                transition={{ duration: 0.5 }}
                            >
                                <div className="icon w-17 h-17 mx-auto bg-[#293341] border-[1.5px] border-accent/30 rounded-full content-center relative mb-5 group-hover:border-accent">
                                    <span className="bg-accent w-5 h-5 font-bold family-normal text-center content-center absolute -top-2 -right-1 text-primary text-xs rounded-full">1</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mx-auto"><rect x="3" y="3" width="18" height="18" rx="3" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><path d="M7 12h10M7 8h7M7 16h5" stroke="#5ED1C0" strokeWidth="1.3" strokeLinecap="round"></path></svg>
                                </div>
                                <h5 className="text-white font-semibold text-sm">Assess</h5>
                                <p className="text-xs text-white/65 mt-1 leading-5 font-semibold">Scan files, drives & network shares for sensitive client data</p>
                            </motion.div>
                            <motion.div
                                variants={fadeTop}
                                className="text-center group"
                                transition={{ duration: 0.5 }}
                            >
                                <div className="icon w-17 h-17 mx-auto bg-[#293341] border-[1.5px] border-accent/30 rounded-full content-center relative mb-5 group-hover:border-accent">
                                    <span className="bg-accent w-5 h-5 font-bold family-normal text-center content-center absolute -top-2 -right-1 text-primary text-xs rounded-full">2</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mx-auto"><circle cx="12" cy="12" r="9" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></circle><path d="M12 8v4l3 3" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                </div>
                                <h5 className="text-white font-semibold text-sm">Score</h5>
                                <p className="text-xs text-white/65 mt-1 leading-5 font-semibold">FortiPIIScore rates your sensitive data exposure risk</p>
                            </motion.div>
                            <motion.div
                                variants={fadeTop}
                                className="text-center group"
                                transition={{ duration: 0.5 }}
                            >
                                <div className="icon w-17 h-17 mx-auto bg-[#293341] border-[1.5px] border-accent/30 rounded-full content-center relative mb-5 group-hover:border-accent">
                                    <span className="bg-accent w-5 h-5 font-bold family-normal text-center content-center absolute -top-2 -right-1 text-primary text-xs rounded-full">3</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mx-auto"><rect x="4" y="5" width="16" height="14" rx="2.5" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><rect x="7" y="9" width="7" height="2.5" rx="1.2" fill="#5ED1C0" opacity="0.4"></rect><path d="M7 14h10M7 17h6" stroke="#5ED1C0" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                                </div>
                                <h5 className="text-white font-semibold text-sm">Protect</h5>
                                <p className="text-xs text-white/65 mt-1 leading-5 font-semibold">Smart protection across PDFs, images & documents</p>
                            </motion.div>
                            <motion.div
                                variants={fadeTop}
                                className="text-center group"
                                transition={{ duration: 0.5 }}
                            >
                                <div className="icon w-17 h-17 mx-auto bg-[#293341] border-[1.5px] border-accent/30 rounded-full content-center relative mb-5 group-hover:border-accent">
                                    <span className="bg-accent w-5 h-5 font-bold family-normal text-center content-center absolute -top-2 -right-1 text-primary text-xs rounded-full">4</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mx-auto"><rect x="3" y="6" width="18" height="13" rx="2.5" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><path d="M3 9.5l9 5.5 9-5.5" stroke="#5ED1C0" strokeWidth="1.3" strokeLinecap="round" fill="none"></path></svg>
                                </div>
                                <h5 className="text-white font-semibold text-sm">Monitor</h5>
                                <p className="text-xs text-white/65 mt-1 leading-5 font-semibold">Ongoing email & attachment protection, O365 & Gmail</p>
                            </motion.div>
                            <motion.div
                                variants={fadeTop}
                                className="text-center group"
                                transition={{ duration: 0.5 }}
                            >
                                <div className="icon w-17 h-17 mx-auto bg-[#293341] border-[1.5px] border-accent/30 rounded-full content-center relative mb-5 group-hover:border-accent">
                                    <span className="bg-accent w-5 h-5 font-bold family-normal text-center content-center absolute -top-2 -right-1 text-primary text-xs rounded-full">5</span>
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mx-auto"><rect x="5" y="3" width="14" height="18" rx="2.5" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><path d="M9 8h6M9 12h6M9 16h4" stroke="#5ED1C0" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                                </div>
                                <h5 className="text-white font-semibold text-sm">Report</h5>
                                <p className="text-xs text-white/65 mt-1 leading-5 font-semibold">WISP-ready compliance documentation, always current</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center mb-5 lg:mb-10">
                        <p className="text-base text-slate uppercase tracking-[0.12em] lg:text-lg">Built for small offices</p>
                        <h2 className="text-primary text-[30px] leading-10 family-normal mt-2 mb-3 font-bold lg:leading-13 lg:text-[40px]">Quietly protecting your clients' data behind the scenes</h2>
                        <p className="text-lg text-slate max-w-130 mx-auto">Everything a tax or financial professional needs to keep sensitive client data safe — without enterprise complexity.</p>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        className="grid grid-cols-1 gap-x-5 gap-y-7 lg:grid-cols-3"
                    >
                        <IconCard 
                            variants={popUp}
                            transition={{ duration: 0.5 }}
                            data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="2" y="2" width="18" height="18" rx="3" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><path d="M6 11h10M6 7h7M6 15h5" stroke="#35A897" strokeWidth="1.3" strokeLinecap="round"></path></svg>', title : "Folder-based scanning", detail : "Scan desktops, OneDrive, Google Drive, and shared drives to locate exposed sensitive client data — SSNs, DOBs, account numbers, and more."}} 
                        />
                        <IconCard 
                            variants={popUp}
                            transition={{ duration: 0.5 }}
                            data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="2" y="3" width="18" height="16" rx="2.5" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><rect x="5" y="7" width="7" height="3" rx="1.5" fill="#35A897" opacity="0.35"></rect><path d="M5 13h12M5 16h8" stroke="#35A897" strokeWidth="1.2" strokeLinecap="round"></path></svg>', title : "Smart protection", detail : "Protect private client data in PDFs and images while preserving document layout. Originals secured in a controlled vault."}} 
                        />
                        <IconCard 
                            variants={popUp}
                            transition={{ duration: 0.5 }}
                            data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="2" y="4" width="18" height="14" rx="2.5" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><path d="M2 8l9 6 9-6" stroke="#5ED1C0" strokeWidth="1.3" strokeLinecap="round" fill="none"></path></svg>', title : "Email & attachment monitoring", detail : "Monitor high-risk mailboxes across O365 and Gmail. Flag, isolate, or protect sensitive client data before it becomes a liability.", dark : true}} 
                        />
                        <IconCard 
                            variants={popUp}
                            transition={{ duration: 0.5 }}
                            data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><circle cx="11" cy="11" r="8" stroke="#35A897" strokeWidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round"></path></svg>', title : "FortiPIIScore", detail : "A monthly risk score that quantifies your sensitive data exposure across files, drives, and email. Track protection improvement over time."}} 
                        />
                        <IconCard 
                            variants={popUp}
                            transition={{ duration: 0.5 }}
                            data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><path d="M11 2L3 5.5V11c0 4.2 3.2 8 8 9 4.8-1 8-4.8 8-9V5.5L11 2Z" stroke="#35A897" strokeWidth="1.5" fill="none"></path><path d="M8 11l2.5 2.5 4-5" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>', title : "WISP documentation", detail : "Auto-generate and maintain your Written Information Security Plan — a core IRS requirement — updated as your protection changes."}} 
                        />
                        <IconCard 
                            variants={popUp}
                            transition={{ duration: 0.5 }}
                            data={{icon : '<svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="4" y="2" width="14" height="18" rx="2.5" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><path d="M8 7h6M8 11h6M8 15h4" stroke="#35A897" strokeWidth="1.2" strokeLinecap="round"></path></svg>', title : "Compliance reporting", detail : "Exportable audit-ready reports for GLBA, IRS Pub 4557, and FTC Safeguards Rule — ready if you're ever audited, with zero manual effort."}} 
                        />
                    </motion.div>
                </div>
            </section>
            <section className="bg-secondary py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-8 lg:gap-14 lg:grid-cols-2">
                        <div className="text-left">
                            <p className="text-xs font-semibold text-teal uppercase tracking-[0.12em]">Why Fortipii</p>
                            <h2 className="text-primary text-[30px] family-normal mt-4 mb-3 font-bold leading-10 lg:mb-5 lg:leading-12 lg:text-[40px]">Your clients trust you with their most sensitive information</h2>
                            <p className="text-lg text-slate max-w-130 mx-auto">Tax and financial professionals handle more private client data than almost any other business. One breach can be devastating. Fortipii was built specifically for this — by people who've seen it happen.</p>
                            <div className="mt-6">
                                <div className="flex gap-4 mb-5">
                                    <div className="icon w-8 h-8 bg-light border border-teal/40 rounded-lg text-center content-center">
                                        <svg viewBox="0 0 15 15" fill="none" className="w-4 h-5 mx-auto"><path d="M7.5 1.5L2 4v5c0 3.2 2.5 6 5.5 6.5 3-.5 5.5-3.3 5.5-6.5V4L7.5 1.5Z" stroke="#35A897" strokeWidth="1.3" fill="none"></path></svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h4 className="text-base font-semibold family-normal text-primary mb-2">Purpose-built for tax & financial offices</h4>
                                        <p className="text-sm text-slate family-normal">Not a generic data tool. Fortipii understands W-2s, 1099s, SSNs, TINs — the data your practice handles daily.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 mb-5">
                                    <div className="icon w-8 h-8 bg-light border border-teal/40 rounded-lg text-center content-center">
                                        <svg viewBox="0 0 15 15" fill="none" className="w-4 h-5 mx-auto"><circle cx="7.5" cy="7.5" r="6" stroke="#35A897" strokeWidth="1.3" fill="none"></circle><path d="M5 7.5l2 2 3.5-4" stroke="#35A897" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h4 className="text-base font-semibold family-normal text-primary mb-2">No IT team required</h4>
                                        <p className="text-sm text-slate family-normal">Installs in minutes. Runs automatically in the background. No technical expertise needed.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="icon w-8 h-8 bg-light border border-teal/40 rounded-lg text-center content-center">
                                        <svg viewBox="0 0 15 15" fill="none" className="w-4 h-5 mx-auto"><rect x="2" y="5" width="11" height="8" rx="2" stroke="#35A897" strokeWidth="1.3" fill="none"></rect><path d="M5 5V4a2.5 2.5 0 015 0v1" stroke="#35A897" strokeWidth="1.3" strokeLinecap="round"></path></svg>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h4 className="text-base font-semibold family-normal text-primary mb-2">Your data never leaves your environment</h4>
                                        <p className="text-sm text-slate family-normal">Everything processes locally. Client data is never transmitted to or stored on our servers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-center">
                            <div className="bg-primary px-6 py-5 rounded-[18px] flex items-center gap-6 mb-4">
                                <h5 className="text-accent text-5xl font-bold family-normal">68%</h5>
                                <div className="text-left">
                                    <h6 className="text-white text-sm font-semibold">of small financial firms have no formal data protection policy</h6>
                                    <p className="text-sm text-white/55 font-semibold mt-2">Regulators are increasingly auditing practices of all sizes under GLBA and the FTC Safeguards Rule.</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white border border-gray py-5 px-5 rounded-[18px]">
                                    <h5 className="text-teal text-3xl font-bold family-normal">$200k+</h5>
                                    <p className="text-slate text-sm family-normal mt-2">Average cost of a data breach for a small financial practice</p>
                                </div>
                                <div className="bg-white border border-gray py-5 px-5 rounded-[18px]">
                                    <h5 className="text-teal text-3xl font-bold family-normal">4 min</h5>
                                    <p className="text-slate text-sm family-normal mt-2">Average time to set up and run your first Fortipii scan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-primary py-16 relative lg:py-18 xl:py-22">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-xs tracking-[0.12em] mb-2 text-accent font-bold uppercase">Get started today</p>
                            <h2 className="text-white text-2xl font-bold tracking-[-0.3px] family-normal mb-2 lg:text-3xl xl:text-[40px]">Your clients' sensitive data deserves real protection</h2>
                            <p className="text-white/45 text-nase leading-6 max-w-100 mx-auto mb-3 lg:leading-7 lg:text-lg lg:mb-5 xl:mb-10">Download FortipiiSID free — or claim the early-bird Scan & Protect for $299 while spots last.</p>
                            <em className="text-sm font-semibold text-accent">"So safe, you'll forget it's working."</em>
                            <div className="flex gap-2 mt-7 justify-center flex-wrap items-center lg:gap-4">
                                <a href="#" className="text-base font-bold bg-pop text-primary py-3 px-5 rounded-full family-normal hover:bg-[#cbee5c] lg:px-10">Get the one-time scan — $299</a>
                                <a href="#" className="text-base font-semibold border-[2px] border-white/35 text-white py-3 px-5 rounded-full hover:text-accent hover:border-accent lg:px-10">Download free scan tool</a>
                            </div>
                        </div>
                        <div className="w-125 h-75 bg-[radial-gradient(ellipse,rgba(94,209,192,0.12)_0%,transparent_70%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index;