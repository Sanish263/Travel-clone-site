import Footer from "../components/Footer"
import Header from "../components/Header"
import { motion } from "framer-motion"

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
    exit: { y: 150, opacity: 0, transition: { duration: 0.7, ease: easing } },
    enter: {
    y: 0,
    opacity: 1,
    transition: {
        duration: 0.9,
        ease: easing,
        type:"tween"
        },
    }, 
};

const textVariants = {
    exit: { y: 100, opacity: 0, transition: { duration: 0.7, ease: easing } },
    enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.9, ease: easing, type:"tween", }
        }
};


function about() {
    return (
        <div className="">
            <Header />
            <motion.div 
            initial="exit" whileInView="enter" exit="exit"
            className="">
                <motion.div 
                variants={textVariants} viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col max-w-7xl mx-auto px-5 md:px-12 pt-9">
                    <h1 className=" text-[33px] font-semibold">About Me</h1>
                    <h1 className=" justify-start -mt-4 text-green-500 text-xl font-[1000]">__________</h1>
                </motion.div>

                <motion.div 
                        variants={imageVariants}
                        viewport={{ once: true, amount: 0.3 }}
                className=" flex flex-col md:flex-row max-w-7xl mx-auto px-5 md:px-12 pt-9">
                    <img className=" h-[28rem] w-96 bg-cover object-cover" src="https://i0.wp.com/paakhitravels.com/wp-content/uploads/2022/01/IMG-20210416-WA0010.jpg?resize=894%2C1024&ssl=1" alt="" />
                    <div className=" flex flex-col md:flex-row items-center relative">
                        <div className=" flex flex-row items-center md:-space-x-80 -space-x-14">
                            <div className="bg-green-500 h-1 w-72 md:w-[35rem] rotate-90 my-48 mx-72 -ml-16 md:-ml-0"></div>
                            <h1 className="text-2xl text-left font-semibold italic absolute md:relative pl-40 md:pl-0 text-clip">The name Paakhi means a bird, and just like a bird we can take you to places you would have only dreamt of.</h1>
                        </div>
                    </div>
                </motion.div>

                <motion.hr  
                variants={textVariants} viewport={{ once: true, amount: 0.3 }}
                className=" flex lg:max-w-7xl md:mx-auto lg:mx-[360px] mt-5 border border-gray-400"/>

                <motion.div 
                variants={textVariants} viewport={{ once: true, amount: 0.3 }}
                className=" flex flex-col space-x-10 space-y-5 max-w-7xl mx-auto text-gray-500 text-lg font-semibold text-left mt-7 mb-7">
                    <h1 className=" mx-10">Imagine a messed up woman, still trying to figure out this thing called life and the purpose to it. Constantly in a tussle with her own self, constantly unsure about the choices, constantly confused.</h1>
                    <h1>On one of her monotonous days in the corporate world this woman, out of the blue, decides to go somewhere, on her own, just to clear her head, to get a grip. And that trip changed something inside her. As cliche as it may sound she was bitten by the travel bug</h1>
                    <h1>Now after countless solo trips, group tours to some of the harshest, and remotest regions in India she can confidently understand the dilemma faced by travellers in India. Using all her personal experiences she had a plan to make travelling easy, memorable, fun, simple and yet possible for all budgets. </h1>
                    <h1>Be it a Solo trip, a group tour or whatever you fancy, she might just have the answers to all your travel requirements. She will almost certainly understand all your queries, however weird or silly they may be. You can choose from the curated plans or create your own, fabulous holiday. And what’s more, if this so-called fabulous holiday plan of yours is as fancy as you think, then she might just pack her bags and accompany you on the tour!!!</h1>
                    <h1>Mother of one but a kid by heart herself she goes by the name of :</h1>
                    <h1 className=" font-bold text-3xl text-black">Gauri S</h1>
                    <h1>Founder -Paakhi Travels</h1>
                </motion.div>
            </motion.div>
            <div className=" w-full ">
                <Footer/>
            </div>
        </div>
    )
}

export default about