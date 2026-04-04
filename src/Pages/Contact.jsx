import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../Context/LoadingContext";

function Contact(){

    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
                    <div className="grid grid-cols-1 items-start gap-8 xl:gap-14 lg:grid-cols-2">
                        <div className={`bg-white border border-gray p-8 rounded-2xl`}>
                            <h4 className="text-primary text-xl font-bold family-normal mb-3">Request early access</h4>
                            <p className="text-base family-normal text-slate mb-7">Tell us a little about your practice and we'll be in touch within one business day.</p>
                            <form>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="form-group">
                                        <label htmlFor="first_name" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">First Name</label>
                                        <input type="text" if="first_name" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Shanon" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Last Name</label>
                                        <input type="text" if="last_name" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Bond" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="email" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Work email</label>
                                        <input type="email" id="email" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="you@yourfirm.com" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="firm_name" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Practice name</label>
                                        <input type="text" if="firm_name" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Your firm name" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="describes" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">What best describes your practice?</label>
                                        <select id="describes" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent">
                                            <option value="">Select one...</option>
                                            <option>Solo tax preparer</option>
                                            <option>Small tax firm (2–10 staff)</option>
                                            <option>Mid-size firm (11–50 staff)</option>
                                            <option>CPA firm</option>
                                            <option>Financial advisor / planner</option>
                                            <option>Other financial services</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="interested" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">What are you most interested in?</label>
                                        <select id="interested" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent">
                                            <option value="">Select one...</option>
                                            <option>One-time Scan &amp; Protect — $299 early bird ($399 standard)</option>
                                            <option>Guardian — $39.99/month</option>
                                            <option>Fortress — $59.99/month</option>
                                            <option>FortipiiSID free download only</option>
                                            <option>Just exploring for now</option>
                                            <option>Enterprise / multi-firm pricing</option>
                                            <option>Watch the demo video</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="question" className="text-[12px] font-bold family-normal text-primary inline-block mb-1">Any questions for us? (optional)</label>
                                        <textarea id="question" rows="3" className="bg-[#fafafa] border-2 border-gray rounded-lg text-sm font-semibold py-2.5 px-3 w-full focus:border-accent" placeholder="Tell us what's on your mind...">
                                        </textarea>
                                    </div>
                                </div>
                                <button className="text-base font-bold bg-primary text-white w-full py-3 px-10 rounded-full family-normal hover:-translate-y-1 hover:bg-primary/90 mt-4 cursor-pointer">Send request →</button>
                            </form>
                            <p className="mt-4 font-semibold family-normal text-muted text-sm text-center">We'll respond within one business day. No spam, ever.</p>
                        </div>
                        <div className="text-left">
                            <div className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="2" y="4" width="18" height="14" rx="2.5" stroke="#5ED1C0" strokeWidth="1.5" fill="none"></rect><path d="M2 8l9 6 9-6" stroke="#5ED1C0" strokeWidth="1.3" strokeLinecap="round" fill="none"></path></svg>
                                </div>
                                <div className="text-left">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Email us</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>For general inquiries and partnership opportunities.</p>
                                    <a href="mailto:hello@fortipii.com" className="text-sm text-teal font-semibold">hello@fortipii.com</a>
                                </div>
                            </div>
                            <div className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><circle cx="11" cy="11" r="8" stroke="#35A897" strokeWidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Watch the demo</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>See FortipiiSID in action — the full scan, scoring, and protection workflow.</p>
                                    <a href="" className="text-sm text-teal font-semibold">Watch now →</a>
                                </div>
                            </div>
                            <div className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><path d="M11 2L3 5.5V11c0 4.2 3.2 8 8 9 4.8-1 8-4.8 8-9V5.5L11 2Z" stroke="#35A897" strokeWidth="1.5" fill="none"></path><path d="M8 11l2.5 2.5 4-5" stroke="#35A897" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Security questions</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>Questions about how Fortipii protects your data or our security practices.</p>
                                    <a href="mailto:security@fortipii.com" className="text-sm text-teal font-semibold">security@fortipii.com</a>
                                </div>
                            </div>
                            <div className={`bg-white border border-gray p-6 rounded-2xl flex gap-5 hover:border-accent hover:-translate-y-1 mb-6`}>
                                <div className={`icon bg-light w-12 h-12 rounded-xl content-center mb-4`}>
                                    <svg viewBox="0 0 22 22" fill="none" class="w-6 h-6 mx-auto"><rect x="4" y="2" width="14" height="18" rx="2.5" stroke="#35A897" strokeWidth="1.5" fill="none"></rect><path d="M8 7h6M8 11h6M8 15h4" stroke="#35A897" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                                </div>
                                <div className="text-left flex-1">
                                    <h4 className={`text-primary font-semibold family-normal mb-1`}>Press & media</h4>
                                    <p className={`text-slate text-sm family-normal leading-6`}>For press inquiries and media kit requests.</p>
                                    <a href="mailto:press@fortipii.com" className="text-sm text-teal font-semibold">press@fortipii.com</a>
                                </div>
                            </div>
                            <div className="bg-primary p-8 rounded-3xl">
                                <div className="flex gap-5 items-center pb-4 mb-2">
                                    <div className="bg-teal rounded-full w-10 h-10 text-lg family-normal rounded-full text-center content-center font-bold text-white">C</div>
                                    <div className="text-left flex-1">
                                        <h4 className="text-white text-sm font-bold family-normal mb-2">CPA Firm Owner</h4>
                                        <p className="text-muted text-xs font-semibold">Small CPA Practice, Early Access User</p>
                                    </div>
                                </div>
                                <p className="text-base text-white/80 leading-7">"With all the bad actors out there, prioritizing client data safety is an essential part of any CPA firm. Fortipii brought to my attention that, even after implementing strict access controls and software securities, substantial information was left behind unencrypted on various drives in the office. Fortipii simply and efficiently protected the sensitive information and kept my files organized so there was no disruption in productivity."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;