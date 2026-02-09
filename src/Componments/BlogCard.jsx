import { Link } from "react-router-dom"

function BlogCard({data}) {
    return (
        <>
            <div className="blog-card flex flex-col gap-2 border border-[#0000001A] rounded-3xl group hover:border-primary col-span-2 lg:col-span-1">
                <div className="img-container overflow-hidden bg-[#F5FDF9] rounded-3xl min-h-65 md:min-h-55 lg:min-h-50 xl:min-h-55 2xl:min-h-71">
                    <img src={data?.image} alt={data?.title} className="w-full h-full object-cover rounded-3xl group-hover:scale-105" />
                </div>
                <div className="text-left p-6 md:py-4 md:px-6 2xl:p-8 flex flex-col justify-between h-full">
                    <Link className="text-[28px] text-secondary leading-[34px] font-bold hover:text-[#2e988b] lg:text-[24px] lg:leading-[30px] 2xl:text-[28px] 2xl:leading-[34px]">{data?.title}</Link>
                    <p className="text-base text-[#4B5563] font-commissioner mt-2 2xl:text-lg">{data?.text}</p>
                    <div className="flex gap-3 items-center mt-4 lg:mt-3 2xl:mt-5">
                        <p className="text-xl text-[#838B9C] font-commissioner md:text-lg 2xl:text-xl">by <span className="text-primary">{data?.author}</span></p>
                        <span className="inline-block bg-[#BEC3CE] w-3 h-3 rounded-full md:w-2 md:h-2 2xl:w-3 2xl:h-3"></span>
                        <p className="text-xl text-[#838B9C] font-commissioner md:text-base 2xl:text-xl">{data?.date}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard;