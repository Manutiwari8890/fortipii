function Signup(){
    return (
        <>
            <section className="pt-10 pb-10 lg:pt-15 lg:pb-10 2xl:pt-20 2xl:pb-10">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="shadow-sm mx-auto max-w-[500px] px-10 py-10 mt-15 rounded-4xl">
                        <h2 className="text-center text-4xl font-bold text-secondary mb-6">Sign<span className="text-primary">Up</span></h2>
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="fname" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-1">First Name</label>
                                <input type="text" id="fname" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" placeholder="john" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="lname" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-1">Last Name</label>
                                <input type="text" id="lname" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" placeholder="Doe" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="email" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-1">Email</label>
                                <input type="email" id="email" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" placeholder="info@example.com" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-1">Password</label>
                                <input type="password" id="password" className="text-base text-secondary border border-[#D2D2D2] rounded-xl px-4 py-4 w-full focus:border-primary" placeholder="* * * * * * * * * * *" />
                            </div>
                            <button className="btn-primary bg-secondary w-full font-commissioner text-lg relative font-medium text-white py-4 px-8 rounded-full cursor-pointer mx-auto">SignUp Now</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;