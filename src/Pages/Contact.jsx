import { Link } from "react-router-dom";

function Contact(){
    return (
        <>
            <section className="py-10 bg-primary/5 relative bg-[url('/assets/images/particles-bg.png')] bg-center bg-cover mt-20 xl:mt-20 2xl:mt-25">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="text-center content-center min-h-100 max-w-2/3 mx-auto xl:min-h-75 2xl:min-h-100">
                        <h1 className="text-[70px] text-secondary font-black xl:text-[54px] 2xl:text-[70px]"><span className="text-primary">Contact</span> Us</h1>
                        <p className="text-xl text-[#4B5563] leading-8 mt-2 font-commissioner max-w-[90%] mx-auto xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="w-1/2 mx-auto grid grid-cols-2 gap-8 xl:w-3/4 2xl:w-1/2">
                        <div className="flex items-center gap-4 p-6 rounded-2xl border border-[#EEEEEE]">
                            <div className="bg-primary/10 w-16 h-16 rounded-full text-center content-center">
                                <svg className="w-8 h-8 text-primary mx-auto" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3594 2.32031C14.836 3.79688 15.75 5.73047 15.75 7.83984C15.75 12.1289 12.1641 15.6445 7.83989 15.6445C6.53911 15.6445 5.27349 15.293 4.11333 14.6953L4.86374e-05 15.75L1.08989 11.707C0.421924 10.5469 0.0352049 9.21094 0.0352049 7.80469C0.0352049 3.51562 3.55083 0 7.83989 0C9.94927 0 11.918 0.84375 13.3594 2.32031ZM7.83989 14.3086C11.4258 14.3086 14.4141 11.3906 14.4141 7.83984C14.4141 6.08203 13.6758 4.46484 12.4454 3.23438C11.2149 2.00391 9.5977 1.33594 7.87505 1.33594C4.28911 1.33594 1.37114 4.25391 1.37114 7.80469C1.37114 9.03516 1.7227 10.2305 2.35552 11.2852L2.5313 11.5312L1.86333 13.9219L4.32427 13.2539L4.5352 13.3945C5.55474 13.9922 6.67974 14.3086 7.83989 14.3086ZM11.4258 9.45703C11.6016 9.5625 11.7422 9.59766 11.7774 9.70312C11.8477 9.77344 11.8477 10.1602 11.6719 10.6172C11.4961 11.0742 10.7227 11.4961 10.3711 11.5312C9.73833 11.6367 9.24614 11.6016 8.01567 11.0391C6.04692 10.1953 4.7813 8.22656 4.67583 8.12109C4.57036 7.98047 3.90239 7.06641 3.90239 6.08203C3.90239 5.13281 4.39458 4.67578 4.57036 4.46484C4.74614 4.25391 4.95708 4.21875 5.0977 4.21875C5.20317 4.21875 5.3438 4.21875 5.44927 4.21875C5.58989 4.21875 5.73052 4.18359 5.9063 4.57031C6.04692 4.95703 6.4688 5.90625 6.50395 6.01172C6.53911 6.11719 6.57427 6.22266 6.50395 6.36328C6.15239 7.10156 5.73052 7.06641 5.94145 7.41797C6.71489 8.71875 7.45317 9.17578 8.61333 9.73828C8.78911 9.84375 8.89458 9.80859 9.0352 9.70312C9.14067 9.5625 9.52739 9.10547 9.63286 8.92969C9.77349 8.71875 9.91411 8.75391 10.0899 8.82422C10.2657 8.89453 11.2149 9.35156 11.4258 9.45703Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="text-left flex-1">
                                <h4 className="text-3xl font-semibold text-secondary font-commissioner mb-3">Trusted Partner</h4>
                                <Link to="tel:+0000 111 22 33" className="text-base font-commissioner text-primary">+0000 111 22 33</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-6 rounded-2xl border border-[#EEEEEE]">
                            <div className="bg-primary/10 w-16 h-16 rounded-full text-center content-center">
                                <svg className="w-8 h-8 text-primary mx-auto" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.6485 4.46484C17.7891 4.35938 18 4.46484 18 4.64062V11.8125C18 12.7617 17.2266 13.5 16.3125 13.5H1.68755C0.738331 13.5 4.95911e-05 12.7617 4.95911e-05 11.8125V4.64062C4.95911e-05 4.46484 0.175831 4.35938 0.316456 4.46484C1.12505 5.09766 2.14458 5.87109 5.73052 8.47266C6.4688 9 7.73442 10.1602 9.00005 10.1602C10.2305 10.1602 11.5313 9 12.2344 8.47266C15.8204 5.87109 16.8399 5.09766 17.6485 4.46484ZM9.00005 9C8.1563 9.03516 6.99614 7.98047 6.39849 7.55859C1.72271 4.18359 1.37114 3.86719 0.316456 3.02344C0.105518 2.88281 4.95911e-05 2.63672 4.95911e-05 2.35547V1.6875C4.95911e-05 0.773438 0.738331 0 1.68755 0H16.3125C17.2266 0 18 0.773438 18 1.6875V2.35547C18 2.63672 17.8594 2.88281 17.6485 3.02344C16.5938 3.86719 16.2422 4.18359 11.5665 7.55859C10.9688 7.98047 9.80864 9.03516 9.00005 9Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="text-left flex-1">
                                <h4 className="text-3xl font-semibold text-secondary font-commissioner mb-3">Mail</h4>
                                <Link to="mailto:info@fortify.com" className="text-base font-commissioner text-primary">info@fortify.com</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 px-20 py-15 bg-white shadow-sm mx-auto mt-15 rounded-4xl xl:py-10 2xl:py-15">
                        <div className="form-wrapper mx-auto">
                            <h2 className="text-secondary text-[50px] font-bold text-center mb-10 xl:text-[40px] 2xl:text-[50px]">Write us a message</h2>
                            <form>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 xl:gap-y-6 2xl:gap-y-10">
                                    <div className="form-group">
                                        <label htmlFor="fname" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-3 xl:mb-2 2xl:mb-3">First Name</label>
                                        <input type="text" id="fname" placeholder="John" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lname" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-3 xl:mb-2 2xl:mb-3">Last Name</label>
                                        <input type="text" id="lname" placeholder="Doe" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-3 xl:mb-2 2xl:mb-3">Email address</label>
                                        <input type="email" id="email" placeholder="info@example.com" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-3 xl:mb-2 2xl:mb-3">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="000 111 2222" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="message" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-3 xl:mb-2 2xl:mb-3">Message</label>
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