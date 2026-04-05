import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogCard from "../Componments/BlogCard";
import { useState, useContext, useEffect } from "react";
import { LoadingContext } from "../Context/LoadingContext";
import { useParams } from "react-router-dom";

function Blog(){
    const [content, setContent] = useState();
    const location = useLocation();
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const searchParams = new URLSearchParams(location.search)
    const page = Number(searchParams.get("page")) || 1;

    // useEffect(() => {
    //     const getPageContent = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}page/blog`);
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
    //     const getBlogs = async () => {
    //         startLoading();
    //         try {
    //             const response = await fetch(`${baseUrl}blogs?page=${page}`);
    //             const result = await response.json();

    //             if (!result?.status) {
    //                 throw new Error(result?.message);
    //             }
    //             setBlogs(result)
    //         } catch (err) {
    //             console.log(err);
    //         } finally {
    //             stopLoading();
    //         }
    //     };

    //     getBlogs();
    // }, [page]);

    // const updatePage = (pNumber) => {
    //     navigate(`?page=${pNumber}`)
    // }

    return (
        <>
            <section className="bg-primary py-16 relative mt-17 lg:mt-20 lg:py-18 xl:mt-17 xl:py-22">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center">
                        <div className="relative z-2">
                            <p className="text-base tracking-[0.12em] mb-2 text-accent font-medium uppercase lg:text-lg">Resources & insights</p>
                            <h2 className="text-white text-3xl font-bold tracking-[-0.3px] family-normal mb-2 leading-10 lg:mb-4 lg:text-4xl lg:leading-12 lg:mb-2 xl:mb-4 xl:leading-16 xl:text-[54px]">The Fortipii Blog</h2>
                            <p className="text-white/45 text-lg leading-6 max-w-120 mx-auto lg:leading-7 lg:text-xl">Practical guidance on protecting your clients' sensitive data, staying compliant, and running a secure practice.</p>
                        </div>
                        <div className="w-125 h-75 bg-[radial-gradient(ellipse,rgba(94,209,192,0.12)_0%,transparent_70%)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FAFAFA] py-16 border-t border-gray lg:py-18 xl:py-24">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="bg-light py-8 px-8 border border-accent rounded-3xl mb-5 lg:mb-8">
                        <div className="flex gap-5 items-center mb-6">
                            <div className="w-13 h-13 bg-teal rounded-xl content-center">
                                <svg viewBox="0 0 22 22" fill="none" className="w-8 h-8 mx-auto"><rect x="4" y="2" width="14" height="18" rx="2.5" stroke="#FFFFFF" strokeWidth="1.5" fill="none"></rect><path d="M8 7h6M8 11h6M8 15h4" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                            </div>
                            <div className="text-left flex-1">
                                <h4 className="text-primary text-base font-bold family-normal mb-2">Free Download: WISP Assessment Template</h4>
                                <p className="text-teal text-sm family-normal font-semibold">A complete Written Information Security Plan template for tax and financial professionals — 10 sections, ready to fill in. Required under IRS Pub 4557.</p>
                            </div>
                        </div>
                        <Link className="text-sm font-bold bg-accent text-primary py-3 px-8 rounded-full family-normal inline-block hover:bg-teal">Download free template →</Link>
                    </div>
                    <div className="bg-primary p-6 rounded-3xl mb-8 lg:p-10 lg:mb-10 xl:mb-15">
                        <div className="grid grid-cols-1 gap-5 items-center lg:grid-cols-2">
                            <div className="text-left">
                                <p className="text-primary text-sm bg-accent px-4 py-1 rounded-full w-max font-semibold mb-5">Featured</p>
                                <h3 className=" text-white font-bold family-normal mb-4 text-xl lg:mb-2 xl:mb-4 xl:text-2xl">The IRS Pub 4557 Compliance Guide for Tax Preparers in 2025</h3>
                                <p className="text-sm text-white/70 family-normal leading-5 xl:leading-6">IRS Publication 4557 outlines every data security requirement the IRS expects from tax professionals. Most preparers haven't read it. Here's everything you need to know — in plain English.</p>
                                <p className="text-sm text-white/40 family-normal my-3 xl:my-5">Shannon Bond · March 15, 2025 · 8 min read</p>
                                <Link className="text-sm font-bold bg-accent text-primary py-3 px-8 rounded-full family-normal inline-block hover:bg-teal hover:-translate-y-1">Read the guide →</Link>
                            </div>
                            <div className="bg-white/10 border border-white/5 p-5 rounded-3xl">
                                <p className="text-xs text-accent uppercase tracking-[0.1em] font-semibold mb-4">IRS Pub 4557 checklist</p>
                                <div className="flex gap-4 items-center text-xs family-normal font-semibold text-gray/75 tracking-[0.05em] mb-4">
                                    <p className="w-27">Risk assessment</p>
                                    <div className="bg-accent h-1.5 w-full rounded-full flex-1"></div>
                                    <p className="w-13 text-right">Required</p>
                                </div>
                                <div className="flex gap-4 items-center text-xs family-normal font-semibold text-gray/75 tracking-[0.05em] mb-4">
                                    <p className="w-27">WISP in place</p>
                                    <div className="bg-accent h-1.5 w-full rounded-full flex-1"></div>
                                    <p className="w-13 text-right">Required</p>
                                </div>
                                <div className="flex gap-4 items-center text-xs family-normal font-semibold text-gray/75 tracking-[0.05em] mb-4">
                                    <p className="w-27">Access controls</p>
                                    <div className="bg-accent h-1.5 w-full rounded-full flex-1"></div>
                                    <p className="w-13 text-right">Required</p>
                                </div>
                                <div className="flex gap-4 items-center text-xs family-normal font-semibold text-gray/75 tracking-[0.05em] mb-4">
                                    <p className="w-27">Employee training</p>
                                    <div className="bg-accent h-1.5 w-full rounded-full flex-1"></div>
                                    <p className="w-13 text-right">Required</p>
                                </div>
                                <div className="flex gap-4 items-center text-xs family-normal font-semibold text-gray/75 tracking-[0.05em]">
                                    <p className="w-27">Incident response</p>
                                    <div className="bg-accent h-1.5 w-full rounded-full flex-1"></div>
                                    <p className="w-13 text-right">Required</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        <BlogCard data={{ title: "What is a WISP? A plain-English guide for tax professionals", slug: "what-is-wisp", category : "Compliance", image: "/assets/images/blog1.png", text : "The IRS requires every tax preparer to have a Written Information Security Plan. Here's exactly what it is, what it must include, and how to create one in under an hour.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                        <BlogCard data={{ title: "What the FTC Safeguards Rule means for your tax practice", slug: "what-the-ftc", category : "Compliance", image: "/assets/images/blog1.png", text : "The FTC Safeguards Rule applies to tax preparers. Here's what you need to have in place before your next audit.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                        <BlogCard data={{ title: "The 5 most common ways client data gets exposed at tax offices", slug: "the-5-most-common-ways", category : "Data security", image: "/assets/images/blog1.png", text : "From misdirected emails to unprotected backup drives — these are the most frequent sources of sensitive data exposure we see.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                        <BlogCard data={{ title: "Why email is the biggest risk to your clients' sensitive data", slug: "", category : "Email security", image: "/assets/images/blog1.png", text : "More client data is accidentally exposed through email than any other channel. Here's how to close that gap without changing how you work.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                        <BlogCard data={{ title: "How to do a sensitive data audit of your tax practice in one afternoon", slug: "", category : "Getting started", image: "/assets/images/blog1.png", text : "A step-by-step walkthrough for understanding what client data you have, where it lives, and how exposed it is — before tax season starts.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                        <BlogCard data={{ title: "WISP in plain English: what it is, why you need it, how to get one", slug: "", category : "Compliance", image: "/assets/images/blog1.png", text : "The Written Information Security Plan is one of the most commonly missing compliance documents at small tax practices. Here's the simple version.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                        <BlogCard data={{ title: "The IRS Security Summit: what it is and why it matters for your practice", slug: "", category : "Identity theft", image: "/assets/images/blog1.png", text : "The IRS Security Summit is the national coalition fighting tax-related identity theft. Here's what it does — and why the Fortipii founders helped build it.", author : "Satyan Penmetsa", date : "March 8, 2025"}} />
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-16 border-t border-gray lg:py-18 xl:py-20">
                <div className="container px-5 mx-auto lg:px-10">
                    <div className="text-center max-w-full mx-auto lg:max-w-1/2">
                        <p className="text-xs text-teal uppercase tracking-[0.12em] font-semibold">Stay informed</p>
                        <h2 className="text-primary text-2xl font-bold family-normal mt-2 mb-3 font-bold leading-8 lg:leading-9 lg:text-3xl">Get data security tips for tax professionals</h2>
                        <p className="text-base text-slate max-w-130 mx-auto mb-5">No spam. One email a month. Practical guidance on protecting your clients' data and staying compliant.</p>
                        <div className="max-w-150">
                            <form >
                                <div className="flex gap-2">
                                    <input type="text" className="bg-white px-4 py-3 border border-gray w-full rounded-xl family-normal" placeholder="your@email.com" />
                                    <button className="text-base font-bold bg-primary text-white py-3 px-10 rounded-full family-normal inline-block cursor-pointer hover:-translate-y-1">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;