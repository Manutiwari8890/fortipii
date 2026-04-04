import { Link } from "react-router-dom"
import { motion } from "framer-motion";

function BlogCard({data}) {
    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <Link
            to={`/blog/${data?.slug}`}  className="blog-card flex flex-col gap-2 border border-gray bg-white rounded-t-2xl group hover:border-accent rounded-b-2xl col-span-2 lg:col-span-1 hover:-translate-y-1">
                <div className="img-container overflow-hidden rounded-t-2xl lg:min-h-50 xl:min-h-40">
                    <img src={data?.image} alt={data?.title} className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105" />
                </div>
                <div className="text-left p-6 md:py-4 md:px-6 2xl:p-8 flex flex-col justify-between h-full">
                    <div className="text-left">
                        <p className="text-teal text-xs uppercase mb-3 font-semibold">{data?.category}</p>
                        <h2 className="text-base text-primary family-normal font-bold hover:text-[#2e988b] ">{data?.title}</h2>
                        <p className="text-sm text-primary my-3 family-normal font-medium">{data?.text}</p>
                    </div>
                    <div className="flex gap-3 items-center justify-between">
                        <p className="text-sm text-muted/90 font-semibold">by {data?.author}</p>
                        <p className="text-sm text-muted/90 font-semibold">{data?.date}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogCard;