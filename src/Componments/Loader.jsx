function Loader(){
    return(
        <>
            <section className="loader w-full h-full content-center bg-white fixed top-0 right-0 z-9999">
                <div className="w-40 m-auto text-center p-2 relative xl:w-30 2xl:w-40">
                    <img src="/assets/images/sheild.svg" alt="Loading" className="w-full" />
                    <div className="w-20 h-20 rounded-full border-10 border-recondary border-y-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
                    <div className="w-10 h-10 rounded-full border-8 border-recondary border-y-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin reverse"></div>
                </div>
            </section>
        </>
    )
}

export default Loader;