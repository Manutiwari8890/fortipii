import { useEffect, useState, useRef, useContext } from "react";
import IconCard from "../Componments/IconCard";
import { LoadingContext } from "../Context/LoadingContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Platform() {
    const [showVideo, setShowVideo] = useState(false)
    const [content, setContent] = useState();
    const [faqs, setFaqs] = useState([]);
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const sectionRef = useRef([null, null, null, null, null])

    const scrollTo = (index) => {
        sectionRef.current[index].scrollIntoView({
            behavior: "smooth"
        });
    };

    // useEffect(() => {
    //     const getPageContent = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}page/services`);
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

    // useEffect(() => {
    //     const getPrices = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}prices`);
    //             const result = await response.json();

    //             if (!result?.status) {
    //                 throw new Error(result?.message);
    //             }
    //             const updated = result?.data?.sort((pre, next) => pre?.position - next?.position)
    //             setPriceCard(updated)
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             stopLoading();
    //         }
    //     };

    //     getPrices();
    // }, []);

    
    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0 }
    };

    const slideRight = {
        hidden: { x: -150 },
        visible: { x: 0 }
    };

    
    const container = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <section className="bg-primary py-16 relative mt-17 lg:mt-20 lg:py-18 xl:py-20 xl:mt-17">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="relative z-2">
                        <div className="grid grid-cols-7 gap-8 lg:gap-18">
                            <div className="col-span-7 text-left lg:col-span-4">
                                <p className="text-base tracking-[0.12em] mb-2 text-accent font-medium uppercase lg:text-lg">The platform</p>
                                <h2 className="text-white text-3xl font-bold tracking-[-0.3px] family-normal mt-2 mb-4 leading-10 lg:text-4xl lg:mt-4 lg:leading-12 xl:mt-6 xl:mb-4 xl:text-[54px] xl:leading-16">One solution, end to end</h2>
                                <p className="text-white/55 text-base w-full leading-6 lg:leading-7 lg:text-lg">From your first scan to continuous daily protection — Fortipii covers every step of the sensitive client data lifecycle.</p>
                                <div className="flex mt-3 items-center gap-4 lg:mt-5">
                                    <Link to="/pricing" className="text-sm font-bold bg-accent text-primary py-3 px-5 rounded-full family-normal hover:bg-teal lg:text-base lg:px-10">See pricing — from free →</Link>
                                    <button className="text-sm font-semibold border-[2px] border-white/35 text-white py-3 px-5 rounded-full hover:text-accent hover:border-accent lg:text-base lg:px-10 cursor-pointer" onClick={() => setShowVideo(prev => !prev)}>Watch the demo</button>
                                </div>
                            </div>
                            <div className="col-span-7 lg:col-span-3">
                                <p className="text-accent text-xs font-semibold mb-5 uppercase tracking-[0.1em]">Live scan results</p>
                                <motion.ul
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                >
                                    <motion.li
                                        variants={fadeLeft}
                                        transition={{ duration: 0.5 }}
                                        className="flex justify-between items-center bg-white/5 px-5 py-3 border border-white/8 rounded-xl mb-3"
                                    >
                                        <span className="text-sm text-white/80 family-inter">2024_Tax_Return_Johnson.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Protected</span>
                                    </motion.li>
                                    <motion.li
                                        variants={fadeLeft}
                                        transition={{ duration: 0.5 }}
                                        className="flex justify-between items-center bg-white/5 px-5 py-3 border border-white/8 rounded-xl mb-3"
                                    >
                                        <span className="text-sm text-white/80 family-inter">Client_W2_Bundle_2024.zip</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Protected</span>
                                    </motion.li>
                                    <motion.li
                                        variants={fadeLeft}
                                        transition={{ duration: 0.5 }}
                                        className="flex justify-between items-center bg-white/5 px-5 py-3 border border-white/8 rounded-xl mb-3"
                                    >
                                        <span className="text-sm text-white/80 family-inter">SSN_spreadsheet_backup.xlsx</span>
                                        <span className="bg-orange-300/20 text-orange-400 text-xs family-normal font-semibold px-3 py-1 rounded-full">Flagged</span>
                                    </motion.li>
                                    <motion.li
                                        variants={fadeLeft}
                                        transition={{ duration: 0.5 }}
                                        className="flex justify-between items-center bg-white/5 px-5 py-3 border border-white/8 rounded-xl mb-3"
                                    >
                                        <span className="text-sm text-white/80 family-inter">1099_Forms_All_Clients.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Protected</span>
                                    </motion.li>
                                    <motion.li
                                        variants={fadeLeft}
                                        transition={{ duration: 0.5 }}
                                        className="flex justify-between items-center bg-white/5 px-5 py-3 border border-white/8 rounded-xl"
                                    >
                                        <span className="text-sm text-white/80 family-inter">New_Client_Intake_Form.docx</span>
                                        <span className="bg-white/20 text-white/80 text-xs family-normal font-semibold px-3 py-1 rounded-full">Scanning...</span>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-125 h-75 bg-[radial-gradient(ellipse,rgba(94,209,192,0.12)_0%,transparent_70%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </section>
            {showVideo &&
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999] backdrop-blur-[2px]" onClick={() => setShowVideo(false)}>
                    <div className="bg-secondary border border-gray-200 shadow-xs p-4 w-9/10 rounded-3xl lg:w-2/3 xl:w-1/2" onClick={(e) => e.stopPropagation()}>
                        <iframe className="w-full h-50 rounded-2xl lg:h-80" src="https://www.youtube.com/embed/QqVdIt5sPOo?si=WzGg8xZAgCURNG1H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div> 
                </div>
            }
            <section className="bg-[#FAFAFA] py-4 border-t border-gray">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="overflow-auto lg:overflow-hidden">
                        <div className="flex gap-1  w-max lg:gap-2">
                            <button className="text-sm font-semibold text-primary border-2 border-gray rounded-full px-6 py-2.5 cursor-pointer bg-primary text-white border-primary" onClick={() => scrollTo(0)}>Scan & Assess</button>
                            <button className="text-sm font-semibold text-primary border-2 border-gray rounded-full px-6 py-2.5 cursor-pointer hover:bg-primary hover:text-white hover:border-primary" onClick={() => scrollTo(1)}>FortiPIIScore</button>
                            <button className="text-sm font-semibold text-primary border-2 border-gray rounded-full px-6 py-2.5 cursor-pointer hover:bg-primary hover:text-white hover:border-primary" onClick={() => scrollTo(2)}>Smart Protection</button>
                            <button className="text-sm font-semibold text-primary border-2 border-gray rounded-full px-6 py-2.5 cursor-pointer hover:bg-primary hover:text-white hover:border-primary" onClick={() => scrollTo(3)}>Email Monitoring</button>
                            <button className="text-sm font-semibold text-primary border-2 border-gray rounded-full px-6 py-2.5 cursor-pointer hover:bg-primary hover:text-white hover:border-primary" onClick={() => scrollTo(4)}>WISP & Compliance</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-22" ref={(el) => (sectionRef.current[0] = el)}>
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-15">
                        <div className="text-left">
                            <p className="text-base tracking-[0.12em] mb-2 text-primary font-medium uppercase">01 — Scan & Assess</p>
                            <h2 className="text-primary font-bold tracking-[-0.3px] family-normal mt-3 mb-2 leading-9 text-3xl lg:mb-2 lg:mt-4 xl:mt-6 xl:mb-4 xl:leading-11 xl:text-4xl">Find every piece of exposed sensitive client data</h2>
                            <p className="text-primary/90 text-base leading-7 mb-2 lg:leading-6 lg:mb-2 xl:mb-4 xl:leading-7">Most tax professionals don't know how much sensitive client data is sitting unprotected across their drives and folders. Fortipii finds all of it — quickly and comprehensively.</p>
                            <p className="text-primary/90 text-base leading-7 lg:leading-6 xl:leading-7">Our scanner covers every location where client data typically hides: local desktop folders, mapped network drives, OneDrive and Google Drive sync folders, and shared office drives.</p>
                            <ul className="mt-6 mb-7">
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Scans PDFs, Word docs, Excel files, images, and more
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Detects SSNs, DOBs, TINs, account numbers, and more
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Works across Windows and Mac, local and cloud drives
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Average setup time: under 4 minutes
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    No data leaves your environment during scanning
                                </li>
                            </ul>
                            <Link to="/pricing" className="text-base font-bold bg-primary text-white py-3 px-10 rounded-full family-normal inline-block hover:-translate-y-1">Start with a one-time scan</Link>
                        </div>
                        <div className="relative">
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-primary p-5 rounded-3xl lg:p-8">
                                <p className="text-xs text-accent family-normal uppercase font-bold tracking-[0.1em] mb-6">Scan in progress — 847 files checked</p>
                                <ul className="border-b border-gray/20 pb-5">
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">Johnson_2024_1040.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">3 SSNs protected</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">Client_list_backup.xlsx</span>
                                        <span className="bg-orange-300/20 text-orange-400 text-xs family-normal font-semibold px-3 py-1 rounded-full">12 DOBs flagged</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">W2_Bundle_March.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">8 TINs protected</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">Bank_stmts_folder/</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Protected</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">Intake_forms_2024/</span>
                                        <span className="bg-white/20 text-white/80 text-xs family-normal font-semibold px-3 py-1 rounded-full">Scanning...</span>
                                    </li>
                                </ul>
                                <div className="item mt-5">
                                    <div className="flex justify-between mb-3">
                                        <p className="text-xs text-white/55 font-semibold">Scan progress</p>
                                        <p className="text-xs text-accent font-semibold">73%</p>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                        <motion.div
                                            variants={slideRight}
                                            initial="hidden"
                                            whileInView="visible"
                                            transition={{ duration: 1}}
                                            viewport={{ once: true }}
                                            className="bg-accent rounded-full h-full w-[73%]">
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-16 border-t-2 border-gray lg:py-18 xl:py-20" ref={(el) => (sectionRef.current[1] = el)}>
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-15">
                        <div className="relative">
                            <motion.div 
                                variants={fadeRight}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-primary rounded-3xl order-last lg:rounded-4xl lg:order-first">
                                <div className="relative overflow-hidden p-5 lg:p-8">
                                    <p className="text-xs text-accent tracking-[0.12em] uppercase font-bold mb-2 lg:mb-5">FortiPIIScore · Your Practice</p>
                                    <div className="text-5xl font-bold text-white items-center flex gap-4">
                                        <p className="family-normal ">84</p> 
                                        <div className="text-left">
                                            <span className="bg-accent px-4 py-1 text-xs rounded-full text-primary font-bold">Protected</span>
                                            <p className="text-xs text-white/45 mt-2 mb-6 font-bold">Up from 61 last month</p>
                                        </div>
                                    </div>
                                    <div className="item mb-4">
                                        <div className="flex justify-between mb-2">
                                            <p className="text-xs text-white/55 font-semibold">Tax returns & W-2s</p>
                                            <p className="text-xs text-accent font-semibold">96%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1}}
                                                viewport={{ once: true }}
                                                className="bg-accent rounded-full h-full w-[96%]"></motion.div>
                                        </div>
                                    </div>
                                    <div className="item mb-4">
                                        <div className="flex justify-between mb-1.5">
                                            <p className="text-xs text-white/55 font-semibold">Email attachments</p>
                                            <p className="text-xs text-[#F5A742] font-semibold">71%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1}}
                                                viewport={{ once: true }}
                                                className="bg-[#F5A742] rounded-full h-full w-[71%]"></motion.div>
                                        </div>
                                    </div>
                                    <div className="item mb-5">
                                        <div className="flex justify-between mb-1.5">
                                            <p className="text-xs text-white/55 font-semibold">Shared drives</p>
                                            <p className="text-xs text-accent font-semibold">88%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1}}
                                                viewport={{ once: true }}
                                                className="bg-accent rounded-full h-full w-[88%]"></motion.div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="flex justify-between mb-1.5">
                                            <p className="text-xs text-white/55 font-semibold">Local desktop</p>
                                            <p className="text-xs text-accent font-semibold">92%</p>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full w-full overflow-hidden">
                                            <motion.div
                                                variants={slideRight}
                                                initial="hidden"
                                                whileInView="visible"
                                                transition={{ duration: 1}}
                                                viewport={{ once: true }}
                                                className="bg-accent rounded-full h-full w-[92%]"></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="text-left order-first lg:order-last">
                            <p className="text-base tracking-[0.12em] mb-2 text-primary font-medium uppercase">02 — FortiPIIScore</p>
                            <h2 className="text-primary font-bold tracking-[-0.3px] family-normal mt-3 mb-2 text-3xl leading-10 lg:mb-2 lg:mt-4 xl:mb-4 xl:mt-6 xl:leading-11 xl:text-4xl">Know your sensitive data risk — at a glance</h2>
                            <p className="text-primary/90 text-base leading-7 mb-2 lg:mb-4 lg:leading-6 xl:leading-7">FortiPIIScore gives you a single, actionable number that quantifies your practice's sensitive client data exposure across all locations. Updated monthly, it lets you track improvement over time.</p>
                            <p className="text-primary/90 text-base leading-7 lg:leading-6 xl:leading-7">No technical knowledge required. The score tells you where you stand, what's most at risk, and what to do next.</p>
                            <ul className="mt-6">
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    0–100 score based on exposure across files, drives, email
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Breakdown by data type — SSN, DOB, financial, medical
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Month-over-month trend tracking
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Exportable PDF report for compliance documentation
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Plain-English recommendations, not technical jargon
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t-2 border-gray lg:py-18 xl:py-22" ref={(el) => (sectionRef.current[2] = el)}>
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-15">
                        <div className="text-left">
                            <p className="text-base tracking-[0.12em] mb-2 text-primary font-medium uppercase">03 — Smart Protection</p>
                            <h2 className="text-primary font-bold tracking-[-0.3px] family-normal mt-3 mb-2 leading-10 text-3xl lg:mb-2 lg:mt-4 xl:mt-6 xl:mb-4 xl:text-4xp xl:leading-11">Protect sensitive data without disrupting your workflow</h2>
                            <p className="text-primary/90 text-base leading-7 mb-2 lg:leading-6 lg:mb-2 xl:mb-4 xl:leading-7">Once Fortipii finds sensitive client data, it protects it automatically — without you having to manually review and handle thousands of documents.</p>
                            <p className="text-primary/90 text-base leading-7 lg:leading-6 xl:leading-7">Protected copies are generated for your working files. Originals are moved to a secured vault. Your workflow stays exactly the same.</p>
                            <ul className="mt-6">
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Works on PDFs, Word docs, Excel files, and scanned images
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Preserves document layout and formatting
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Original files secured in a controlled local vault
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Vault access audited and logged
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Batch processing — thousands of files at once
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-primary px-5 py-5 rounded-3xl sticky top-20 lg:rounded-3xl lg:py-8 lg:px-8">
                                <p className="text-xs text-accent family-normal uppercase font-bold tracking-[0.1em] mb-6">Protection vault — 1,247 originals secured</p>
                                <ul>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">1040_Johnson_original.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Vault secured</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">W2_pack_2024_original.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Vault secured</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-3 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">Intake_forms_batch.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Vault secured</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-white/5 px-3 py-3 border border-white/8 rounded-xl mb-5 lg:px-5">
                                        <span className="text-sm text-white/80 family-inter">Bank_stmt_march.pdf</span>
                                        <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Vault secured</span>
                                    </li>
                                    <li className="flex justify-between items-center bg-accent/10 px-3 py-3 border border-accent/8 rounded-xl lg:px-5">
                                        <span className="text-sm text-accent family-inter leading-6">Working copies generated and placed in original locations. Originals moved to encrypted vault./</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-16 border-t-2 border-gray lg:py-18 xl:py-20" ref={(el) => (sectionRef.current[3] = el)}>
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-2 lg:gap-10 xl:gap-15">
                        <motion.div 
                            variants={fadeRight}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="bg-primary rounded-2xl relative px-5 py-5 lg:rounded-4xl lg:px-8 lg:py-5 order-last lg:order-first">
                            <p className="text-xs text-accent family-normal uppercase font-bold tracking-[0.1em] mb-6">Email monitoring — last 24 hours</p>
                            <ul>
                                <li className="flex justify-between items-center bg-white/5 py-3 border border-white/8 rounded-xl mb-3 gap-2 px-3 xl:px-5 xl:gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <div className="text-left flex-1">
                                        <p className="text-xs text-white/80 family-inter lg:text-sm">client@smithcpa.com → client@johnson.com</p>  
                                        <span className="text-xs text-white/60 family-inter">Re: Your 2024 tax return</span>                                  
                                    </div>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Safe</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 py-3 border border-white/8 rounded-xl mb-3 gap-2 px-3 xl:px-5 xl:gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#F5A742]"></div>
                                    <div className="text-left flex-1">
                                        <p className="text-xs text-white/80 family-inter lg:text-sm">admin@smithcpa.com → external@domain.com</p>  
                                        <span className="text-xs text-white/60 family-inter">Client list Q1 2024.xlsx [attachment]</span>                                  
                                    </div>
                                    <span className="bg-[#F5A742]/20 text-[#F5A742] text-xs family-normal font-semibold px-3 py-1 rounded-full">Flagged</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 py-3 border border-white/8 rounded-xl mb-3 gap-2 px-3 xl:px-5 xl:gap-4">
                                    <div className="w-2 h-2 rounded-full bg-[#E85D5D]"></div>
                                    <div className="text-left flex-1">
                                        <p className="text-xs text-white/80 family-inter lg:text-sm">info@smithcpa.com → unknown@mail.net</p>  
                                        <span className="text-xs text-white/60 family-inter">SSN data detected in body</span>                                  
                                    </div>
                                    <span className="bg-[#E85D5D]/20 text-[#E85D5D] text-xs family-normal font-semibold px-3 py-1 rounded-full">Blocked</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 py-3 border border-white/8 rounded-xl mb-3 gap-2 px-3 xl:px-5 xl:gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <div className="text-left flex-1">
                                        <p className="text-xs text-white/80 family-inter lg:text-sm">partner@irs.gov → admin@smithcpa.com</p>  
                                        <span className="text-xs text-white/60 family-inter">IRS notice — no sensitive data</span>                                  
                                    </div>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Safe</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-5 py-3 border border-white/8 rounded-xl gap-4 lg:gap-2 lg:px-3 xl:px-5 xl:gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                                    <div className="text-left flex-1">
                                        <p className="text-xs text-white/80 family-inter lg:text-sm">client@jones.com → info@smithcpa.com</p>  
                                        <span className="text-xs text-white/60 family-inter">Documents for review.pdf [attachment]</span>                                  
                                    </div>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Protected</span>
                                </li>
                            </ul>
                        </motion.div>
                        <div className="text-left">
                            <p className="text-base tracking-[0.12em] mb-2 text-primary font-medium uppercase">04 — Email Monitoring</p>
                            <h2 className="text-primary text-4xl font-bold tracking-[-0.3px] family-normal mt-6 mb-4 leading-11 lg:text-3xl lg:leading-10 lg:mb-2 lg:mt-4 xl:mt-6 xl:mb-4 xl:text-4xl xl:leading-11">Stop sensitive data from leaving through email</h2>
                            <p className="text-primary/90 text-base leading-7 mb-4 lg:leading-6 lg:mb-2 xl:mb-4 xl:leading-7">Email is the most common way sensitive client data gets accidentally exposed. A misdirected W-2, a client list attached to the wrong thread — it happens every day.</p>
                            <p className="text-primary/90 text-base leading-7 lg:leading-6 xl:leading-7">Fortipii monitors your mailboxes in real time, flagging and isolating emails that contain or attach sensitive client data before they become a problem.</p>
                            <ul className="mt-6 ">
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Connects to Office 365 and Gmail
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Monitors both inbound and outbound email
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Scans attachments — PDFs, Word docs, spreadsheets
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Flag, quarantine, or protect — your choice of response
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Included in Fortress plan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t-2 border-gray lg:py-18 xl:py-22" ref={(el) => (sectionRef.current[4] = el)}>
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-2 lg:gap-10 xl:gap-15">
                        <div className="text-left">
                            <p className="text-base tracking-[0.12em] mb-2 text-primary font-medium uppercase">05 — WISP & Compliance</p>
                            <h2 className="text-primary font-bold tracking-[-0.3px] family-normal mt-3 mb-2 text-3xl lg:leading-10 lg:mt-4 lg:mb-2 xl:mt-6 xl:mb-4 xl:text-4xl xl:leading-11">Stay audit-ready without doing any extra work</h2>
                            <p className="text-primary/90 text-base leading-7 mb-2 lg:leading-6 lg:mb-2 xl:mb-4 xl:leading-7">The IRS requires every tax professional to maintain a Written Information Security Plan (WISP). Most don't have one. Fortipii generates and maintains it automatically, updating it as your protection status changes.</p>
                            <p className="text-primary/90 text-base leading-7 lg:leading-6 xl:leading-7">If you're ever audited — by the IRS, FTC, or a state regulator — your documentation is ready to produce immediately.</p>
                            <ul className="mt-6 mb-7">
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Auto-generated WISP, updated monthly
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    IRS Pub 4557 compliance audit pack
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    GLBA and FTC Safeguards Rule documentation
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Exportable PDF reports for each compliance framework
                                </li>
                                <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                    <div className="bg-light border border-accent p-1 rounded-full">
                                        <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </div>
                                    Activity log with timestamps for all protection actions
                                </li>
                            </ul>
                            <Link to="/pricing" className="text-base font-bold bg-primary text-white py-3 px-10 rounded-full family-normal inline-block hover:-translate-y-1">Start with a one-time scan</Link>
                        </div>
                        <motion.div 
                            variants={fadeLeft}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="bg-primary rounded-2xl relative p-5 lg:rounded-4xl lg:p-8">
                            <p className="text-xs text-white family-normal uppercase font-bold tracking-[0.1em] mb-6 flex justify-between items-center">WISP — Your Practice <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Up to date</span></p>
                            <ul className="border-b border-gray/20 pb-2">
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">Risk assessment</p>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Complete</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">Data inventory</p>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Complete</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">Access controls</p>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Complete</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">Incident response plan</p>
                                    <span className="bg-[#F5A742]/20 text-[#F5A742] text-xs family-normal font-semibold px-3 py-1 rounded-full">In progress</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">Employee training log</p>
                                    <span className="bg-[#F5A742]/20 text-[#F5A742] text-xs family-normal font-semibold px-3 py-1 rounded-full">Needs update</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">Vendor management</p>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Complete</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">IRS Pub 4557 checklist</p>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Complete</span>
                                </li>
                                <li className="flex justify-between items-center bg-white/5 px-3 py-2 border border-white/8 rounded-lg mb-2 gap-4">
                                    <p className="text-sm text-white/80 family-inter">GLBA safeguards</p>
                                    <span className="bg-accent/20 text-accent text-xs family-normal font-semibold px-3 py-1 rounded-full">Complete</span>
                                </li>
                            </ul>
                            <div className="flex justify-between mt-4 items-center">
                                <p className="text-sm text-white/80 family-normal">Last updated: today</p>
                                <button className="text-primary text-xs family-normal font-semibold bg-accent px-3 py-1 rounded-full">Export PDF</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <section className="bg-primary py-16 relative lg:py-18 xl:py-22">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-xs tracking-[0.12em] mb-2 text-accent font-bold uppercase">Simple to start</p>
                            <h2 className="text-white font-bold tracking-[-0.3px] family-normal mb-3 text-2xl lg:text-3xl xl:text-[40px]">Ready to see what's exposed in your practice?</h2>
                            <p className="text-white/45 text-base leading-6 max-w-100 mx-auto mb-3 lg:text-lg lg:leading-7 lg:mb-5 ">Start free with FortipiiSID — or claim the early-bird Scan & Protect rate of $299 for the first 100 firms.</p>
                            <em className="text-sm font-semibold text-accent">"You handle your clients. We'll handle the rest."</em>
                            <div className="flex gap-2 mt-7 justify-center items-center flex-wrap lg:gap-4">
                                <Link to="/pricing" className="text-base font-bold bg-pop text-primary py-3 px-10 rounded-full family-normal hover:bg-[#cbee5c]">Claim early-bird — $299 →</Link>
                                <button className="text-base font-semibold border-[2px] border-white/35 text-white py-3 px-10 rounded-full hover:text-accent hover:border-accent cursor-pointer" onClick={() => setShowVideo(prev => !prev)}>Watch the demo</button>
                            </div>
                        </div>
                        <div className="w-125 h-75 bg-[radial-gradient(ellipse,rgba(94,209,192,0.12)_0%,transparent_70%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Platform;