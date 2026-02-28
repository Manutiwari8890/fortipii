import IconCard from "../Componments/IconCard";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoadingContext } from "../Context/LoadingContext";

function About() {
    const [openFaq, setOpenFaq] = useState(0);
    const [faqs, setFaqs] = useState([]);
    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const getPageContent = async () => {
            startLoading();
            try {
                const response = await fetch(`${baseUrl}page/about`);
                const result = await response.json();

                if (!result?.status) {
                    throw new Error(result?.message);
                }
                setContent(result?.data?.content)
            } catch (err) {
                console.log(err);
            } finally {
                stopLoading();
            }
        };

        getPageContent();
    }, []);

    useEffect(() => {
        const getFaqContent = async () => {
            startLoading();
            try {
                const response = await fetch(`${baseUrl}faqs?page=1`);
                const result = await response.json();

                if (!result?.status) {
                    throw new Error(result?.message);
                }
                setFaqs(result?.data)
                setOpenFaq(result?.data?.[0]?.id)
            } catch (err) {
                console.log(err);
            } finally {
                stopLoading();
            }
        };

        getFaqContent();
    }, []);


    return (
        <>
            {content?.banner &&
                <section className="py-10 bg-primary/5 relative bg-[url('/assets/images/particles-bg.png')] bg-center bg-cover mt-20 xl:mt-20 2xl:mt-25">
                    <div className="container px-2 lg:px-5 mx-auto z-1">
                        <div className="text-center content-center min-h-45 max-w-full mx-auto md:min-h-50 md:max-w-9/10 lg:max-w-2/3 lg:min-h-50 xl:min-h-75 2xl:min-h-100">
                            <h1 className="text-[36px] text-secondary font-black md:text-[54px] 2xl:text-[70px]" dangerouslySetInnerHTML={{ __html: content?.banner?.title || "" }} />
                            <p className="text-sm text-[#4B5563] leading-5.5 mt-2 font-commissioner max-w-full mx-auto md:text-base md:leading-7 lg:max-w-9/10 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">{content?.banner?.text}</p>
                        </div>
                    </div>
                </section>
            }
            <section className="pb-10 pt-5 md:pb-15 lg:pb-15 xl:pb-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="px-5 py-10 bg-white shadow-sm mx-auto rounded-[40px] md:mt-5 md:px-10 md:py-10 lg:rounded-[40px] lg:px-10 lg:mt-10 lg:py-10 xl:rounded-[60px] xl:px-20 2xl:mt-15 2xl:py-15">
                        <div className="grid grid-cols-4 gap-x-0 gap-y-5 md:gap-y-10 lg:grid-cols-5 xl:grid-cols-4">
                            <div className="col-span-4 pr-0 lg:col-span-3 lg:pr-5 xl:pr-25">
                                <h3 className="text-[40px] text-secondary mb-2 md:mb-5 md:text-[50px]" dangerouslySetInnerHTML={{ __html: content?.philosophy_section?.title || "" }} />
                                <p className="text-lg text-[#4B5563] font-commissioner leading-8 lg:text-lg lg:leading-8 2xl:text-xl 2xl:leading-9">{content?.philosophy_section?.text}</p>
                            </div>
                            <div className="img-container col-span-4 md:col-span-4 lg:col-span-2 -order-1 lg:order-1 xl:col-span-1">
                                <img src={content?.philosophy_section?.image} alt="Illustration" className="w-full mx-auto max-w-75 md:max-w-100 lg:max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-linear-to-l from-[#1F4567] to-secondary overflow-hidden md:py-18 lg:py-15 xl:py-16 2xl:py-22">
                <div className="container px-2 lg:px-5 mx-auto relative z-1">
                    <div className="w-150 h-150 rounded-full content-center border border-white/10 mx-auto absolute top-auto left-1/2 -translate-x-1/2 md:w-250 md:h-250 md:top-15">
                        <div className="w-125 h-125 rounded-full content-center border border-white/10 mx-auto md:w-225 md:h-225">
                            <div className="w-100 h-100 rounded-full content-center border border-white/10 mx-auto md:w-200 md:h-200">
                                <div className="w-75 h-75 rounded-full content-center border border-white/10 mx-auto md:w-175 md:h-175">
                                    <div className="p-1 w-50 h-50 rounded-full border border-white/10 mx-auto md:w-150 md:h-150">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center relative z-1">
                        <h2 className="text-[40px] text-white font-bold mb-2 md:mb-4 md:text-[50px]" dangerouslySetInnerHTML={{ __html: content?.vission_section?.title || "" }} />
                        <p className="text-lg font-commissioner leading-8.5 text-white/90 md:leading-9 lg:text-lg lg:leading-8 2xl:text-xl 2xl:leading-9">{content?.vission_section?.text}</p>
                    </div>
                </div>
            </section>
            {content?.strength_cards &&
                <section className="pt-15 pb-10 md:pb-15 xl:pt-20 xl:pb-10 2xl:py-20">
                    <div className="container px-2 lg:px-5 mx-auto z-1">
                        <div className="title-wrapper text-center max-w-full mx-auto mb-8 md:max-w-9/10 lg:mb-10 lg:max-w-2/3 xl:mb-15 xl:max-w-2/3 2xl:max-w-1/2">
                            <h3 className="text-lg font-commissioner font-medium text-primary mb-2">{content?.strength_cards?.title}</h3>
                            <h2 className="text-[32px] font-extrabold text-secondary leading-8 md:leading-10 md:text-[40px] lg:text-[46px] lg:leading-12 xl:text-[50px] xl:leading-14">{content?.strength_cards?.description}</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {content?.strength_cards?.card?.map((card, index) => (
                                <IconCard data={{ title: card?.title, detail: card?.text, icon: card?.icon }} key={index} />
                            ))}
                        </div>
                    </div>
                </section>
            }
            <section className="pt-10 pb-10 lg:pt-15 lg:pb-10 2xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="title-wrapper text-center max-w-full mx-auto mb-8 md:max-w-9/10 lg:mb-10 lg:max-w-2/3 xl:mb-15 xl:max-w-2/3 2xl:max-w-1/2">
                        <h2 className="text-[32px] font-extrabold text-secondary leading-8 md:leading-10 mb-4 md:text-[40px] lg:mb-4 lg:text-[46px] lg:leading-12 xl:text-[50px] xl:leading-14">{content?.faq_section?.title}</h2>
                        <p className="text-xl font-commissioner text-[#4B5563] font-normal max-w-full mx-auto xl:max-w-[90%] xl:text-lg 2xl:text-xl">{content?.faq_section?.description}</p>
                    </div>
                    <div className="max-w-full px-5 py-5 bg-white shadow-sm mx-auto mt-5 rounded-[32px] md:rounded-[40px] md:mt-15 md:max-w-9/10 md:px-10 md:py-5 lg:rounded-[60px] lg:mt-5 lg:px-10 lg:py-10 xl:mt-15 xl:max-w-3/4 xl:px-15 xl:py-10 2xl:max-w-2/3 2xl:px-20 2xl:py-15">
                        {faqs?.length > 0 &&
                            faqs?.map((faq) => (
                                <div className={`border-b ${openFaq === faq?.id ? "border-primary" : "border-[#04396B]"} mb-4`} key={faq?.id}>
                                    <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(faq?.id)}>
                                        {faq?.question}
                                        {openFaq === faq?.id ?
                                            <svg className="w-4 h-4 xl:w-4 xl:h-4 2xl:w-5 2xlh-5" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_96_233)">
                                                    <path d="M24.9997 12.8398C24.9841 12.876 24.9636 12.9111 24.9538 12.9482C24.7165 13.874 23.9841 14.4609 23.03 14.4863C22.9567 14.4883 22.8835 14.4873 22.8103 14.4873C15.9108 14.4873 9.01046 14.4873 2.11104 14.4873C1.1003 14.4873 0.33858 13.9482 0.0797907 13.0557C-0.265912 11.8643 0.535845 10.6631 1.76534 10.5332C1.91866 10.5166 2.07393 10.5127 2.22823 10.5127C9.00557 10.5117 15.7839 10.5117 22.5612 10.5117C24.0124 10.5117 24.488 10.832 24.9987 12.1553C24.9997 12.3838 24.9997 12.6113 24.9997 12.8398Z" fill="black" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_96_233">
                                                        <rect className="w-10 h-10" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg> :
                                            <svg className="w-4 h-4 xl:w-4 xl:h-4 2xl:w-5 2xlh-5" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_96_227)">
                                                    <path d="M10.7969 14.2012C9.44141 14.2012 8.13965 14.2012 6.83887 14.2012C5.15234 14.2012 3.46582 14.2041 1.7793 14.2002C0.756836 14.1973 0 13.4707 0 12.502C0 11.5332 0.756836 10.8066 1.78125 10.8057C4.63379 10.8027 7.48535 10.8047 10.3379 10.8047C10.4736 10.8047 10.6084 10.8047 10.7979 10.8047C10.7979 10.6631 10.7979 10.5332 10.7979 10.4033C10.7979 7.51758 10.7959 4.63086 10.7998 1.74512C10.8008 1.00683 11.1426 0.458006 11.8145 0.157225C12.4482 -0.126955 13.0586 -0.0273454 13.5928 0.416014C14.0205 0.770506 14.1953 1.24512 14.1953 1.79687C14.1924 4.64941 14.1934 7.50098 14.1943 10.3535C14.1943 10.4883 14.1943 10.623 14.1943 10.8057C14.3428 10.8057 14.4727 10.8057 14.6035 10.8057C17.4893 10.8057 20.376 10.8027 23.2617 10.8076C24 10.8086 24.5479 11.1533 24.8447 11.8291C25.1309 12.4795 25.0176 13.0957 24.5557 13.6318C24.2021 14.042 23.7334 14.2041 23.1943 14.2031C20.3418 14.1992 17.4902 14.2012 14.6377 14.2012C14.5039 14.2012 14.3701 14.2012 14.1943 14.2012C14.1943 14.3555 14.1943 14.4873 14.1943 14.6191C14.1943 17.4941 14.1982 20.3691 14.1924 23.2432C14.1895 24.5146 12.9795 25.3496 11.8457 24.8623C11.1387 24.5576 10.7998 23.9922 10.7988 23.2266C10.7969 20.3633 10.7979 17.5 10.7979 14.6357C10.7969 14.502 10.7969 14.3691 10.7969 14.2012Z" fill="currentColor" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_96_227">
                                                        <rect className="w-10 h-10" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        }
                                    </button>
                                    <div className={`${openFaq === faq?.id ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                        <div className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8" dangerouslySetInnerHTML={{ __html: faq?.answer }}></div>
                                    </div>
                                </div>
                                
                            )) 
                        }
                    </div>
                </div>
            </section>
            {content?.footer_section &&
                <section className="py-5">
                    <div className="container px-2 lg:px-5 mx-auto z-1">
                        <div className="bg-linear-to-l from-[#1F4567] to-secondary rounded-3xl px-8 pt-8 relative min-h-50 content-center md:rounded-[46px] md:pt-0 lg:min-h-65 lg:px-10 xl:px-20 xl:rounded-[60px] xl:min-h-66 2xl:min-h-85">
                            <div className="grid grid-cols-6 h-full xl:grid-cols-4">
                                <div className="col-span-6 text-left h-full content-center md:col-span-4 xl:col-span-3">
                                    <h2 className="text-[28px] text-white font-bold mb-4 leading-9 md:mb-3 md:text-[22px] lg:mb-4 lg:text-[30px] xl:text-[36px] xl:mb-3 2xl:text-[45px] 2xl:mb-6">{content?.footer_section?.title}</h2>
                                    <p className="text-sm font-commissioner text-white w-full md:w-4/5 lg:text-base lg:w-3/4 xl:text-base 2xl:w-2/3 2xl:text-xl">{content?.footer_section?.text}</p>
                                    <Link to={content?.footer_section?.button_url} className="btn-secondary bg-primary font-commissioner text-base relative font-medium text-white py-3 px-12 rounded-full overflow-hidden inline-block mt-5 min-w-45 text-center hover:bg-secondary lg:mt-4 lg:min-w-65 lg:py-4 lg:mt-6 xl:mt-4 xl:py-3 xl:px-8 2xl:py-4 2xl:px-12 2xl:mt-8">{content?.footer_section?.button_title}</Link>
                                </div>
                                <div className="img-container relative col-span-6 md:col-span-2 xl:col-span-1">
                                    <img src="/assets/images/security-bg.png" className="w-4/5 mx-auto md:w-full" alt="" />
                                    <img src="/assets/images/security.png" className="w-2/5 absolute top-20 left-1/2 -translate-x-1/2 md:w-1/2 md:top-19" alt="" />
                                </div>
                            </div>
                            <img src="/assets/images/particles.png" className="w-1/2 absolute top-0 right-0" />
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default About;