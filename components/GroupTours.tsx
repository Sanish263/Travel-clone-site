import Link from 'next/link';
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';
import { motion } from 'framer-motion';

interface Props {
    posts: Post[]
  }

function GroupTours({ posts }: Props) {

    return (
        <motion.div 
        initial={{ opacity: 0, y: 100 }} 
        whileInView = {{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition = {{ type: "tween", duration: 0.4 }}
        className=' max-w-7xl mx-auto '>
            <div className=" flex items-center justify-center mt-16 space-y-10">
                <h1 className=" relative font-semibold text-3xl">Group Tours!!</h1>
                <h1 className=" absolute p-5 justify-center font-extrabold text-green-500">____________</h1>
                <h3 className=" absolute pt-16 font-semibold text-md text-gray-500 text-center">"The Fastest way to make a friend for life is to travel with a stranger"</h3>
            </div>
        {/* Posts */}
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 m-9 my-20 md:my-16'>
        {posts.map(post => (
            <Link 
                key={post._id}
                href={`/post/${post.slug.current}`}>
                <motion.div
                initial={{ opacity: 0, y: 100 }} 
                whileInView = {{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition = {{ type: "tween", duration: 0.7, delay: 0.2 }}
                className=' group cursor-pointer border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-linear'>
                    <img
                    className=' h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out' 
                    src={urlFor(post.mainImage).url()!} 
                    alt="" />
                    <div className=' flex justify-between p-5 bg-white'>
                    <div>
                        <p className=' text-2xl font-semibold'>{post.title}</p>
                        <p className=' text-sm'>{post.description}</p>
                    </div>
                    </div>
                    <hr />
                    <div className=' flex p-10 justify-center'>
                        <button className=' border-2 border-green-500 font-semibold rounded-full m-1 py-2 px-10 text-green-500 hover:bg-green-500 hover:text-white duration-500'>CLICK FOR DETAILS!!</button>
                    </div>
                </motion.div>
            </Link>
            ))}
        </div>
        </motion.div>
    )
}

export default GroupTours