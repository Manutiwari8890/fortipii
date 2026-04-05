import { useState } from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Pricing(){

    const [openFaq, setOpenFaq] = useState(0);
    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <section className="bg-secondary py-16 relative mt-17 lg:mt-20 xl:mt-17">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-lg tracking-[0.12em] mb-2 text-primary font-medium uppercase">Pricing</p>
                            <h2 className="text-primary text-3xl font-bold tracking-[-0.3px] family-normal mb-4 lg:text-4xl xl:leading-16 xl:text-[54px]">Two ways to protect your clients' sensitive data</h2>
                            <p className="text-primary max-w-120 mx-auto text-lg leading-6 xl:leading-7 xl:text-xl">Start free with the FortipiiSID scan tool, then choose the protection level that fits your practice — with an exclusive early-bird rate for the first 100 firms.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center mb-8">
                        <div className="bg-primary rounded-2xl px-4 py-4 flex gap-3 justify-between items-center lg:rounded-3xl lg:gap-4 lg:px-6 lg:py-6 xl:py-8 xl:px-6">
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-accent content-center">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" className="w-3 h-3 text-white mx-auto"><path d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z" fill="currentColor" /></svg>
                            </div>
                            <div className="text-left w-full  flex-1">
                                <h4 className="text-white text-sm font-bold mb-1">Early-bird offer — first 100 firms only</h4>
                                <p className="text-sm text-white/55 font-semibold">Get the one-time Scan & Protect for <span className="text-accent">$299</span> instead of $399. Limited availability — save $100 when you sign up today.</p>
                            </div>
                            <Link to="/contact" className="bg-accent text-sm relative font-bold text-primary py-2.25 px-5 rounded-full hidden xl:block 2xl:block hover:bg-teal hover:text-white">Claim early-bird rate →</Link>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
                            <motion.div 
                                variants={fadeTop}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-white border border-gray px-5 py-7 rounded-3xl border-t-3 border-t-accent flex flex-col justify-between">
                                <div className="text-up">
                                    <p className="text-[11px] text-teal uppercase font-bold family-normal mb-3 tracking-[0.1em]">FortipiiSID download</p>
                                    <h3 className="text-primary text-xl font-bold family-normal mb-2">Free scan tool</h3>
                                    <p className="text-sm text-slate leading-5.5 mb-3">Download the FortipiiSID app and run a complete scan of your files and drives to see exactly what sensitive client data is exposed. No purchase needed to get started.</p>
                                    <h4 className="text-primary family-normal text-[44px] font-bold">Free</h4>
                                    <p className="text-sm text-teal mt-1 mb-5 font-semibold">No account required. Download and run instantly.</p>
                                    <hr className="border-gray mb-5" />
                                    <ul className="p-0 mb-7">
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Full scan — files, drives, network shares
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            FortiPIIScore risk report
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Sensitive data breakdown by type
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Exportable assessment summary
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            No protection or monitoring
                                        </li>
                                    </ul>
                                </div>
                                
                                <Link to="/contact" className="text-[15px] font-bold bg-white text-primary border-gray border-2 py-4 px-5 inline-block text-center w-full rounded-full hover:border-accent hover:text-teal">Download FortipiiSID →</Link>
                            </motion.div>
                            <motion.div 
                                variants={fadeTop}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-primary px-5 py-7 rounded-3xl border-2 border-accent relative flex justify-between flex-col">
                                <div className="text-up">
                                    <p className="absolute w-max py-1 px-3 text-primary bg-accent -top-3 rounded-full text-xs font-bold left-1/2 -translate-x-1/2">Most popular</p>
                                    <p className="text-[11px] text-accent uppercase font-bold family-normal mb-5 tracking-[0.1em]">One-time scan & protect</p>
                                    <h3 className="text-white text-2xl font-bold family-normal mb-4">Find it. Fix it. Done.</h3>
                                    <p className="text-sm text-white/50 leading-5.5 mb-5">Full scan plus smart protection of all sensitive client data found. A one-time clean-up with no ongoing commitment.</p>
                                    <p className="text-sm text-white/50">as low as</p>
                                    <h4 className="text-white family-normal text-[44px] font-bold">$299 <span className="text-base text-white/50 font-semibold">one time</span></h4>
                                    <p className="text-sm text-white/55 mt-1 mb-5 font-semibold"><del>$399</del> <span className="bg-teal/20 text-accent py-1 px-3 rounded-full text-xs">First 100 firms</span></p>
                                    <hr className="border-white/10 mb-5" />
                                    <ul className="p-0 mb-7">
                                        <li className="flex gap-3 text-sm text-white/65 items-center font-semibold mb-4">
                                            <div className="bg-accent/12 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Everything in Free scan
                                        </li>
                                        <li className="flex gap-3 text-sm text-white/65 items-center font-semibold mb-4">
                                            <div className="bg-accent/12 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Smart protection of all sensitive data found
                                        </li>
                                        <li className="flex gap-3 text-sm text-white/65 items-center font-semibold mb-4">
                                            <div className="bg-accent/12 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Originals secured in encrypted vault
                                        </li>
                                        <li className="flex gap-3 text-sm text-white/65 items-center font-semibold mb-4">
                                            <div className="bg-accent/12 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Compliance summary PDF report
                                        </li>
                                        <li className="flex gap-3 text-sm text-white/65 items-center font-semibold mb-4">
                                            <div className="bg-accent/12 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            30-day results access
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="text-[15px] font-bold bg-accent text-primary py-4 px-5 inline-block text-center w-full rounded-full hover:bg-teal hover:text-white"> Claim early-bird — $299 →</Link>
                            </motion.div>
                            <motion.div 
                                variants={fadeTop}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-white border border-gray px-5 py-7 rounded-3xl border-t-3 border-t-accent flex flex-col justify-between">
                                <div className="text-up">
                                    <p className="text-[11px] text-teal uppercase font-bold family-normal mb-3 tracking-[0.1em]">Guardian</p>
                                    <h3 className="text-primary text-xl font-bold family-normal mb-2">Ongoing <br /> protection</h3>
                                    <p className="text-sm text-slate leading-5.5 mb-3">Free scan included, plus continuous monitoring and automatic protection of sensitive client data as new files and emails arrive.</p>
                                    <p className="text-sm text-muted font-bold">starting at</p>
                                    <h4 className="text-primary family-normal text-[44px] font-bold">$39 <span className="text-sm text-muted font-bold">.99/mo</span></h4>
                                    <p className="text-sm text-teal mt-1 mb-5 font-semibold">Includes FortipiiSID free scan. Cancel anytime.</p>
                                    <hr className="border-gray mb-5" />
                                    <ul className="p-0 mb-7">
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Free FortipiiSID scan included
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Continuous sensitive data monitoring
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Automatic protection of private client data
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Monthly FortiPIIScore updates
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            GLBA & IRS Pub 4557 ready
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="text-[15px] font-bold bg-white text-primary border-gray border-2 py-4 px-5 inline-block text-center w-full rounded-full hover:border-accent hover:text-teal">Start with Guardian →</Link>
                            </motion.div>
                            <motion.div 
                                variants={fadeTop}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-white border border-gray px-5 py-7 rounded-3xl rounded-4xl border-t-3 border-t-accent flex flex-col justify-between">
                                <div className="text-up">
                                    <p className="text-[11px] text-teal uppercase font-bold family-normal mb-3 tracking-[0.1em]">Fortress</p>
                                    <h3 className="text-primary text-xl font-bold family-normal mb-2">Whole-office protection</h3>
                                    <p className="text-sm text-slate leading-5.5 mb-3">Everything in Guardian plus email monitoring, WISP documentation, and full compliance reporting — protection for your entire practice.</p>
                                    <p className="text-sm text-muted font-bold">starting at</p>
                                    <h4 className="text-primary family-normal text-[44px] font-bold">$59 <span className="text-sm text-muted font-bold">.99/mo</span></h4>
                                    <p className="text-sm text-teal mt-1 mb-5 font-semibold">Includes FortipiiSID free scan. Cancel anytime.</p>
                                    <hr className="border-gray mb-5" />
                                    <ul className="p-0 mb-7">
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Everything in Guardian
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Email & attachment monitoring
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            WISP documentation — auto-updated
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            IRS Pub 4557 compliance audit pack
                                        </li>
                                        <li className="flex gap-3 text-sm text-slate items-center font-semibold mb-4">
                                            <div className="bg-accent/20 p-1 rounded-full">
                                                <svg viewBox="0 0 9 9" fill="none" className="w-3 h-3"><path d="M1.5 4.5l2 2 4-4" stroke="#5ED1C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                            </div>
                                            Priority support
                                        </li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="text-[15px] font-bold bg-white text-primary border-gray border-2 py-4 px-5 inline-block text-center w-full rounded-full hover:border-accent hover:text-teal">Start with Fortress →</Link>
                            </motion.div>
                        </div>
                        <div className="max-w-full mx-auto lg:max-w-4/5">
                            <div className="bg-light px-4 py-3 flex gap-3 mt-8 mb-4 rounded-2xl border border-teal/40">
                                <svg viewBox="0 0 18 18" fill="none" className="mt-1 w-8 h-8"><circle cx="9" cy="9" r="8" fill="#FFFFFF"></circle><path d="M9 5v4l2.5 2.5" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                <p className="text-sm  flex-1 family-inter text-primary font-medium"><strong>Already did the one-time scan?</strong> Your $299 is credited toward your first three months of ongoing protection if you upgrade within 30 days.</p>
                            </div>
                            <div className="bg-white px-4 py-4 flex items-start justify-between gap-3 rounded-2xl border border-gray flex-col lg:items-center lg:flex-row">
                                <div className="text-left flex-1">
                                    <p className="text-base text-primary font-semibold mb-1">Enterprise & multi-firm</p>
                                    <p className="text-sm text-muted family-inter">Custom user counts, SSO, volume pricing, dedicated onboarding, SLA guarantees.</p>
                                </div>
                                <Link to="/contact" className="bg-light text-teal border-[1.5px] border-accent/50 px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-accent hover:text-primary">Contact us for enterprise pricing →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center mb-5 xl:mb-10">
                        <p className="text-base text-slate uppercase tracking-[0.12em] lg:text-lg">Compare plans</p>
                        <h2 className="text-primary text-3xl family-normal mt-2 mb-2 lg:mb-3 font-bold lg:text-4xl xl:text-[40px]">What's included</h2>
                    </div>
                    <div className="overflow-auto lg:overflow-hidden">
                        <table className="w-full mx-auto lg:w-9/10 xl:w-7/8 overflow-auto">
                            <thead>
                                <tr>
                                    <th className="p-2 lg:px-3 text-sm text-primary text-left content-start leading-7 border-b-2 border-gray ">Feature</th>
                                    <th className="p-2 lg:px-3 text-sm text-primary text-left content-start leading-7 border-b-2 border-gray ">FortipiiSID <br /><span className="text-xs family-inter font-medium text-muted">Free</span></th>
                                    <th className="p-2 lg:px-3 text-sm text-primary text-left content-start leading-7 border-b-2 border-gray ">Scan & Protectbr <br/> <span className="text-xs family-inter font-medium text-muted">$299 early bird</span></th>
                                    <th className="p-2 lg:px-3 text-sm text-primary text-left content-start leading-7 border-b-2 border-gray ">Guardian<br/> <span className="text-xs family-inter font-medium text-muted">$39.99/mo</span></th>
                                    <th className="p-2 lg:px-3 text-sm text-primary text-left content-start leading-7 border-b-2 border-gray ">Fortress<br/> <span className="text-xs family-inter font-medium text-muted">$59.99/mo</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray w-max">Folder & drive scanning</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray w-nax">✓ Continuous</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ Continuous</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">FortiPIIScore risk report</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ One-time</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ One-time</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ Monthly</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ Monthly</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Sensitive data protection</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ One-time</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ Automatic</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ Automatic</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Encrypted vault for originals</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Email & attachment monitoring</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">WISP documentation</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓ Auto-updated</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">IRS Pub 4557 audit pack</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">—</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Compliance summary export</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">✓</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Results access</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Report only</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">30 days</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Unlimited</td>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="text-sm text-primary font-semibold py-4 px-3 border-b border-gray">Price</td>
                                    <td className="text-sm text-primary font-bold family-normal py-4 px-3 border-b border-gray">Free</td>
                                    <td className="text-sm text-primary font-bold family-normal py-4 px-3 border-b border-gray"><span className="text-teal">$299</span> <del>$399</del></td>
                                    <td className="text-sm text-primary font-bold family-normal py-4 px-3 border-b border-gray">$39.99/mo</td>
                                    <td className="text-sm text-primary font-bold family-normal py-4 px-3 border-b border-gray">$59.99/mo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center lg:mb-5 xl:mb-10">
                        <p className="text-lg text-slate uppercase tracking-[0.12em]">FAQ</p>
                        <h2 className="text-primary family-normal mt-2 mb-3 font-bold text-3xl leading-10 xl:leading-13 xl:text-[40px]">Common questions</h2>
                    </div>
                    <div className="max-w-full mx-auto lg:max-w-2/3">
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item mb-3 border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base font-bold text-left family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(0)}>
                                Do you store my clients' sensitive data on your servers?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 0 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>No — never. Fortipii processes everything locally on your machine. Your clients' sensitive data never leaves your environment and is never transmitted to or stored on Fortipii servers. This is a core design principle, not just a policy.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item mb-3 border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base font-bold text-left family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(1)}>
                                How is the one-time scan different from ongoing protection?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 1 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>The one-time scan is a single deep sweep of your existing files and drives. It finds exposed sensitive data, protects it, and gives you a FortiPIIScore report. It's a great starting point. Ongoing protection adds continuous monitoring — so new files, emails, and documents are protected automatically as they arrive, every day.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item mb-3 border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base text-left font-bold family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(2)}>
                                Can I apply my one-time scan fee toward a subscription?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 2 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>Yes. If you upgrade to an ongoing protection plan within 30 days of your one-time scan, your scan fee is credited toward your first months of the subscription. We want the scan to feel like a natural on-ramp, not a sunk cost.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item mb-3 border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base text-left font-bold family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(3)}>
                                Does Fortipii work on Windows and Mac?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 3 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>Yes. Fortipii runs on both Windows and Mac. No IT support or technical expertise is required — the average setup time is under 4 minutes.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item mb-3 border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base text-left font-bold family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(4)}>
                                What's the difference between Guardian and Fortress?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 4 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>Guardian ($39.99/mo) provides continuous file and drive monitoring with automatic protection of sensitive client data. Fortress ($59.99/mo) adds email and attachment monitoring, automated WISP documentation, and the full IRS Pub 4557 compliance audit pack — everything a tax professional needs for complete practice protection.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item mb-3 border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base text-left font-bold family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(5)}>
                                What is the early-bird offer on the one-time scan?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 5 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>The first 100 firms to sign up get the one-time Scan & Protect for $299 — a saving of $100 off the standard $399 price. Once the first 100 spots are taken, the price returns to $399. Guardian and Fortress subscriptions are unaffected by this offer.</p>
                        </motion.div>
                        <motion.div 
                            variants={fadeTop}
                            initial="hidden"
                            viewport={{ once: true }}
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            className="accordion-item border-b border-gray py-2 lg:py-4">
                            <button className="flex justify-between text-base text-left font-bold family-normal text-navy w-full cursor-pointer hover:text-teal" onClick={() => setOpenFaq(6)}>
                                Do I need a WISP?
                                <div className="w-6 h-6 bg-secondary border content-center border-gray rounded-full text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} xmlSpace="preserve" className="w-2.5 h-2.5 mx-auto">
                                        <g>
                                            <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" fill="currentColor" />
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <p className={`text-sm text-slate family-inter leading-6 ${openFaq == 6 ? "mt-4 max-h-max" : "max-h-0"} overflow-hidden`}>If you're a tax professional, yes. The IRS requires all tax preparers to have a Written Information Security Plan (WISP) under Publication 4557. Fortipii generates and maintains your WISP automatically as part of ongoing protection plans.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}