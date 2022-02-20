import { motion } from "framer-motion"

function Banner() {
  return (
        <motion.div
        initial={{ opacity: 0 }} 
        whileInView = {{ opacity: 1 }}
        viewport={{ once: true }}
        transition = {{ type: "tween", }}
        >
            <div className="flex md:bg-contain md:my-0 -mt-[29px] md:mt-0 object-contain">
                <img loading="lazy" src="https://i0.wp.com/paakhitravels.com/wp-content/uploads/2021/11/cropped-rana-sawalha-W_-6PWGbYaU-unsplash-edited-1.jpg?w=1920&ssl=1" alt="" />
            </div>
        </motion.div>
    )
}

export default Banner