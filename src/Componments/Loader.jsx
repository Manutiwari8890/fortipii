function Loader(){
    return(
        <>
            <section className="loader w-full h-full content-center bg-white fixed top-0 right-0 z-9999">
                <div className="w-40 m-auto text-center p-2 relative xl:w-30 2xl:w-40">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 225 264" fill="none">
                        <path d="M11.4763 19.9947L108.059 1.00066C108.059 1.00066 115.418 -1.77896 125.536 1.9272L214.301 18.6049C214.301 18.6049 223.039 19.0682 223.039 27.407L224.419 115.892C224.419 115.892 223.959 158.512 208.782 185.382C208.782 185.382 189.005 232.172 132.895 257.189C132.895 257.189 124.157 261.358 121.397 262.285C121.397 262.285 112.659 265.528 103.92 260.432C103.92 260.432 44.1306 235.415 17.4553 181.676C17.4553 181.676 -3.24108 152.49 0.438274 73.2708V31.5765C0.438274 31.5765 -2.32124 21.3845 11.4763 19.9947Z" fill="#5ED1C0"/>
                    </svg>
                    <div className="w-15 h-15 rounded-full border-10 border-recondary border-y-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
                    <div className="w-8 h-8 rounded-full border-8 border-recondary border-y-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin reverse"></div>
                </div>
            </section>
        </>
    )
}

export default Loader;