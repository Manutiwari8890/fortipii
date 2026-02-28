import { useEffect, useState, useRef, useContext } from "react";
import IconCard from "../Componments/IconCard";
import { LoadingContext } from "../Context/LoadingContext";

function Services() {
    const [step, setStep] = useState(1)
    const [slider, setSlider] = useState(0);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep(prev => (prev < 7 ? prev + 1 : 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);


    const [content, setContent] = useState();
    const [faqs, setFaqs] = useState([]);
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const getPageContent = async () => {
            startLoading();
            try {
                const response = await fetch(`${baseUrl}page/services`);
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
                            <h1 className="text-[36px] text-secondary font-black md:text-[54px] 2xl:text-[70px]" dangerouslySetInnerHTML={{ __html: content?.banner?.title }}></h1>
                            <p className="text-sm text-[#4B5563] leading-5.5 mt-2 font-commissioner max-w-full mx-auto md:text-base md:leading-7 lg:max-w-9/10 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">{content?.banner?.text}</p>
                        </div>
                    </div>
                </section>
            }
            {content?.step_section &&
                <section className="py-10 bg-linear-to-l from-[#1F4567] to-secondary md:py-15 lg:py-15 xl:py-15 2xl:py-20">
                    <div className="container px-2 lg:px-5 mx-auto z-1">
                        <div className="text-center">
                            <h2 className="text-[28px] text-white font-bold mb-2 leading-9 md:mb-4 md:text-[40px] lg:mb-2 2xl:text-[50px] 2xl:mb-4">{content?.step_section?.title}</h2>
                            <p className="text-sm font-commissioner text-white md:text-lg 2xl:text-xl">{content?.step_section?.description}</p>
                        </div>
                        <div className="relative mt-5 md:mt-10 lg:mt-10 2xl:mt-20">
                            <div className="absolute bg-[#396288] bottom-10 left-11 z-0 md:left-1/2 md:bottom-18 w-2 mx-auto rounded-2xl min-h-180 md:-translate-x-1/2 md:w-[85%] md:min-h-3 lg:bottom-20"></div>
                            <div className="grid grid-cols-1 relative z-1 md:grid-cols-7">
                                {content?.step_section?.steps?.length > 0 &&
                                    content?.step_section?.steps?.map((step, index) => (
                                        <div className="p-2 text-center content-center flex gap-8 items-center md:block" key={index}>
                                            <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == index+1 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>{index+1}</div>
                                            <p className="text-2xl text-white md:text-base lg:text-lg 2xl:text-xl">{step?.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            }
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
            <section className="py-10 bg-linear-to-l from-[#1F4567] to-secondary md:py-15 lg:py-15 xl:py-15 2xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="text-center max-w-9/10 mx-auto mb-10 lg:max-w-2/3">
                        <h3 className="text-lg font-commissioner font-medium text-primary mb-0 lg:mb-2 xl:mb-1 2xl:mb-2">{content?.pricing_section?.sub_title}</h3>
                        <h2 className="text-[30px] text-white font-bold mb-2 md:mb-2 md:text-[40px] lg:mb-4 xl:text-[40px] xl:mb-2 2xl:text-[50px] 2xl:mb-4">{content?.pricing_section?.title}</h2>
                        <p className="text-base font-commissioner text-white font-normal md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">{content?.pricing_section?.description}</p>
                    </div>
                    <div className="relative">
                        <button className="w-15 h-15 absolute top-1/2 -left-1 -translate-y-1/2 z-1 text-center content-center rounded-full cursor-pointer text-white bg-primary/50 border border-primary block md:-left-3 xl:hidden" onClick={() => setSlider((p) => Math.max(p - 1, 0))}>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9736 7.63794C17.9485 7.56352 17.9234 7.4984 17.8983 7.42399C17.7392 7.04259 17.4713 6.82864 17.0946 6.78213C17.0108 6.77282 16.9187 6.77282 16.835 6.77282C12.9671 6.77282 9.09922 6.77282 5.22294 6.77282C5.15596 6.77282 5.08061 6.77282 4.97177 6.77282C5.03875 6.6984 5.08061 6.64259 5.12247 6.59608C6.31131 5.26585 7.50852 3.94492 8.69735 2.61468C9.0741 2.19608 9.18293 1.64724 8.89828 1.21934C8.63875 0.828637 8.31224 0.475149 7.96061 0.177475C7.62573 -0.110897 7.16526 -0.0271765 6.83875 0.2798C6.79689 0.31701 6.75503 0.363521 6.71317 0.410033C4.59503 2.76352 2.47689 5.11701 0.358749 7.4705C-0.0263672 7.8984 -0.110088 8.41934 0.149446 8.88445C0.208052 8.98678 0.283401 9.0798 0.358749 9.17282C2.47689 11.5263 4.59503 13.8798 6.71317 16.2426C7.19038 16.7728 7.75968 16.7728 8.24526 16.2519C8.39596 16.0845 8.55503 15.917 8.70573 15.7403C9.17456 15.2193 9.17456 14.5868 8.70573 14.0751C7.50852 12.7449 6.30294 11.4147 5.09735 10.0751C5.05549 10.0286 5.01363 9.97282 4.93828 9.8891C5.03875 9.8891 5.10573 9.8891 5.1727 9.8891C9.01549 9.8891 12.8667 9.8891 16.7094 9.8891C17.4881 9.8891 17.689 9.74026 17.9736 8.94957C17.9736 8.52166 17.9736 8.08445 17.9736 7.63794Z" fill="currentColor" />
                            </svg>
                        </button>
                        <button className="w-15 h-15 absolute top-1/2 -right-1 -translate-y-1/2 z-1 text-center content-center rounded-full cursor-pointer text-white bg-primary/50 border border-primary hover:text-white hover:bg-primary block md:-right-3 xl:hidden" onClick={() => setSlider((p) => Math.min(p + 1, 4 - 1))}>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.63794C0.0251163 7.56352 0.0502326 7.4984 0.0753488 7.42399C0.234419 7.04259 0.502326 6.82864 0.87907 6.78213C0.962791 6.77282 1.05488 6.77282 1.1386 6.77282C5.00651 6.77282 8.87442 6.77282 12.7507 6.77282C12.8177 6.77282 12.893 6.77282 13.0019 6.77282C12.9349 6.6984 12.893 6.64259 12.8512 6.59608C11.6623 5.26585 10.4651 3.94492 9.27628 2.61468C8.89954 2.19608 8.7907 1.64724 9.07535 1.21934C9.33488 0.828637 9.6614 0.475149 10.013 0.177475C10.3479 -0.110897 10.8084 -0.0271765 11.1349 0.2798C11.1767 0.31701 11.2186 0.363521 11.2605 0.410033C13.3786 2.76352 15.4967 5.11701 17.6149 7.4705C18 7.8984 18.0837 8.41934 17.8242 8.88445C17.7656 8.98678 17.6902 9.0798 17.6149 9.17282C15.4967 11.5263 13.3786 13.8798 11.2605 16.2426C10.7833 16.7728 10.214 16.7728 9.72837 16.2519C9.57767 16.0845 9.4186 15.917 9.26791 15.7403C8.79907 15.2193 8.79907 14.5868 9.26791 14.0751C10.4651 12.7449 11.6707 11.4147 12.8763 10.0751C12.9181 10.0286 12.96 9.97282 13.0353 9.8891C12.9349 9.8891 12.8679 9.8891 12.8009 9.8891C8.95814 9.8891 5.10698 9.8891 1.26419 9.8891C0.485581 9.8891 0.284651 9.74026 0 8.94957C0 8.52166 0 8.08445 0 7.63794Z" fill="currentColor" />
                            </svg>
                        </button>
                        <div className="overflow-hidden">
                            <div className={`flex grid-cols-4 w-max transition-transform duration-300 ease-in-out xl:grid xl:w-full gap-4 relative-z-1`} ref={containerRef} style={{ transform: `translateX(-${(slider * cardWidth) + (slider * 15)}px)` }}>
                                <div className="border border-[#0000001A] bg-white rounded-3xl overflow-hidden hover:border-[#5ED1C0] hover:bg-[#E8FAF2] w-95 md:w-92 lg:w-79 xl:w-full" ref={cardRef}>
                                    <div className="bg-[#2ECF861C] rounded-t-xl p-4">
                                        <h4 className="text-[#1E8B7A] text-2xl font-semibold mb-1">Start</h4>
                                        <p className="text-[#1E8B7A] text-sm xl:text-xs 2xl:text-sm">Perfect introduction to Fortipii</p>
                                    </div>
                                    <div className="px-4 py-6 flex flex-col justify-between items-center  min-h-115 xl:min-h-105 2xl:min-h-115">
                                        <div className="text-left w-full">
                                            <h3 className="text-3xl font-extrabold text-secondary mb-4">Free Trial</h3>
                                            <ul className="list-disc pl-4 text-lg text-[#062C4F] xl:text-base 2xl:text-lg">
                                                <li className="mb-2">Scan one drive, up to 500 files</li>
                                                <li className="mb-2">Preview the findings</li>
                                                <li className="mb-2">Easy upgrade to redact</li>
                                            </ul>
                                        </div>
                                        <a href="" className="btn-secondary bg-primary w-full inline-block text-center font-commissioner text-base font-semibold relative font-medium text-white py-3 px-8 rounded-full overflow-hidden">Talk to sales</a>
                                    </div>
                                </div>
                                <div className="border border-[#0000001A] bg-white rounded-3xl overflow-hidden hover:border-[#5ED1C0] hover:bg-[#E8FAF2] w-95 md:w-92 lg:w-79 xl:w-full">
                                    <div className="bg-[#2ECF861C] rounded-t-xl p-4">
                                        <h4 className="text-[#1E8B7A] text-2xl font-semibold mb-1">Shield</h4>
                                        <p className="text-[#1E8B7A] text-sm xl:text-xs 2xl:text-sm">Essential protection for small businesses</p>
                                    </div>
                                    <div className="px-4 py-6 flex flex-col justify-between items-center  min-h-115 xl:min-h-105 2xl:min-h-115">
                                        <div className="text-left w-full">
                                            <h3 className="text-3xl font-extrabold text-secondary mb-4">$39/month</h3>
                                            <ul className="list-disc pl-4 text-lg text-[#062C4F] xl:text-base 2xl:text-lg">
                                                <li className="mb-2">Unlimited file scans</li>
                                                <li className="mb-2">Full data redaction</li>
                                                <li className="mb-2">Includes one file location (drive)</li>
                                            </ul>
                                        </div>
                                        <a href="" className="btn-secondary bg-primary w-full inline-block text-center font-commissioner text-base font-semibold relative font-medium text-white py-3 px-8 rounded-full overflow-hidden">Talk to sales</a>
                                    </div>
                                </div>
                                <div className="border border-[#0000001A] bg-white rounded-3xl overflow-hidden hover:border-[#5ED1C0] hover:bg-[#E8FAF2] w-95 md:w-92 lg:w-79 xl:w-full">
                                    <div className="bg-[#2ECF861C] rounded-t-xl p-4">
                                        <h4 className="text-[#1E8B7A] text-2xl font-semibold mb-1">Guardian</h4>
                                        <p className="text-[#1E8B7A] text-sm xl:text-xs 2xl:text-sm">Email + device protection together</p>
                                    </div>
                                    <div className="px-4 py-6 flex flex-col justify-between items-center  min-h-115 xl:min-h-105 2xl:min-h-115">
                                        <div className="text-left w-full">
                                            <h3 className="text-3xl font-extrabold text-secondary mb-4">$79/month</h3>
                                            <ul className="list-disc pl-4 text-lg text-[#062C4F] xl:text-base 2xl:text-lg">
                                                <li className="mb-2">Unlimited file scans</li>
                                                <li className="mb-2">Full data redaction</li>
                                                <li className="mb-2">Includes up to 3 file locations (drives)</li>
                                                <li className="mb-2">Email and attachment scanning (O365, Gmail, Yahoo, etc.)</li>
                                                <li className="mb-2">Workflow & audit logs for compliance</li>
                                            </ul>
                                        </div>
                                        <a href="" className="btn-secondary bg-primary w-full inline-block text-center font-commissioner text-base font-semibold relative font-medium text-white py-3 px-8 rounded-full overflow-hidden">Talk to sales</a>
                                    </div>
                                </div>
                                <div className="border border-[#0000001A] bg-white rounded-3xl overflow-hidden hover:border-[#5ED1C0] hover:bg-[#E8FAF2] w-95 md:w-92 lg:w-79 xl:w-full">
                                    <div className="bg-[#2ECF861C] rounded-t-xl p-4">
                                        <h4 className="text-[#1E8B7A] text-2xl font-semibold mb-1">Fortress</h4>
                                        <p className="text-[#1E8B7A] text-sm xl:text-xs 2xl:text-sm">The complete Fortipii suite</p>
                                    </div>
                                    <div className="px-4 py-6 flex flex-col justify-between items-center  min-h-115 xl:min-h-105 2xl:min-h-115">
                                        <div className="text-left w-full">
                                            <h3 className="text-3xl font-extrabold text-secondary mb-4">$129/month</h3>
                                            <ul className="list-disc pl-4 text-lg text-[#062C4F] xl:text-base 2xl:text-lg">
                                                <li className="mb-2">Unlimited file scans</li>
                                                <li className="mb-2">Full data redaction</li>
                                                <li className="mb-2">Covers up to 6 file locations (drives)</li>
                                                <li className="mb-2">Email and attachment scanning (O365, Gmail, Yahoo, etc.)</li>
                                                <li className="mb-2">Multi-user licensing</li>
                                                <li className="mb-2">Workflow & audit logs for compliance</li>
                                            </ul>
                                        </div>
                                        <a href="" className="btn-secondary bg-primary w-full inline-block text-center font-commissioner text-base font-semibold relative font-medium text-white py-3 px-8 rounded-full overflow-hidden">Talk to sales</a>
                                    </div>
                                </div>
                            </div>    
                        </div>    
                        
                    </div>
                </div>
            </section>
            <section className="pt-10 pb-5 lg:pt-15 lg:pb-5 2xl:py-20">
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
        </>
    )
}

export default Services;