import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../Context/LoadingContext";
import { Link, useParams } from "react-router-dom";

function SingleBlog(){
    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const { slug } = useParams();

    // useEffect(() => {
    //     const getDetail = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}blog/${slug}`);
    //             const result = await response.json();

    //             if (!result?.status) {
    //                 throw new Error(result?.message);
    //             }
    //             setContent(result?.data)
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             stopLoading();
    //         }
    //     };

    //     getDetail();
    // }, []);


    return (
        <>
            <section className="bg-primary py-16 mt-17 lg:mt-20 lg:py-18 xl:mt-17 xl:py-22">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="w-full mx-auto lg:w-4/5 xl:w-2/3">
                        <p className="text-xs text-accent font-semibold uppercase tracking-[0.1em] mb-3">Compliance</p>
                        <h1 className="font-bold family-normal text-white text-3xl leading-10 xl:leading-14 xl:text-[44px]">What is a WISP? A plain-English guide for tax professionals</h1>
                        <p className="text-white/70 text-base font-semibold my-4 xl:my-7">Satyan Penmetsa, Co-founder & CTO · March 20, 2025 · 7 min read</p>
                        <div className="flex gap-3">
                            <a href="#" className="text-sm font-bold bg-accent text-primary py-2 px-4 rounded-full family-normal hover:bg-teal lg:px-8">Download free WISP template →</a>
                            <Link to="/blog" className="text-sm font-semibold border-[2px] border-white/35 text-white py-2 px-4 rounded-full hover:text-accent hover:border-accent lg:px-6">← Back to blog</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 lg:py-18 xl:py-22">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="w-full mx-auto lg:w-4/5 xl:w-2/3">
                        <div className="bg-light text-sm font-semibold family-normal text-teal border border-accent flex gap-2 p-5 rounded-2xl leading-5 mb-8 xl:mb-15">
                            <svg viewBox="0 0 22 22" fill="none" class="w-7 h-7"><circle cx="11" cy="11" r="8" stroke="#35A897" strokewidth="1.5" fill="none"></circle><path d="M11 7v4l3 3" stroke="#35A897" strokewidth="1.5" strokelinecap="round"></path></svg>
                            <p className="flex-1"><strong className="font-bold">Quick summary :</strong> A WISP (Written Information Security Plan) is a document every tax professional is required to have under IRS Publication 4557. It describes how your practice protects client data. This article explains what it is, what it must contain, and how to create one — with a free template at the end.</p>
                        </div>
                        <h4 className="text-2xl family-normal font-bold text-primary mb-2 xl:mb-4">The short version</h4>
                        <p className="text-base text-primary family-normal leading-7 mb-2 xl:mb-4">If you prepare taxes or manage financial records for clients, you are legally required to have a Written Information Security Plan — commonly called a WISP. It's not optional. It's not just for big firms. And it's not as complicated as it sounds.</p>
                        <p className="text-base text-primary family-normal leading-7 mb-4 xl:mb-8">A WISP is simply a written document that describes what your practice does to protect client data. Think of it as your data security policy, put on paper. The IRS wants to see that you've thought seriously about protecting your clients' sensitive information — and that you have a plan in place if something goes wrong.</p>
                        <h4 className="text-2xl family-normal font-bold text-primary mb-3 xl:mb-5">Where does the WISP requirement come from?</h4>
                        <p className="text-base text-primary family-normal leading-7 mb-4">Three regulations require tax and financial professionals to maintain a data security plan:</p>
                        <div className="bg-secondary border border-gray rounded-xl p-4 mb-3">
                            <h5 className="text-sm font-semibold mb-3">IRS Publication 4557 — Safeguarding Taxpayer Data</h5>
                            <p className="text-sm text-primary family-normal leading-6">The IRS's direct guidance for tax preparers. It explicitly states that all tax professionals must have a written data security plan. This is the primary document you need to comply with.</p>
                        </div>
                        <div className="bg-secondary border border-gray rounded-xl p-4 mb-3">
                            <h5 className="text-sm font-semibold mb-3">Gramm-Leach-Bliley Act (GLBA)</h5>
                            <p className="text-sm text-primary family-normal leading-6">A federal law that requires financial institutions — including tax preparers — to protect consumer financial information. The WISP is your evidence of compliance.</p>
                        </div>
                        <div className="bg-secondary border border-gray rounded-xl p-4 mb-8 lg:mb-4 xl:mb-8">
                            <h5 className="text-sm font-semibold mb-3">FTC Safeguards Rule</h5>
                            <p className="text-sm text-primary family-normal leading-6">Updated in 2023, the FTC Safeguards Rule now applies to tax preparers and requires a comprehensive written information security program. Non-compliance can result in significant fines.</p>
                        </div>
                        <h4 className="text-2xl family-normal font-bold text-primary mb-4 lg:mb-2 xl:mb-4">What must a WISP include?</h4>
                        <p className="text-base text-primary family-normal leading-7 mb-4">IRS Pub 4557 and the FTC Safeguards Rule both specify what a WISP must cover. Here are the core elements:</p>
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">1. Practice information</h4>
                                <p className="text-sm text-primary leading-5 family-normal">Name, address, designated security coordinator, and number of employees and client records.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">2. Risk assessment</h4>
                                <p className="text-sm text-primary leading-5 family-normal">An inventory of the sensitive data you hold, where it's stored, and what risks exist to its security.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">3. Access controls</h4>
                                <p className="text-sm text-primary leading-5 family-normal">How you control who can access client data — login credentials, MFA, password policies, and access revocation procedures.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">4. Data encryption</h4>
                                <p className="text-sm text-primary leading-5 family-normal">How sensitive data is encrypted at rest and in transit — including drives, email, and cloud storage.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">5. Employee training</h4>
                                <p className="text-sm text-primary leading-5 family-normal">How you train staff on data security — including dates, topics covered, and signatures from employees who have completed training.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">6. Vendor management</h4>
                                <p className="text-sm text-primary leading-5 family-normal">A list of all third-party vendors with access to client data, and confirmation they have adequate security safeguards.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">7. Incident response plan</h4>
                                <p className="text-sm text-primary leading-5 family-normal">What you will do if a breach occurs — who to contact, how to contain it, how to notify affected clients, and how to report to regulators.</p>
                            </div>
                            <div className="bg-white border-1 border-gray border-l-4 border-l-accent rounded-xl p-4">
                                <h4 className="text-sm font-bold family-normal text-primary mb-2">8. Annual review</h4>
                                <p className="text-sm text-primary leading-5 family-normal">A log showing you review and update the WISP at least once per year, with a signature from the practice owner or designated coordinator.</p>
                            </div>
                        </div>
                        <div className="bg-primary p-6 family-normal rounded-2xl mt-5 lg:rounded-3xl lg:p-8">
                            <p className="text-accent text-xs font-semibold uppercase tracking-[0.1em] mb-4">Free download</p>
                            <h4 className="text-white text-2xl font-bold">Fortipii WISP Assessment Template</h4>
                            <p className="text-sm text-white/80 font-semibol my-3">10 sections · Covers IRS Pub 4557, GLBA, and FTC Safeguards Rule · Ready to fill in</p>
                            <a href="#" className="text-sm font-bold bg-accent text-primary py-3 px-8 rounded-full mt-3 inline-block family-normal hover:bg-teal">Download free template →</a>
                        </div>
                        <div className="border-t border-gray pt-10 mt-10 lg:mt-5 lg:pt-5 xl:pt-10 xl:mt-10">
                            <p className="text-xs text-muted family-normal uppercase font-semibold mb-5">Related articles</p>
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                                <Link to="" className="bg-secondary border border-gray p-5 rounded-2xl">
                                    <p className="text-teal text-xs uppercase font-semibold mb-3">Compliance</p>
                                    <h4 className="text-base family-normal font-semibold text-primary mb-2">The IRS Pub 4557 compliance guide for tax preparers in 2025</h4>
                                    <p className="text-sm text-muted family-normal">8 min read</p>
                                </Link>
                                <Link to="" className="bg-secondary border border-gray p-5 rounded-2xl">
                                    <p className="text-teal text-xs uppercase font-semibold mb-3">Compliance</p>
                                    <h4 className="text-base family-normal font-semibold text-primary mb-2">The IRS Pub 4557 compliance guide for tax preparers in 2025</h4>
                                    <p className="text-sm text-muted family-normal">8 min read</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog;