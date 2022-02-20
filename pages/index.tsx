import Head from 'next/head'
import Link from 'next/link';
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';
import { CheckCircleIcon } from "@heroicons/react/outline";
import Header from "../components/Header";
import Banner from '../components/Banner';
import GroupTours from '../components/GroupTours';
import Footer from '../components/Footer';
import { motion } from "framer-motion";

interface Props {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  return (
    <div className=" flex w-full h-full bg-gray-50 md:bg-white">
      <Head>
        <title>Paakhi</title>
        <link rel="icon" href="/paakhimage.ico" />
      </Head>
      <div className="overflow-y-scroll overflow-hidden scrollbar-hide scroll-smooth">
<Header />

<Banner />

  <div 
  className="flex justify-center p-7 md:p-10 bg-[#777777]">
    <h1 className="relative font-semibold text-xl md:text-2xl lg:text-3xl text-white">Our Services</h1>
    <h1 className="absolute p-3 md:p-6 justify-center font-extrabold text-green-500">____________</h1>
  </div>

  <motion.div
                  initial={{ opacity: 0, y: 100 }} 
                  whileInView = {{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition = {{ type: "tween", duration: 0.7 }}
  className="md:flex space-y-0 p-10 text-xl md:text-2xl font-semibold justify-around truncate">
    <div className="flex-col md:space-y-20 space-y-10 md:pl-6 md:pt-9">
      <div className=" flex flex-row items-center gap-3 ">
        <CheckCircleIcon className="h-8 w-8 md:h-9 md:w-9 text-green-500 m-1 md:m-2 p-1 border rounded-full hover:border-green-500 ease-linear duration-300"/>
        <h1 className=" ">Flight Bookings</h1>
      </div>
      <div className=" flex flex-row items-center gap-3 ">
        <CheckCircleIcon className="h-8 w-8 md:h-9 md:w-9 text-green-500 m-1 md:m-2 p-1 border rounded-full hover:border-green-500 ease-linear duration-300"/>
      <h1 className=" ">No hidden charges!!</h1>
      </div>
    </div>

        <div className="flex-col md:space-y-20 space-y-10 md:pl-6 pt-9">
      <div className=" flex flex-row items-center gap-3 ">
        <CheckCircleIcon className="h-8 w-8 md:h-9 md:w-9 text-green-500 m-1 md:m-2 p-1 border rounded-full hover:border-green-500 ease-linear duration-300"/>
        <h1 className=" ">100% Customisable Tour</h1>
      </div>
      <div className=" flex flex-row items-center gap-3 ">
        <CheckCircleIcon className="h-8 w-8 md:h-9 md:w-9 text-green-500 m-1 md:m-2 p-1 border rounded-full hover:border-green-500 ease-linear duration-300"/>
      <h1 className=" ">Customer Support 24*7 </h1>
      </div>
    </div>    
  </motion.div>  

  <GroupTours posts={posts} />

  <motion.div 
                  initial={{ opacity: 0,}} 
                  whileInView = {{ opacity: 1,}}
                  viewport={{ once: true, amount: 0.3 }}
                  transition = {{ type: "tween", duration: 0.4 }}
  className=' bg-[url("https://images.unsplash.com/photo-1625315642929-3774ba1d1af4")] bg-fixed flex flex-col items-center justify-center h-96 w-full bg-cover bg-center mt-24'>
      <motion.h1 
                      initial={{ opacity: 0, y: 100 }} 
                      whileInView = {{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition = {{ type: "tween", duration: 0.7 }}
      className=" font-bold text-white text-4xl md:text-5xl text-center mt-10">Why Paakhi Travels?</motion.h1>
      <motion.h3 
                      initial={{ opacity: 0, y: 100 }} 
                      whileInView = {{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition = {{ type: "tween", duration: 0.7 }}
      className=" text-white text-center md:text-lg mt-9 max-w-5xl mb-10">Paakhi provides you with a complete travel plan to cater your complete travel needs. Be it group tours, solo adventures, women centric travel plans or even senior citizens vacation, we got everything covered. The name Paakhi means a bird, and just like a bird we can take you to places you would have always dreamt of. Paakhi, by a traveler for the travelers.
      <span className=' flex flex-col mt-2 md:mt-5'>Our founder curates every tour personally.</span>
      </motion.h3>
  </motion.div>

  <Footer />
      </div>
    </div>
  )
}

export const getServerSideProps= async() => {
  const query = `*[_type == 'post']{
    _id,
    title,
    description,
    mainImage,
    postImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};