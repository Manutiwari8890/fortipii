import { useState } from "react";

function Login(){

    const [loginDetail, setLoginDetail] = useState({
        username : "", password : ""
    })
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const errors = validate(loginDetail);
        setFormErrors(errors);
        if(!Object.values(errors).length){
            setLoading(true);
            try{
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            }catch(err){
                console.log(err)
            }finally{
            }
        }
        
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
        if (!values.username) {
            errors.username = "Username is required !"
        } else if (!regex.test(values.username)) {
            errors.username = "Username is not valid"
        }
        if(!values.password){
            errors.password = "Password is required !"
        }else if(values.password.length <= 8){
            errors.password = "Password must be 8 characters"
        }
        return errors
    }
    

    return (
        <>
            <section className="pt-10 pb-10 lg:pt-15 lg:pb-10 2xl:pt-20 2xl:pb-10">
                <div className="container px-2 lg:px-5 mx-auto z-1">
                    <div className="content-center md:min-h-[54vh] lg:min-h-[64vh] 2xl:min-h-[55vh]">
                        <div className="shadow-sm mx-auto max-w-[500px] px-10 py-10 mt-15 rounded-4xl">
                            <h2 className="text-center text-4xl font-bold text-secondary mb-6">Log<span className="text-primary">in</span></h2>
                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-4">
                                    <label htmlFor="email" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-1">Email</label>
                                    <input type="email" id="email" className={`text-base text-secondary border rounded-xl px-4 py-4 w-full ${formErrors?.username ? "border-red-600" : "border-[#D2D2D2] focus:border-primary"}`} placeholder="info@example.com" value={loginDetail?.username} onChange={(e) => setLoginDetail((prev) => ({...prev, username : e.target.value}))} autoComplete="off" />
                                    {formErrors?.username && <p className="text-base text-red-600 mt-1 font-commissioner">{formErrors?.username}</p>}
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password" className="inline-block w-full text-base font-semibold text-[#4B5563] mb-1">Password</label>
                                    <input type="password" id="password" className={`text-base text-secondary border rounded-xl px-4 py-4 w-full ${formErrors?.password ? "border-red-600" : "border-[#D2D2D2] focus:border-primary"}`} placeholder="* * * * * * * * * * *" value={loginDetail?.password} onChange={(e) => setLoginDetail((prev) => ({...prev, password : e.target.value}))} autoComplete="off" />
                                    {formErrors?.password && <p className="text-base text-red-600 mt-1 font-commissioner">{formErrors?.password}</p>}
                                </div>
                                <button className={`btn-primary bg-secondary w-full font-commissioner text-lg relative font-medium text-white py-4 px-8 rounded-full cursor-pointer mx-auto mt-2 min-h-15 disabled:opacity-70 disabled:hover:after:hidden disabled:cursor-not-allowed`} disabled={loading}>
                                    {!loading ? "Login" : 
                                        <div className="w-15 m-auto text-center p-2 relative">
                                            <div className="w-10 h-10 rounded-full border-5 border-recondary border-y-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
                                            <div className="w-5 h-5 rounded-full border-5 border-recondary border-y-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin reverse"></div>
                                        </div>
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Login;