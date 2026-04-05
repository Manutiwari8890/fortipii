import { motion } from "framer-motion";

function IconCard({data, variants, transition}){
    return (
        <>
            <motion.div
                variants={variants}
                viewport={{ once: true }}
                transition={transition}
                className={`${data?.dark ? "bg-primary" : "bg-secondary"} border border-gray px-6 py-8 rounded-3xl hover:border-accent hover:-translate-y-1`}
            >
                <div className={`icon ${data?.dark ? "bg-accent/15" : "bg-light"} w-12 h-12 rounded-xl content-center mb-4`} dangerouslySetInnerHTML={{ __html: data?.icon}}>
                </div>
                <h4 className={`${data?.dark ? "text-white" : "text-primary"} font-semibold family-normal mb-2`}>{data?.title}</h4>
                <p className={`${data?.dark ? "text-white/80" : "text-slate"} text-sm family-normal leading-6`}>{data?.detail}</p>
            </motion.div>
        </>
    )
}

export default IconCard;