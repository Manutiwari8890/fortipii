import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../Context/LoadingContext";
import { useParams } from "react-router-dom";

function SingleBlog(){
    const [content, setContent] = useState();
    const { loading, startLoading, stopLoading } = useContext(LoadingContext)
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const { slug } = useParams();

    useEffect(() => {
        const getDetail = async () => {
            startLoading();
            try {
                const response = await fetch(`${baseUrl}blog/${slug}`);
                const result = await response.json();

                if (!result?.status) {
                    throw new Error(result?.message);
                }
                setContent(result?.data)
            } catch (err) {
                console.log(err);
            } finally {
                stopLoading();
            }
        };

        getDetail();
    }, []);


    return (
        <>
            <section className="pt-10 pb-0 mt-15 md:py-10 lg:mt-20 xl:mt-20 2xl:mt-25">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="img-container bg-[#F5FDF9] rounded-3xl min-h-40 mb-10 md:min-h-75 lg:min-h-100 xl:min-h-50 xl:mb-10 2xl:min-h-100 2xl:mb-15">
                        {content?.image &&
                            <img src={content?.image} alt={content?.title} className="w-full h-full object-cover rounded-3xl" />                        
                        }
                    </div>
                    {content?.categories?.length > 0 &&
                        <p className="text-lg font-commissioner font-medium text-primary mb-3">
                            {content?.category?.map((cat, ind) => cat + (ind+1 !== content?.category?.length ? ',' : "") )}
                        </p>                    
                    }
                    <h1 className="text-[32px] text-secondary leading-[38px] font-bold lg:text-[36px] xl:leading-[40px] 2xl:text-[40px] 2xl:leading-[46px]">{content?.title.replace(/&amp;/g, "&")}</h1>
                    <div className="flex gap-3 items-center mt-5 mb-3  lg:mt-5 lg:mb-3 2xl:mt-8 2xl:mb-5">
                        <p className="text-xl text-[#838B9C] font-commissioner">by <span className="text-primary">{content?.author}</span></p>
                        <span className="inline-block bg-[#BEC3CE] w-3 h-3 rounded-full"></span>
                        <p className="text-xl text-[#838B9C] font-commissioner">{content?.date}</p>
                    </div>
                    <div className="pt-2 dynamic-content xl:pt-2 2xl:pt-5"
                        dangerouslySetInnerHTML={{ __html: content?.content }}
                    >
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog;