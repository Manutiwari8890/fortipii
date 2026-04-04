import { motion } from "framer-motion";

function LightCard({data}){
    const fadeTop = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            <motion.div 
                variants={fadeTop}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1 }}
                className={`${data?.dark ? "bg-primary" : "bg-white"} border border-gray p-6 rounded-2xl hover:border-accent hover:-translate-y-1`}>
                <div className={`icon ${data?.dark ? "bg-accent/15" : "bg-light"} w-12 h-12 rounded-xl content-center mb-4`} dangerouslySetInnerHTML={{ __html: data?.icon}}>
                </div>
                <h4 className={`${data?.dark ? "text-white" : "text-primary"} font-semibold family-normal mb-2`}>{data?.title}</h4>
                <p className={`${data?.dark ? "text-white/80" : "text-slate"} text-sm family-normal leading-6`}>{data?.detail}</p>
            </motion.div>
        </>
    )
}

export default LightCard;