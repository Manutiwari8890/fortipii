import { useEffect, useState, useRef } from "react";
import IconCard from "../Componments/IconCard";

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

    return (
        <>
            <section className="py-10 bg-primary/5 relative bg-[url('/assets/images/particles-bg.png')] bg-center bg-cover mt-20 xl:mt-20 2xl:mt-25">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="text-center content-center min-h-45 max-w-full mx-auto md:min-h-50 md:max-w-9/10 lg:max-w-2/3 lg:min-h-50 xl:min-h-75 2xl:min-h-100">
                        <h1 className="text-[36px] text-secondary font-black md:text-[54px] 2xl:text-[70px]">Risk <span className="text-primary">Assessment</span></h1>
                        <p className="text-sm text-[#4B5563] leading-5.5 mt-2 font-commissioner max-w-full mx-auto md:text-base md:leading-7 lg:max-w-9/10 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-linear-to-l from-[#1F4567] to-secondary md:py-15 lg:py-15 xl:py-15 2xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="text-center">
                        <h2 className="text-[28px] text-white font-bold mb-2 leading-9 md:mb-4 md:text-[40px] lg:mb-2 2xl:text-[50px] 2xl:mb-4">Intelligent Data Privacy Advisor</h2>
                        <p className="text-sm font-commissioner text-white md:text-lg 2xl:text-xl">Assess your PLL exposure and get personalized recommendations</p>
                    </div>
                    <div className="relative mt-5 md:mt-10 lg:mt-10 2xl:mt-20">
                        <div className="absolute bg-[#396288] bottom-10 left-11 z-0 md:left-1/2 md:bottom-18 w-2 mx-auto rounded-2xl min-h-180 md:-translate-x-1/2 md:w-[85%] md:min-h-3 lg:bottom-20"></div>
                        <div className="grid grid-cols-1 relative z-1 md:grid-cols-7">
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 1 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>1</div>
                                <p className="text-2xl text-white md:text-base lg:text-lg 2xl:text-xl">Welcome</p>
                            </div>
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 2 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>2</div>
                                <p className="text-xl text-white md:text-base lg:text-lg 2xl:text-xl">Environment</p>
                            </div>
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 3 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>3</div>
                                <p className="text-xl text-white md:text-base lg:text-lg 2xl:text-xl">Locations</p>
                            </div>
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 4 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>4</div>
                                <p className="text-xl text-white md:text-base lg:text-lg 2xl:text-xl">Email</p>
                            </div>
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 5 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>5</div>
                                <p className="text-xl text-white md:text-base lg:text-lg 2xl:text-xl">Scanning</p>
                            </div>
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 6 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>6</div>
                                <p className="text-xl text-white md:text-base lg:text-lg 2xl:text-xl">Results</p>
                            </div>
                            <div className="p-2 text-center content-center flex gap-8 items-center md:block">
                                <div className={`text-white font-commissioner w-20 h-20 content-center rounded-full ${step == 7 ? "bg-primary " : "bg-[#3A5D7F]"} text-3xl font-semibold mb-4 md:mx-auto md:text-xl md:w-15 md:h-15 lg:w-16 lg:h-16 lg:text-2xl xl:text-3xl xl:w-20 xl:h-20`}>7</div>
                                <p className="text-xl text-white md:text-base lg:text-lg 2xl:text-xl">Welcome</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-15 pb-10 md:pb-15 xl:pt-20 xl:pb-10 2xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="title-wrapper text-center max-w-full mx-auto mb-8 md:max-w-9/10 lg:mb-10 lg:max-w-2/3 xl:mb-15 xl:max-w-2/3 2xl:max-w-1/2">
                        <h3 className="text-lg font-commissioner font-medium text-primary mb-2">Built for Small Offices</h3>
                        <h2 className="text-[32px] font-extrabold text-secondary leading-8 md:leading-10 md:text-[40px] lg:text-[46px] lg:leading-12 xl:text-[50px] xl:leading-14">The boring kind of safety your clients actually want.</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        <IconCard data={{ title: "Folder-based scanning", detail: "Scan desktops, mapped OneDrive/Google Drive folders, and shared drives for SSNs, DOBs, emails, TINs, bank numbers and more.", icon: '<svg width="40" height="40" class="group-hover:scale-150 group-hover:translate-x-[10px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_96_270)"><path d="M8.72556 18.9023C8.72556 18.1023 8.72556 17.3581 8.72556 16.6139C8.72556 14.3814 8.72556 12.1674 8.72556 9.93487C8.72556 7.53487 10.4558 5.82324 12.8558 5.82324C16.1674 5.82324 19.4977 5.82324 22.8093 5.82324C22.9395 5.82324 23.0697 5.82324 23.2744 5.82324C23.2744 6.00929 23.2744 6.17673 23.2744 6.34417C23.2744 7.92557 23.2744 9.52557 23.2744 11.107C23.2744 12.7442 24.3535 13.8232 25.9721 13.8232C27.5535 13.8232 29.1535 13.8232 30.7349 13.8232C30.9023 13.8232 31.0511 13.8232 31.2558 13.8232C31.2558 15.5349 31.2558 17.1907 31.2558 18.9209C31.4418 18.9209 31.6093 18.9209 31.7767 18.9209C33.1163 18.9209 34.4744 18.9209 35.8139 18.9209C36.5767 18.9209 37.0604 19.3488 37.0791 19.9814C37.0977 20.6325 36.5767 21.0977 35.8139 21.0977C25.2651 21.0977 14.7349 21.0977 4.18603 21.0977C3.40463 21.0977 2.90231 20.6511 2.92091 19.9814C2.93951 19.3488 3.42324 18.9209 4.18603 18.9209C5.6744 18.9023 7.18138 18.9023 8.72556 18.9023Z" fill="#5ED1C0"/><path d="M8.72559 23.2931C16.2605 23.2931 23.7209 23.2931 31.2372 23.2931C31.2372 23.4419 31.2558 23.5908 31.2558 23.7396C31.2558 25.8233 31.2558 27.9257 31.2558 30.0094C31.2558 32.4652 29.5442 34.1768 27.0884 34.1768C22.3628 34.1768 17.6372 34.1768 12.9116 34.1768C10.4372 34.1768 8.72559 32.4652 8.72559 29.9722C8.72559 27.7582 8.72559 25.5443 8.72559 23.2931Z" fill="#5ED1C0"/><path d="M0.0744186 6.75351C0.0744186 5.58141 -0.0372093 4.40932 0.0930232 3.27444C0.316279 1.45118 1.97209 0.0558345 3.81395 0.0372299C5.78605 2.05711e-05 7.77674 0.0186252 9.76744 0.0372299C10.4372 0.0372299 10.9209 0.520951 10.9023 1.1349C10.8837 1.74886 10.4 2.19537 9.73023 2.21397C7.90698 2.21397 6.06512 2.21397 4.24186 2.21397C2.92093 2.21397 2.19535 2.93955 2.17674 4.24188C2.17674 6.06514 2.17674 7.907 2.17674 9.73025C2.17674 10.6419 1.35814 11.1814 0.595349 10.7907C0.204651 10.5675 0 10.214 0 9.74886C0 8.74421 0 7.75816 0 6.75351C0.0372093 6.75351 0.0558139 6.75351 0.0744186 6.75351Z" fill="#5ED1C0"/><path d="M33.2091 0.0930954C34.3812 0.0930954 35.5719 -0.0185325 36.744 0.1117C38.5487 0.334956 39.944 1.97216 39.9812 3.79542C40.0184 5.78612 39.9998 7.79542 39.9998 9.78612C39.9998 10.4373 39.5347 10.9024 38.9394 10.921C38.3254 10.9396 37.8417 10.4559 37.8417 9.78612C37.8231 7.94426 37.8417 6.1024 37.8417 4.24193C37.8417 2.921 37.1161 2.19542 35.7952 2.19542C33.9719 2.19542 32.1301 2.19542 30.3068 2.19542C29.4324 2.19542 28.8742 1.39542 29.2277 0.651235C29.4324 0.223328 29.8045 0.0186768 30.2882 0.0186768C31.2742 0.0186768 32.2603 0.0186768 33.2463 0.0186768C33.2091 0.0372814 33.2091 0.0558861 33.2091 0.0930954Z" fill="#5ED1C0"/><path d="M6.77201 39.9256C5.61852 39.9256 4.46503 40.0372 3.33015 39.907C1.39527 39.6651 0.0371273 38.0093 0.0185226 36.0558C-8.20095e-05 34.1395 0.0185226 32.2046 0.0185226 30.2884C0.0185226 29.5814 0.483639 29.0977 1.1162 29.0977C1.74875 29.0977 2.19527 29.6 2.19527 30.307C2.19527 32.1302 2.19527 33.9721 2.19527 35.7953C2.19527 37.0791 2.92085 37.8232 4.22317 37.8232C6.06503 37.8232 7.90689 37.8232 9.76736 37.8232C10.2697 37.8232 10.6418 38.0465 10.8464 38.5116C11.0325 38.9581 10.9581 39.386 10.586 39.6651C10.3627 39.8511 10.0278 39.9814 9.73015 39.9814C8.7441 40.0186 7.75806 40 6.77201 40C6.77201 39.9628 6.77201 39.9442 6.77201 39.9256Z" fill="#5ED1C0"/><path d="M39.9256 33.2093C39.9256 34.3814 40.0372 35.5535 39.907 36.6883C39.6651 38.5674 38.0093 39.9442 36.1302 39.9814C34.1767 40.0186 32.2232 40 30.2698 39.9814C29.6 39.9814 29.1163 39.5163 29.0977 38.9023C29.0791 38.2697 29.5814 37.8046 30.2884 37.8046C32.1302 37.8046 33.9721 37.8046 35.8326 37.8046C37.0977 37.8046 37.8232 37.0604 37.8419 35.7953C37.8419 33.9535 37.8419 32.1116 37.8419 30.2511C37.8419 29.3767 38.6605 28.8186 39.386 29.1721C39.8139 29.3767 40.0186 29.7488 40.0186 30.2325C40.0186 31.2186 40.0186 32.2046 40.0186 33.1907C39.9628 33.2093 39.9442 33.2093 39.9256 33.2093Z" fill="#5ED1C0"/><path d="M30.4186 11.6465C28.9488 11.6465 27.4047 11.6465 25.8791 11.6465C25.6 11.6465 25.4512 11.4977 25.4512 11.2186C25.4512 9.67443 25.4512 8.14884 25.4512 6.67908C27.0884 8.31629 28.7628 9.9907 30.4186 11.6465Z" fill="#5ED1C0"/></g><defs><clipPath id="clip0_96_270"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>' }} />
                        <IconCard data={{ title: "Smart redaction", detail: "Redact Private Client Data in PDFs and images while preserving layout. Keep redacted copies for workflow and preserve originals in a controlled vault.", icon: '<svg width="40" height="40" class="group-hover:scale-150 group-hover:translate-x-[10px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_96_292)"><path d="M26.028 34.4186C24.8932 34.4186 23.8327 34.4186 22.7536 34.4186C22.2513 34.4186 21.7304 34.4558 21.228 34.3628C19.6652 34.0651 18.6048 32.7442 18.6048 31.1256C18.6048 28.0558 18.6048 24.986 18.6048 21.9163C18.6048 21.7674 18.6048 21.6 18.6048 21.4139C17.0606 21.4139 15.535 21.4139 13.9722 21.4139C13.9722 22.1581 13.9908 22.9023 13.9722 23.6279C13.9536 25.1907 13.042 26.4186 11.628 26.8279C11.2932 26.9209 10.9397 26.9581 10.6048 26.9581C8.20478 26.9767 5.82339 26.9767 3.42339 26.9581C1.45129 26.9581 0.0745503 25.6 0.0559457 23.6279C0.037341 21.2093 0.037341 18.7721 0.0559457 16.3535C0.0559457 14.4 1.43269 13.0232 3.40478 13.0232C5.80478 13.0232 8.18618 13.0232 10.5862 13.0232C12.5769 13.0232 13.9536 14.4 13.9722 16.3907C13.9908 17.1163 13.9722 17.8418 13.9722 18.586C15.535 18.586 17.042 18.586 18.6048 18.586C18.6048 18.4186 18.6048 18.2511 18.6048 18.1023C18.6048 15.0883 18.6048 12.093 18.6048 9.07904C18.6048 6.95811 19.9629 5.59998 22.0839 5.59998C23.3676 5.59998 24.6699 5.59998 25.9908 5.59998C26.0094 5.41393 26.0094 5.26509 26.0094 5.11625C26.028 4.35346 25.9908 3.57207 26.0652 2.80928C26.2327 1.26509 27.535 0.055789 29.0978 0.0371843C31.6838 -2.49809e-05 34.2699 -2.49809e-05 36.8373 0.0371843C38.5118 0.055789 39.8699 1.43253 39.9071 3.10695C39.9443 5.65579 39.9443 8.22323 39.9071 10.7721C39.8885 12.5581 38.5304 13.9163 36.7071 13.9535C34.2141 13.9907 31.7211 13.9907 29.228 13.9535C27.349 13.9163 26.0466 12.5395 26.0094 10.6418C25.9908 9.89765 26.0094 9.17207 26.0094 8.37207C25.5257 8.37207 25.0792 8.37207 24.6327 8.37207C23.7397 8.37207 22.8652 8.37207 21.9722 8.37207C21.5071 8.37207 21.3769 8.52091 21.3769 8.96742C21.3769 9.33951 21.3769 9.73021 21.3769 10.1023C21.3769 17.0046 21.3769 23.907 21.3769 30.8093C21.3769 31.5163 21.4513 31.6093 22.1769 31.6093C23.2745 31.6093 24.3908 31.6093 25.4885 31.6093C25.6373 31.6093 25.8048 31.6093 26.0094 31.6093C26.0094 30.8279 25.9908 30.1023 26.0094 29.3581C26.028 27.7581 26.9769 26.5302 28.4466 26.1581C28.7629 26.0837 29.0978 26.0465 29.4327 26.0465C31.7769 26.0279 34.1397 26.0279 36.4838 26.0465C38.5676 26.0465 39.9257 27.4046 39.9257 29.4883C39.9257 31.8511 39.9257 34.2325 39.9257 36.5953C39.9257 38.6604 38.5676 40 36.5025 40C34.1397 40 31.7769 40 29.4141 40C27.3676 40 26.0094 38.6232 25.9908 36.5767C26.028 35.8697 26.028 35.1814 26.028 34.4186Z" fill="#5ED1C0"/></g><defs><clipPath id="clip0_96_292"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>' }} />
                        <IconCard data={{ title: "Email & attachment monitoring", detail: "Monitor high-risk mailboxes (O365, Gmail, etc.) and flag, isolate, or redact sensitive emails and attachments.", icon: '<svg width="40" height="40" class="group-hover:scale-150 group-hover:translate-x-[10px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3767 31.1814C21.2465 31.1814 21.1162 31.2 20.986 31.2C15.3116 31.2 9.63716 31.2 3.96274 31.2C1.87902 31.2 0.372043 29.9349 0.055764 27.9628C0.0185547 27.7767 0.0185547 27.5907 0.0185547 27.4046C0.0185547 22.2511 0.0185547 17.0977 0.0185547 11.9256C0.0185547 11.8325 0.0185547 11.7209 0.0185547 11.5535C0.223206 11.6651 0.390648 11.7581 0.539485 11.8511C5.24646 14.6418 9.95344 17.4139 14.6604 20.2046C16.5209 21.3023 18.3441 21.3023 20.2046 20.2046C24.9302 17.3953 29.6744 14.6046 34.3999 11.8139C34.5116 11.7395 34.6418 11.6837 34.8092 11.5907C34.8092 13.8232 34.8092 16.0186 34.8092 18.2325C34.1767 18.307 33.5255 18.3256 32.893 18.4372C31.3488 18.6977 29.9906 19.386 28.8744 20.4837C26.9023 22.4186 24.9488 24.3721 23.0139 26.3442C21.786 27.5907 21.2651 29.1349 21.3953 30.8837C21.3953 30.9581 21.3767 31.0697 21.3767 31.1814Z" fill="#5ED1C0"/><path d="M17.4508 5.20932C21.9531 5.20932 26.4368 5.20932 30.9392 5.20932C32.8741 5.20932 34.3066 6.36281 34.7345 8.16746C34.8275 8.52095 34.7345 8.7256 34.3996 8.93025C29.2089 11.9814 24.0368 15.0512 18.8648 18.1023C17.8973 18.6791 16.9485 18.6791 15.981 18.1023C10.7717 15.014 5.56243 11.9256 0.334521 8.85583C0.111265 8.7256 0.0554512 8.59537 0.0926605 8.3349C0.334521 6.56746 1.91592 5.22792 3.8322 5.20932C6.39964 5.19071 8.96708 5.20932 11.5345 5.20932C13.488 5.20932 15.4601 5.20932 17.4508 5.20932Z" fill="#5ED1C0"/><path d="M39.9813 26.0279C39.9813 27.8325 39.4976 29.1162 38.4557 30.1767C37.079 31.5907 35.6836 32.986 34.2697 34.3628C33.7115 34.9023 32.9487 34.9209 32.465 34.4186C31.9441 33.8976 31.9813 33.1534 32.558 32.5767C33.879 31.2558 35.2185 29.9348 36.5208 28.5953C38.1208 26.9581 37.6743 24.3534 35.6092 23.4976C34.4185 22.9953 33.2464 23.1441 32.3162 24.0558C30.3813 25.9162 28.5022 27.8325 26.6232 29.7302C26.2139 30.1395 26.2325 30.7162 26.6046 31.0883C26.9953 31.479 27.5906 31.479 28.0371 31.0325C29.265 29.8232 30.4929 28.5953 31.7022 27.3674C32.4092 26.6604 33.1348 25.9348 33.8418 25.2279C34.4185 24.6697 35.1627 24.6325 35.6836 25.1534C36.186 25.6558 36.186 26.4 35.6278 26.9581C33.6743 28.9302 31.7022 30.9023 29.7301 32.8558C28.372 34.1767 26.1767 34.1581 24.8557 32.8558C23.5348 31.5348 23.4976 29.3953 24.8371 28.0372C26.7348 26.0837 28.6325 24.1302 30.6232 22.2697C32.372 20.6325 34.4743 20.2976 36.6697 21.2651C38.8278 22.2139 39.8883 24 39.9813 26.0279Z" fill="#5ED1C0"/></svg>' }} />
                        <IconCard data={{ title: "Audit logs & reports", detail: "Generate clean reports for cyber insurance, IT, and compliance — with per-file and per-entity counts.", icon: '<svg width="40" height="40" class="group-hover:scale-150 group-hover:translate-x-[10px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.4603 40C23.8138 40 16.1859 40 8.53934 40C8.52074 39.9814 8.50213 39.9628 8.48353 39.9628C5.9905 39.3674 4.7998 37.8605 4.7998 35.293C4.7998 27.814 4.7998 20.3349 4.7998 12.8372C4.7998 10.0093 4.7998 7.1814 4.7998 4.37209C4.7998 2.88372 5.39515 1.63721 6.62306 0.818605C7.1812 0.446512 7.88818 0.27907 8.53934 0C13.3765 0 18.2138 0 23.051 0C23.051 2.92093 23.051 5.86047 23.051 8.7814C23.051 10.5674 24.2045 11.7023 25.9719 11.7209C28.8928 11.7209 31.8138 11.7209 34.7347 11.7209C34.8835 11.7209 35.0324 11.7209 35.1998 11.7209C35.1998 11.9256 35.1998 12.093 35.1998 12.2419C35.1998 19.7209 35.1998 27.1814 35.1998 34.6605C35.1998 35.0698 35.1998 35.4605 35.1998 35.8698C35.144 37.693 33.8603 39.3302 32.13 39.8326C31.9068 39.8884 31.6835 39.9442 31.4603 40ZM19.7579 17.9721C19.8696 17.9721 19.9626 17.9721 20.0742 17.9721C22.7905 17.9721 25.5068 17.9721 28.2231 17.9721C28.744 17.9721 29.1533 17.786 29.3952 17.3023C29.7858 16.4837 29.1905 15.6279 28.2417 15.6279C23.9068 15.6279 19.5719 15.6279 15.237 15.6279C13.9161 15.6279 12.5952 15.6279 11.2556 15.6279C10.7719 15.6279 10.3998 15.814 10.1579 16.2419C9.71143 17.0419 10.3068 17.9535 11.2556 17.9535C14.1021 17.9721 16.93 17.9721 19.7579 17.9721ZM19.7207 24.2233C19.8324 24.2233 19.9254 24.2233 20.037 24.2233C22.7719 24.2233 25.4882 24.2233 28.2231 24.2233C28.744 24.2233 29.1533 24.0372 29.3952 23.5535C29.7858 22.7349 29.1905 21.8791 28.2417 21.8791C23.9626 21.8791 19.6649 21.8791 15.3858 21.8791C14.0091 21.8791 12.6324 21.8791 11.2556 21.8791C10.7719 21.8791 10.3998 22.0651 10.1579 22.493C9.71143 23.293 10.3068 24.2047 11.2556 24.2233C14.0835 24.2233 16.9114 24.2233 19.7207 24.2233ZM13.9905 30.4744C14.9207 30.4744 15.8324 30.4744 16.7626 30.4744C17.4882 30.4744 18.0091 29.9907 18.0277 29.3209C18.0463 28.6512 17.4882 28.1302 16.7626 28.1302C14.9393 28.1302 13.1161 28.1302 11.3114 28.1302C10.5672 28.1302 10.0277 28.614 10.0277 29.3023C10.0277 29.9907 10.5672 30.4744 11.3114 30.4744C12.2045 30.4744 13.0975 30.4744 13.9905 30.4744Z" fill="#5ED1C0"/><path d="M25.4135 0.465088C25.767 0.744158 26.0833 0.930204 26.3438 1.19067C28.8368 3.55346 31.3298 5.89765 33.8228 8.27904C34.1391 8.57672 34.3996 8.94881 34.7344 9.33951C34.5484 9.35811 34.4368 9.37672 34.3438 9.37672C31.5531 9.37672 28.7624 9.37672 25.9717 9.37672C25.5065 9.37672 25.3949 9.26509 25.3949 8.85578C25.3949 6.13951 25.3949 3.42323 25.3949 0.688344C25.3763 0.651134 25.3949 0.613925 25.4135 0.465088Z" fill="#5ED1C0"/></svg>' }} />
                        <IconCard data={{ title: "Scheduled background service", detail: "Run Fortipii as a low-noise Windows service after hours so staff never feel slowed down.", icon: '<svg width="40" height="40" class="group-hover:scale-150 group-hover:translate-x-[10px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_96_244)"><path d="M19.9815 13.4884C15.5535 13.4698 11.2001 13.0605 6.93959 11.7396C5.11634 11.1814 3.3489 10.4744 1.87913 9.19073C1.63727 8.98607 1.41401 8.74421 1.20936 8.50235C0.297733 7.34887 0.316338 6.08375 1.24657 4.94886C2.26983 3.72096 3.64657 3.01398 5.09773 2.41863C8.05587 1.20933 11.1628 0.65119 14.307 0.297702C17.3024 -0.018577 20.3163 -0.0929956 23.3303 0.111656C27.3489 0.372121 31.3303 0.948865 35.107 2.51166C36.2047 2.95817 37.2466 3.51631 38.1396 4.33491C38.3815 4.55817 38.6047 4.78142 38.7908 5.04189C39.6466 6.15817 39.6466 7.36747 38.7908 8.48375C38.1024 9.37677 37.1721 9.97212 36.1861 10.4931C34.1396 11.5535 31.9256 12.1489 29.6745 12.5954C26.4745 13.2279 23.2373 13.4884 19.9815 13.4884Z" fill="#5ED1C0"/><path d="M0.558226 25.1907C4.63264 27.8511 9.13497 28.8558 13.7675 29.4325C17.7117 29.9349 21.6559 29.9535 25.6001 29.507C29.6187 29.0604 33.5629 28.2604 37.228 26.4558C37.9536 26.1023 38.6419 25.6558 39.3861 25.2279C39.3861 25.3953 39.4047 25.5628 39.4047 25.7302C39.4047 28.0558 39.3675 30.3814 39.4233 32.6883C39.4606 33.8976 38.9582 34.7721 38.0838 35.5163C36.8745 36.5395 35.4419 37.2093 33.9722 37.7674C30.9024 38.9209 27.721 39.4977 24.4652 39.7767C20.8931 40.093 17.321 40.0558 13.7675 39.5907C10.3629 39.1442 7.01404 38.4186 3.92567 36.8558C2.92102 36.3535 1.97218 35.7581 1.22799 34.8837C0.744273 34.3256 0.502412 33.7116 0.521017 32.9488C0.539622 30.5116 0.521017 28.0744 0.521017 25.6372C0.558226 25.5256 0.558226 25.3953 0.558226 25.1907Z" fill="#5ED1C0"/><path d="M0.558155 11.9814C1.50699 12.5024 2.40002 13.0233 3.33025 13.4698C6.08374 14.7535 9.02327 15.4605 12.0186 15.9442C15.0884 16.428 18.1954 16.6326 21.3023 16.5396C26.2698 16.3907 31.1628 15.7396 35.7954 13.8419C37.0233 13.3396 38.1954 12.6512 39.4233 12.0373C39.4233 12.1489 39.4233 12.3163 39.4233 12.4838C39.4233 14.7907 39.3675 17.0977 39.4419 19.4047C39.4791 20.6326 38.9768 21.5256 38.0837 22.2698C36.8744 23.2931 35.4791 23.9442 34.0279 24.5024C30.9395 25.6559 27.7396 26.2326 24.4837 26.5303C21.4698 26.8094 18.4744 26.8094 15.4605 26.5303C11.4605 26.1396 7.5349 25.4326 3.90699 23.5721C3.05118 23.1256 2.26978 22.5303 1.5256 21.8977C0.837225 21.321 0.539551 20.5396 0.539551 19.5907C0.57676 17.2466 0.558155 14.8652 0.558155 12.5024C0.558155 12.3349 0.558155 12.1675 0.558155 11.9814Z" fill="#5ED1C0"/></g><defs><clipPath id="clip0_96_244"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>' }} />
                        <IconCard data={{ title: "Partner-ready", detail: "Ideal for tax protection plans, cyber-insurance bundles, and MSP/service-bureau offerings.", icon: '<svg width="40" height="40" class="group-hover:scale-150 group-hover:translate-x-[10px]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_96_253)"><path d="M18.6232 20.9674C17.4883 21.9349 17.1348 23.0698 17.1162 24.3907C17.079 26.9953 17.3767 29.5256 18.4 31.9256C19.7023 34.9395 21.7116 37.3581 24.4651 39.1628C24.8186 39.386 25.1534 39.6279 25.5069 39.8698C25.5255 39.8884 25.5255 39.907 25.5627 40C25.3953 40 25.2651 40 25.1162 40C18.4186 40 11.7209 40 5.02321 40C2.04646 40 0.0185547 37.9721 0.0185547 34.9767C0.0185547 24.986 0.0185547 15.014 0.0185547 5.02326C0.0371593 2.02791 2.04646 0 5.02321 0C9.76739 0 14.5302 0 19.2744 0C19.4976 0 19.7209 0 19.9813 0C19.9813 0.223256 19.9813 0.372093 19.9813 0.539535C19.9813 2.82791 19.9813 5.11628 19.9813 7.40465C19.9813 10.3256 22.0279 12.3721 24.9488 12.3721C27.2186 12.3721 29.4883 12.3721 31.7581 12.3721C31.9255 12.3721 32.0744 12.3721 32.2976 12.3721C32.2976 14.0465 32.2976 15.6651 32.2976 17.3581C32.093 17.2465 31.8883 17.1349 31.7023 17.0233C30.2139 16.0744 28.7255 16.1116 27.2186 17.0419C26.1581 17.693 25.0418 18.2512 23.9441 18.8279C23.7023 18.9581 23.386 19.014 23.1069 19.014C17.7674 19.0326 12.4093 19.014 7.06972 19.0326C6.86507 19.0326 6.66042 19.0326 6.45576 19.0884C6.02786 19.1814 5.74879 19.5535 5.74879 20C5.74879 20.4279 6.02786 20.8 6.45576 20.9116C6.66042 20.9674 6.86507 20.9674 7.06972 20.9674C10.7162 20.9674 14.3813 20.9674 18.0279 20.9674C18.1767 20.9674 18.3441 20.9674 18.6232 20.9674ZM13.3767 13.3209C11.2 13.3209 9.0046 13.3209 6.82786 13.3209C6.15809 13.3209 5.73018 13.7116 5.73018 14.2884C5.74879 14.8465 6.15809 15.2186 6.80925 15.2372C6.92088 15.2372 7.05111 15.2372 7.16274 15.2372C11.0511 15.2372 14.9395 15.2372 18.8279 15.2372C19.2 15.2372 19.572 15.2558 19.9441 15.2372C20.4837 15.2 20.8372 14.9023 20.9116 14.4186C21.0046 13.786 20.5395 13.3209 19.7767 13.3209C17.6558 13.3209 15.5162 13.3209 13.3767 13.3209ZM11.4418 32.3907C12.893 32.3907 14.3441 32.3907 15.7953 32.3907C15.9255 32.3907 16.0558 32.3907 16.2046 32.3907C16.7627 32.3349 17.1348 31.9628 17.1534 31.4605C17.1534 30.9395 16.7813 30.5488 16.186 30.493C16.0744 30.493 15.9813 30.493 15.8697 30.493C12.9116 30.493 9.97204 30.493 7.0139 30.493C6.90228 30.493 6.77204 30.493 6.66042 30.493C6.10228 30.5488 5.73018 30.9395 5.74879 31.4605C5.74879 31.9628 6.12088 32.3535 6.67902 32.4093C6.80925 32.4279 6.93949 32.4093 7.08832 32.4093C8.52088 32.3907 9.97204 32.3907 11.4418 32.3907ZM10.4558 7.6093C9.32088 7.6093 8.2046 7.6093 7.06972 7.6093C6.95809 7.6093 6.82786 7.6093 6.71623 7.6093C6.13949 7.64651 5.74879 8.03721 5.73018 8.55814C5.73018 9.07907 6.12088 9.48837 6.69763 9.50698C7.14414 9.52558 7.59065 9.50698 8.03716 9.50698C9.97204 9.50698 11.8883 9.50698 13.8232 9.50698C13.9348 9.50698 14.0279 9.50698 14.1395 9.50698C14.8093 9.48837 15.2372 9.09767 15.2372 8.52093C15.2186 7.96279 14.8093 7.5907 14.1581 7.5907C12.9116 7.6093 11.6837 7.6093 10.4558 7.6093ZM10.5116 24.7628C9.26507 24.7628 8.01856 24.7628 6.77204 24.7628C6.15809 24.7628 5.74879 25.1535 5.73018 25.693C5.71158 26.2512 6.13949 26.6419 6.77204 26.6791C7.18135 26.6977 7.57204 26.6791 7.98135 26.6791C10.0093 26.6791 12.0558 26.6791 14.0837 26.6791C14.5488 26.6791 14.9395 26.5488 15.1441 26.1023C15.4418 25.4326 14.9581 24.7628 14.1581 24.7628C12.9488 24.7442 11.7395 24.7628 10.5116 24.7628Z" fill="#5ED1C0"/><path d="M19.0322 25.4884C19.0322 25.0233 19.0322 24.5582 19.0322 24.1117C19.0508 23.107 19.5718 22.4186 20.5206 22.1396C23.2555 21.3582 25.8601 20.2233 28.2415 18.6791C29.0973 18.121 29.8787 18.1396 30.7346 18.6791C32.8183 20 35.0136 21.1163 37.3764 21.8419C37.7671 21.9535 38.1764 22.0466 38.5671 22.1954C39.3671 22.4559 39.8694 23.014 39.9066 23.8512C40.0555 26.5489 39.7764 29.1907 38.5857 31.6838C37.4508 34.0652 35.8322 36 33.6555 37.4884C32.6694 38.1582 31.6834 38.8093 30.6973 39.4791C29.8601 40.0559 29.0415 40.0187 28.2229 39.4605C27.2927 38.828 26.3439 38.214 25.4136 37.5814C21.2276 34.6233 19.1625 30.5675 19.0322 25.4884ZM28.5206 29.1349C28.1485 28.7628 27.795 28.3907 27.4229 28.0187C26.9392 27.5349 26.3811 27.4977 25.9718 27.907C25.5625 28.3163 25.5997 28.8745 26.0648 29.3582C26.5857 29.8791 27.1066 30.4187 27.6462 30.9396C28.3159 31.6093 28.7625 31.6093 29.4322 30.9582C30.5857 29.8047 31.7206 28.6698 32.8555 27.5163C32.9485 27.4233 33.0415 27.3303 33.1159 27.2186C33.3764 26.8466 33.3206 26.307 33.0043 25.9907C32.6694 25.6559 32.1671 25.6186 31.7764 25.9163C31.5532 26.0838 31.3671 26.307 31.1625 26.4931C30.3066 27.3489 29.4322 28.2233 28.5206 29.1349Z" fill="#5ED1C0"/><path d="M31.5719 10.4372C31.3115 10.4558 31.1626 10.4558 31.0324 10.4558C29.0045 10.4558 26.9952 10.4558 24.9673 10.4558C23.0696 10.4558 21.8789 9.2651 21.8789 7.36742C21.8789 5.17207 21.8789 2.95812 21.8789 0.688354C22.0091 0.762773 22.1208 0.781378 22.1952 0.855796C22.4557 1.06045 22.7161 1.2651 22.9394 1.48835C25.5998 4.20463 28.2417 6.90231 30.8836 9.61859C31.1068 9.86045 31.2929 10.1209 31.5719 10.4372Z" fill="#5ED1C0"/></g><defs><clipPath id="clip0_96_253"><rect width="40" height="40" fill="white"/></clipPath></defs></svg>' }} />
                    </div>
                </div>
            </section>
            <section className="py-10 bg-linear-to-l from-[#1F4567] to-secondary md:py-15 lg:py-15 xl:py-15 2xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="text-center max-w-9/10 mx-auto mb-10 lg:max-w-2/3">
                        <h3 className="text-lg font-commissioner font-medium text-primary mb-0 lg:mb-2 xl:mb-1 2xl:mb-2">PRICING</h3>
                        <h2 className="text-[30px] text-white font-bold mb-2 md:mb-2 md:text-[40px] lg:mb-4 xl:text-[40px] xl:mb-2 2xl:text-[50px] 2xl:mb-4">Choose your Fortipii plan</h2>
                        <p className="text-base font-commissioner text-white font-normal md:text-lg lg:text-lg xl:text-lg 2xl:text-xl">Start with a simple trial, then move into Shield, Guardian, or Fortress as your scanning, redaction, and email protection needs grow. Final pricing can be tuned for number of seats and locations.</p>
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
                        <h2 className="text-[32px] font-extrabold text-secondary leading-8 md:leading-10 mb-4 md:text-[40px] lg:mb-4 lg:text-[46px] lg:leading-12 xl:text-[50px] xl:leading-14">Frequently Asked Questions</h2>
                        <p className="text-xl font-commissioner text-[#4B5563] font-normal max-w-full mx-auto xl:max-w-[90%] xl:text-lg 2xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua utenim ad minim veniam.</p>
                    </div>
                    <div className="max-w-full px-5 py-5 bg-white shadow-sm mx-auto mt-5 rounded-[32px] md:rounded-[40px] md:mt-15 md:max-w-9/10 md:px-10 md:py-5 lg:rounded-[60px] lg:mt-5 lg:px-10 lg:py-10 xl:mt-15 xl:max-w-3/4 xl:px-15 xl:py-10 2xl:max-w-2/3 2xl:px-20 2xl:py-15">
                        <div className={`border-b ${openFaq === 0 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(0)}>
                                What does Fortipii actually do?
                                {openFaq === 0 ?
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
                            <div className={`${openFaq === 0 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">Fortipii identifies and fortifies sensitive client data across your systems so it’s protected and inaccessible to unauthorized access. <br />In simple terms: we make your data uninteresting to steal.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 1 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(1)}>
                                Why is there a one-time full scan?
                                {openFaq === 1 ?
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
                            <div className={`${openFaq === 1 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">The full scan establishes a clean, secure baseline. It allows Fortipii to find where sensitive client data lives and ensure it’s properly protected from day one. <br /> It’s a one-time setup — not a recurring charge.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 2 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(2)}>
                                How long does setup take?
                                {openFaq === 2 ?
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
                            <div className={`${openFaq === 2 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">Most offices are fully scanned and protected within days, not weeks.After that, Fortipii runs quietly in the background.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 3 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(3)}>
                                Do I need IT staff to use Fortipii?
                                {openFaq === 3 ?
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
                            <div className={`${openFaq === 3 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">No. Fortipii is designed for real offices, not IT departments.If you can follow basic setup steps, you’re good.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 4 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(4)}>
                                Will Fortipii slow down our systems?
                                {openFaq === 4 ?
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
                            <div className={`${openFaq === 4 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">No. Fortipii is lightweight and designed to work without disrupting daily operations.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 5 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(5)}>
                                Is Fortipii compliant with tax and privacy regulations?
                                {openFaq === 5 ?
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
                            <div className={`${openFaq === 5 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">Fortipii supports best practices for protecting personally identifiable information (PII).We’re happy to discuss compliance needs based on your firm size and requirements.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 6 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(6)}>
                                What happens after the scan?
                                {openFaq === 6 ?
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
                            <div className={`${openFaq === 6 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">Once your data is fortified, Fortipii continues protecting it through your monthly subscription — no repeated scans, no constant alerts.</p>
                            </div>
                        </div>
                        <div className={`border-b ${openFaq === 7 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(7)}>
                                Is Fortipii only for tax offices?
                                {openFaq === 7 ?
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
                            <div className={`${openFaq === 7 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">No, but it’s built with tax and accounting firms in mind.Any business handling sensitive client data can benefit.</p>
                            </div>
                        </div>
                        <div className={` ${openFaq === 8 ? "border-primary" : "border-[#04396B]"} mb-4`}>
                            <button className="text-xl text-secondary font-semibold cursor-pointer w-full py-4 text-left flex justify-between hover:text-primary xl:py-2 2xl:text-2xl 2xl:py-4" onClick={() => setOpenFaq(8)}>
                                How do I get started?
                                {openFaq === 8 ?
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
                            <div className={`${openFaq === 8 ? "max-h-max pt-2 pb-4" : "max-h-0"} overflow-hidden transition-300`}>
                                <p className="text-lg text-[#4B5563] font-commissioner leading-7 2xl:text-xl 2xl:leading-8">Click Get Started, choose your office size, and we’ll guide you through next steps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;