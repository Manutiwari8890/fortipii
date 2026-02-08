function IconCard({data}){
    return (
        <>
            <div className="icon-card px-8 py-12 border border-[#0000001A] rounded-3xl group hover:border-primary">
                <div className="icon mb-6" dangerouslySetInnerHTML={{ __html: data?.icon}}>
                </div>
                <h4 className="text-2xl font-semibold font-commissioner text-secondary mb-5">{data?.title}</h4>
                <p className="text-lg text-[#4B5563] font-commissioner xl:text-base 2xl:text-lg">{data?.detail}</p>
            </div>
        </>
    )
}

export default IconCard;