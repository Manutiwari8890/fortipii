import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../Context/LoadingContext";
import { motion } from "framer-motion";

function Contact(){
    const [showVideo, setShowVideo] = useState(false)
    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const fadeLeft = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0 }
    };

    const [data, setData] = useState({first_name : "", last_name : "", email : "", practice_name : "", practice_type : "", number_of_staff : "", number_of_clients : "", annual_client : "", question : ""});

    // useEffect(() => {
    //     const getPageContent = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}page/contact`);
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

    return (
        <>
            <section className="bg-secondary py-16 relative mt-17 lg:py-18 lg:mt-20 xl:py-22 xl:mt-17">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-base tracking-[0.12em] mb-2 text-primary font-medium uppercase lg:text-lg">Get in touch</p>
                            <h2 className="text-primary font-bold tracking-[-0.3px] family-normal mb-2 text-3xl leading-10 lg:mb-4 lg:leading-16 lg:text-4xl lg:leading-12 xl:leading-16 xl:text-[54px]">Let's talk about protecting your clients</h2>
                            <p className="text-primary text-lg leading-6 max-w-120 mx-auto lg:leding-7 lg:text-xl">Whether you want to request early access, book a demo, or ask a question — we'd love to hear from you.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-20">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="grid grid-cols-1 items-start gap-8 xl:gap-12 lg:grid-cols-2">
                        <div className={`bg-white border border-gray p-8 rounded-2xl`}>
                            <h4 className="text-primary text-xl font-bold family-normal mb-3">Request early access</h4>
                            <p className="text-base family-normal text-slate mb-7">Tell us a little about your practice and we'll be in touch within one business day.</p>
                            <form>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">First Name</label>
                                        <input type="text" if="first_name" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="First name" value={data?.first_name} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Last Name</label>
                                        <input type="text" if="last_name" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Last name" value={data?.last_name} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))} />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="email" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Work email</label>
                                        <input type="email" id="email" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="you@yourfirm.com" value={data?.email} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="practice_name" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Practice name</label>
                                        <input type="text" id="practice_name" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Your firm name" value={data?.practice_name} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="practice_type" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Type of practice</label>
                                        <select id="practice_type" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" name="practice_type" defaultValue={data?.practice_type} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))}>
                                            <option value="">Select ...</option>
                                            <option value="tax">Tax</option>
                                            <option value="accounting">Accounting</option>
                                            <option value="financial advisory">Financial advisory</option>
                                            <option value="legal">Legal</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number_of_staff" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Number of staff</label>
                                        <select id="number_of_staff" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" name="number_of_staff" defaultValue={data?.number_of_staff} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))}>
                                            <option value="">Select ...</option>
                                            <option value="solo">Solo</option>
                                            <option value="2-10">2–10</option>
                                            <option value="11-50">11–50</option>
                                            <option value="50+">50+</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="number_of_clients" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Number of clients</label>
                                        <select id="number_of_clients" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" name="number_of_clients" defaultValue={data?.number_of_clients} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))}>
                                            <option value="">Select ...</option>
                                            <option value="Under 100">Under 100</option>
                                            <option value="100-500">100–500</option>
                                            <option value="500-2500">500-2500</option>
                                            <option value="2500+">2500+</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="annual_client" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Annual {(data?.practice_type == "" || data?.practice_type == "tax") ? "tax returns filed" : "client engagements"} </label>
                                        <select id="annual_client" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" value={data?.annual_client} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))}>
                                            <option value="">Select ...</option>
                                            <option value="Under 100">Under 100</option>
                                            <option value="100-500">100-500</option>
                                            <option value="500-2500">500-2500</option>
                                            <option value="2500+">2500+</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="question" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Any questions for us? (optional)</label>
                                        <textarea id="question" rows="3" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Tell us what's on your mind..."  defaultValue={data?.question} onChange={(e) => setData(prev => ({...data, [e.target.name] : e.target.value}))}>
                                            
                                        </textarea>
                                    </div>
                                </div>
                                <button type="button" onClick={() => {console.log(data)}} className="text-base font-bold bg-primary text-white w-full py-3 px-10 rounded-full family-normal hover:-translate-y-1 hover:bg-primary/90 mt-4 cursor-pointer">Send request →</button>
                            </form>
                            <p className="mt-4 font-semibold family-normal text-muted text-sm text-center">We'll respond within one business day. No spam, ever.</p>
                        </div>
                        <div className="text-left">
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6 mx-auto"><rect x="2" y="4" width="18" height="14" rx="2.5" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><path d="M2 8l9 6 9-6" stroke="#5ED1C0" strokeWidth="1.3" strokeLinecap="round" fill="none"></path></svg>
                                </div>
                                <div className="text-left">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Email us</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>For general inquiries and partnership opportunities.</p>
                                    <a href="mailto:hello@fortipii.com" className="text-sm text-teal font-semibold">hello@fortipii.com</a>
                                </div>
                            </motion.div>
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6 mx-auto"><circle cx="11" cy="11" r="8" stroke="#35A897" strokeWidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Watch the demo</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>See FortipiiSID in action — the full scan, scoring, and protection workflow.</p>
                                    <button className="text-sm text-teal font-semibold cursor-pointer" onClick={() => setShowVideo(prev => !prev)}>Watch now →</button>
                                </div>
                            </motion.div>
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6 mx-auto"><path d="M11 2L3 5.5V11c0 4.2 3.2 8 8 9 4.8-1 8-4.8 8-9V5.5L11 2Z" stroke="#35A897" strokeWidth="1.5" fill="none"></path><path d="M8 11l2.5 2.5 4-5" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Security questions</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>Questions about how Fortipii protects your data or our security practices.</p>
                                    <a href="mailto:security@fortipii.com" className="text-sm text-teal font-semibold">security@fortipii.com</a>
                                </div>
                            </motion.div>
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" className="w-6 h-6 mx-auto"><rect x="4" y="2" width="14" height="18" rx="2.5" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><path d="M8 7h6M8 11h6M8 15h4" stroke="#35A897" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Press & media</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>For press inquiries and media kit requests.</p>
                                    <a href="mailto:press@fortipii.com" className="text-sm text-teal font-semibold">press@fortipii.com</a>
                                </div>
                            </motion.div>
                            <motion.div 
                                variants={fadeLeft}
                                initial="hidden"
                                viewport={{ once: true }}
                                whileInView="visible"
                                transition={{ duration: 1 }}
                                className="bg-primary p-8 rounded-3xl">
                                <div className="flex gap-5 items-center pb-4 mb-2">
                                    <div className="bg-teal rounded-full w-10 h-10 text-lg family-normal rounded-full text-center content-center font-bold text-white">C</div>
                                    <div className="text-left flex-1">
                                        <h4 className="text-white text-sm font-bold family-normal mb-2">CPA Firm Owner</h4>
                                        <p className="text-muted text-xs font-semibold">Small CPA Practice, Early Access User</p>
                                    </div>
                                </div>
                                <p className="text-base text-white/80 leading-7">"With all the bad actors out there, prioritizing client data safety is an essential part of any CPA firm. Fortipii brought to my attention that, even after implementing strict access controls and software securities, substantial information was left behind unencrypted on various drives in the office. Fortipii simply and efficiently protected the sensitive information and kept my files organized so there was no disruption in productivity."</p>
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
        </>
    )
}

export default Contact;