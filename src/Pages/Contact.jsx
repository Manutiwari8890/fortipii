import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../Context/LoadingContext";

function Contact(){

    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        const getPageContent = async () => {
            startLoading();
            try {
                const response = await fetch(`${baseUrl}page/contact`);
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

    return (
        <>
            {content?.banner &&
                <section className="py-10 bg-primary/5 relative bg-[url('/assets/images/particles-bg.png')] bg-center bg-cover mt-20 xl:mt-20 2xl:mt-25">
                    <div className="container px-2 lg:px-5 mx-auto z-1">
                        <div className="text-center content-center min-h-45 max-w-full mx-auto md:min-h-50 md:max-w-9/10 lg:max-w-2/3 lg:min-h-50 xl:min-h-75 2xl:min-h-100">
                            <h1 className="text-[48px] text-secondary font-black md:text-[54px] 2xl:text-[70px]" dangerouslySetInnerHTML={{ __html: content?.banner?.title }}></h1>
                            <p className="text-sm text-[#4B5563] leading-5.5 mt-2 font-commissioner max-w-full mx-auto md:text-base md:leading-7 lg:max-w-9/10 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">{content?.banner?.description}</p>
                        </div>
                    </div>
                </section>
            }
            <section className="pt-10 pb-b md:pb-5 lg:pt-15 lg:pb-5 xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="w-full mx-auto grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-2 lg:w-3/4 xl:w-3/4 2xl:w-1/2">
                        {content?.contact_cards?.length > 0 &&
                            content?.contact_cards?.map((card, index) => (
                                <div className="flex items-center gap-4 p-6 rounded-2xl border border-[#EEEEEE]" key={index}>
                                    <div className="bg-primary/10 w-16 h-16 rounded-full text-center content-center" dangerouslySetInnerHTML={{ __html: card?.icon }}>
                                    </div>
                                    <div className="text-left flex-1">
                                        <h4 className="text-3xl font-semibold text-secondary font-commissioner mb-3">{card?.title}</h4>
                                        <Link to={`tel:${card?.contact_detail}`} className="text-base font-commissioner text-primary">{card?.contact_detail}</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full px-5 py-10 bg-white shadow-sm mx-auto mt-10 rounded-4xl md:mt-10 md:py-10 md:px-15 lg:px-20 lg:py-15 lg:pt-15 lg:w-4/5 lg:py-10 lg:px-15 lg:mt-10 xl:py-10 2xl:py-15">
                        <div className="form-wrapper mx-auto">
                            <h2 className="text-secondary text-[30px] font-bold text-center mb-10 md:text-[36px] lg:text-[40px] lg:mb-8 xl:text-[40px] 2xl:text-[50px]">Write us a message</h2>
                            <form>
                                <div className="grid grid-cols-2 gap-y-5 md:gap-x-8 lg:gap-y-6 xl:gap-y-6 2xl:gap-y-10">
                                    <div className="form-group w-full col-span-2 md:col-span-1">
                                        <label htmlFor="fname" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-2 md:mb-3 xl:mb-2 2xl:mb-3">First Name</label>
                                        <input type="text" id="fname" placeholder="John" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group col-span-2 md:col-span-1">
                                        <label htmlFor="lname" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-2 md:mb-3 xl:mb-2 2xl:mb-3">Last Name</label>
                                        <input type="text" id="lname" placeholder="Doe" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group col-span-2 md:col-span-1">
                                        <label htmlFor="email" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-2 md:mb-3 xl:mb-2 2xl:mb-3">Email address</label>
                                        <input type="email" id="email" placeholder="info@example.com" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group col-span-2 md:col-span-1">
                                        <label htmlFor="phone" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-2 md:mb-3 xl:mb-2 2xl:mb-3">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="000 111 2222" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="message" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-2 md:mb-3 xl:mb-2 2xl:mb-3">Message</label>
                                        <textarea id="message" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" rows="8"></textarea>
                                    </div>
                                    <div className="col-span-2">
                                        <button className="btn-secondary bg-primary w-full font-commissioner text-lg relative font-medium text-white py-5 px-8 rounded-full cursor-pointer mx-auto">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;