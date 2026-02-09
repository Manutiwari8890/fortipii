import { Link } from "react-router-dom";
import BlogCard from "../Componments/BlogCard";

function Blog(){
    return (
        <>
            <section className="py-10 bg-primary/5 relative bg-[url('/assets/images/particles-bg.png')] bg-center bg-cover mt-20 xl:mt-20 2xl:mt-25">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="text-center content-center min-h-45 max-w-full mx-auto md:min-h-50 md:max-w-9/10 lg:max-w-2/3 lg:min-h-50 xl:min-h-75 2xl:min-h-100">
                        <h1 className="text-[36px] text-secondary font-black leading-10 md:leading-13 md:text-[48px] lg:leading-14 lg:text-[54px] 2xl:text-[70px]">Explore Our <span className="text-primary">Blog & Articles</span></h1>
                        <p className="text-sm text-[#4B5563] leading-5.5 mt-2 font-commissioner max-w-full mx-auto md:text-base md:leading-7 lg:max-w-9/10 lg:text-base lg:leading-7 xl:text-lg xl:leading-7 2xl:text-xl 2xl:leading-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 md:pt-15 md:pb-5 2xl:py-20">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="grid grid-cols-1 gap-y-10 md:gap-y-10 md:gap-x-5 md:grid-cols-4 lg:grid-cols-3 xl:gap-10">
                        <div className="grid grid-cols-2 col-span-3 gap-2 border border-[#0000001A] rounded-3xl group hover:border-primary md:gap-5 md:border-0 lg:gap-5 md:col-span-4 lg:col-span-3 xl:gap-10">
                            <div className="img-container overflow-hidden bg-[#F5FDF9] rounded-3xl min-h-65 col-span-2 lg:col-span-1 lg:min-h-75 xl:min-h-85 2xl:min-h-100">
                                <img src="/assets/images/blog1.png" alt="It is a long established fact that a reader will be distracted by the readable." className="w-full h-full object-cover rounded-3xl group-hover:scale-105" />
                            </div>
                            <div className="text-left h-full content-center col-span-2 p-6 md:p-0 lg:col-span-1">
                                <p className="text-lg font-commissioner font-medium text-primary mb-3 md:mb-3 lg:text-base 2xl:text-lg 2xl:mb-5">Built for Small Offices</p>
                                <Link className="text-[28px] text-secondary leading-[34px] font-bold hover:text-[#2e988b] md:text-[32px] md:leading-[38px] 2xl:text-[40px] 2xl:leading-[46px]">It is a long established fact that a reader will be distracted by the readable.</Link>
                                <div className="flex gap-2 items-center mt-3 mb-3 lg:mt-4 xl:gap-3 xl:mt-6 2xl:mt-8 2xl:mb-5">
                                    <p className="text-lg text-[#838B9C] font-commissioner 2xl:text-xl">by <span className="text-primary">John Doe</span></p>
                                    <span className="inline-block bg-[#BEC3CE] w-2 h-2 rounded-full  2xl:w-3 2xl:h-3"></span>
                                    <p className="text-lg text-[#838B9C] font-commissioner 2xl:text-xl">June 19, 2025</p>
                                </div>
                                <p className="text-base text-[#4B5563] font-commissioner md:text-lg 2xl:text-xl">Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut imperdiet a venenatis vitae justo….</p>
                            </div>
                        </div>
                        <BlogCard data={{title : "Folder-based scanning", text : "Scan desktops, mapped OneDrive/Google Drive folders, and shared drives for SSNs, DOBs, emails, TINs, bank numbers and more.", image : "/assets/images/blog2.png", author : "John Doe", date : "June 19, 2025"}} />
                        <BlogCard data={{title : "Smart redaction", text : "Redact Private Client Data in PDFs and images while preserving layout. Keep redacted copies for workflow and preserve originals in a vault.", image : "/assets/images/blog3.png", author : "John Doe", date : "June 19, 2025"}} />
                        <BlogCard data={{title : "Email & attachment monitoring", text : "Monitor high-risk mailboxes (O365, Gmail, etc.) and flag, isolate, or redact sensitive emails and attachments.", image : "/assets/images/blog1.png", author : "John Doe", date : "June 19, 2025"}} />
                        <BlogCard data={{title : "Folder-based scanning", text : "Scan desktops, mapped OneDrive/Google Drive folders, and shared drives for SSNs, DOBs, emails, TINs, bank numbers and more.", image : "/assets/images/blog2.png", author : "John Doe", date : "June 19, 2025"}} />
                        <BlogCard data={{title : "Smart redaction", text : "Redact Private Client Data in PDFs and images while preserving layout. Keep redacted copies for workflow and preserve originals in a vault.", image : "/assets/images/blog3.png", author : "John Doe", date : "June 19, 2025"}} />
                        <BlogCard data={{title : "Email & attachment monitoring", text : "Monitor high-risk mailboxes (O365, Gmail, etc.) and flag, isolate, or redact sensitive emails and attachments.", image : "/assets/images/blog1.png", author : "John Doe", date : "June 19, 2025"}} />
                    </div>
                    <div className="pt-8 pb-0 flex gap-2 justify-center items-center md:gap-5 md:pt-8 md:pb-0 xl:py-8 xl:gap-3 2xl:gap-5">
                        <button className="w-10 h-10 text-center content-center rounded-full text-primary/30 bg-primary/10 cursor-not-allowed md:w-12 md:h-12 2xl:w-15 2xl:h-15">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9736 7.63794C17.9485 7.56352 17.9234 7.4984 17.8983 7.42399C17.7392 7.04259 17.4713 6.82864 17.0946 6.78213C17.0108 6.77282 16.9187 6.77282 16.835 6.77282C12.9671 6.77282 9.09922 6.77282 5.22294 6.77282C5.15596 6.77282 5.08061 6.77282 4.97177 6.77282C5.03875 6.6984 5.08061 6.64259 5.12247 6.59608C6.31131 5.26585 7.50852 3.94492 8.69735 2.61468C9.0741 2.19608 9.18293 1.64724 8.89828 1.21934C8.63875 0.828637 8.31224 0.475149 7.96061 0.177475C7.62573 -0.110897 7.16526 -0.0271765 6.83875 0.2798C6.79689 0.31701 6.75503 0.363521 6.71317 0.410033C4.59503 2.76352 2.47689 5.11701 0.358749 7.4705C-0.0263672 7.8984 -0.110088 8.41934 0.149446 8.88445C0.208052 8.98678 0.283401 9.0798 0.358749 9.17282C2.47689 11.5263 4.59503 13.8798 6.71317 16.2426C7.19038 16.7728 7.75968 16.7728 8.24526 16.2519C8.39596 16.0845 8.55503 15.917 8.70573 15.7403C9.17456 15.2193 9.17456 14.5868 8.70573 14.0751C7.50852 12.7449 6.30294 11.4147 5.09735 10.0751C5.05549 10.0286 5.01363 9.97282 4.93828 9.8891C5.03875 9.8891 5.10573 9.8891 5.1727 9.8891C9.01549 9.8891 12.8667 9.8891 16.7094 9.8891C17.4881 9.8891 17.689 9.74026 17.9736 8.94957C17.9736 8.52166 17.9736 8.08445 17.9736 7.63794Z" fill="currentColor" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 text-center text-lg font-commissioner font-semibold content-center rounded-full cursor-pointer text-white bg-primary md:w-12 md:h-12 2xl:w-15 2xl:h-15">
                            1
                        </button>
                        <button className="w-10 h-10 text-center text-lg font-commissioner font-semibold content-center rounded-full cursor-pointer text-primary bg-primary/10 hover:text-white hover:bg-primary md:w-12 md:h-12 2xl:w-15 2xl:h-15">
                            2
                        </button>
                        <button className="w-10 h-10 text-center text-lg font-commissioner font-semibold content-center rounded-full cursor-pointer text-primary bg-primary/10 hover:text-white hover:bg-primary md:w-12 md:h-12 2xl:w-15 2xl:h-15">
                            3
                        </button>
                        <button className="w-10 h-10 text-center content-center rounded-full cursor-pointer text-primary bg-primary/10 hover:text-white hover:bg-primary md:w-12 md:h-12 2xl:w-15 2xl:h-15">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" className="mx-auto" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.63794C0.0251163 7.56352 0.0502326 7.4984 0.0753488 7.42399C0.234419 7.04259 0.502326 6.82864 0.87907 6.78213C0.962791 6.77282 1.05488 6.77282 1.1386 6.77282C5.00651 6.77282 8.87442 6.77282 12.7507 6.77282C12.8177 6.77282 12.893 6.77282 13.0019 6.77282C12.9349 6.6984 12.893 6.64259 12.8512 6.59608C11.6623 5.26585 10.4651 3.94492 9.27628 2.61468C8.89954 2.19608 8.7907 1.64724 9.07535 1.21934C9.33488 0.828637 9.6614 0.475149 10.013 0.177475C10.3479 -0.110897 10.8084 -0.0271765 11.1349 0.2798C11.1767 0.31701 11.2186 0.363521 11.2605 0.410033C13.3786 2.76352 15.4967 5.11701 17.6149 7.4705C18 7.8984 18.0837 8.41934 17.8242 8.88445C17.7656 8.98678 17.6902 9.0798 17.6149 9.17282C15.4967 11.5263 13.3786 13.8798 11.2605 16.2426C10.7833 16.7728 10.214 16.7728 9.72837 16.2519C9.57767 16.0845 9.4186 15.917 9.26791 15.7403C8.79907 15.2193 8.79907 14.5868 9.26791 14.0751C10.4651 12.7449 11.6707 11.4147 12.8763 10.0751C12.9181 10.0286 12.96 9.97282 13.0353 9.8891C12.9349 9.8891 12.8679 9.8891 12.8009 9.8891C8.95814 9.8891 5.10698 9.8891 1.26419 9.8891C0.485581 9.8891 0.284651 9.74026 0 8.94957C0 8.52166 0 8.08445 0 7.63794Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Blog;