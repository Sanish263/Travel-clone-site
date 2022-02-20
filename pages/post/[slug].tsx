import Header from "../../components/Header"
import { Post } from "../../typings";
import { sanityClient, urlFor } from '../../sanity';
import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
    post: Post;
}

interface IFormInput {
    _id: string;
    name: string;
    email: string;
    contact: number;
    adults?: number;
    children?: number;
    comment: string;
}

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


function Post({ post }: Props) {

    const [submitted, setSubmitted] = useState(false);

    const { 
        register, 
        handleSubmit, 
        formState: {errors},
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async(data) => {
        fetch('/api/createInquiry', {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(()=> {
        setSubmitted(true);
    }).catch((err)=> {
        console.log(err);      
        setSubmitted(false);      
    });
};

    return (
        <main>
            <Header />

            <motion.article 
            initial="exit" animate="enter" exit="exit"
            className=' max-w-[76rem] mx-auto p-5'>
                <motion.div variants={textVariants}>
                <h1 className=' text-4xl font-semibold mt-10 mb-3'>{post.title}</h1>
                <h2 className=' text-xl font-light text-gray-500 mb-2'>{post.description}
                </h2>      
                <h1 className=" ml-[2px] -mt-3 font-extrabold text-green-500">____________</h1>
                </motion.div>

                <motion.img
                variants={imageVariants}
                    className= "mt-16"
                    src={urlFor(post.postImage).url()!} alt="" 
                    />

                <motion.div 
                variants={textVariants}
                className=' mt-10'>
                    <PortableText 
                    className=""
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={post.body}
                    serializers={{
                        h1: (props: any) => (
                            <h1 className=' text-2xl font-bold my-5' {...props} />
                        ),
                        h2: (props: any) => (
                            <h1 className=' text-4xl font-semibold my-10 mt-10' {...props} />
                        ),
                        h3: (props: any) => (
                            <h1 className='text-2xl font-semibold my-5 pt-7 flex' {...props} />
                        ),
                        h4: (props: any) => (
                            <h1 className='text-2xl -mt-7 -mb-2 text-green-500 flex' {...props} />
                        ),
                        normal: (props: any) => (
                            <h1 className=' text-lg font-semibold text-gray-500 my-5' {...props} />
                        ),
                        li: ({ children }: any) => (
                            <li className=' ml-4 list-disc text-xl font-semibold text-gray-700 my-5 underline'>{children}</li>
                        ),
                        link: ({ href, children }: any) => (
                            <a href={href} className=' text-blue-500 hover:underline'>{children}
                            </a>
                        ),
                    }}
                    />
                </motion.div> 
                </motion.article>

                <hr className = 'max-w-lg my-5 mx-auto border border-green-500' />

                {submitted ? (
                <Link href="/"><div className=' flex flex-col p-10 my-10 items-center bg-green-500 text-white max-w-2xl mx-auto hover:bg-white hover:text-green-500 duration-500 ease-out border hover:border-green-500 text-center'>
                    <h3 className=' text-3xl font-semibold'>
                        Thanks for showing interest! 
                    </h3>
                    <p>We'll get back to you soon!</p>
                </div></Link>
            ): (          
            <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col p-5 max-w-[76rem] mx-auto mb-10 border bg-[#f6f6f6]'>
            <h4 className=' text-2xl font-medium'>You can send your enquiry via the form below.</h4>
            <h3 className=' text-md text-gray-500 pt-5 '>Package name:</h3>
            <h3 className=' text-sm text-green-500 font-semibold '>{post.title}</h3>
            <hr className=' py-3 mt-2'/>

            <input 
                {...register("_id")}
                type="hidden"
                name="_id"
                value={post._id}
            />
            
            <label className=' block mb-5'>
                <span className=' text-gray-700'>Name</span>
                <input
                    {...register("name", { required: true })} 
                    className=' shadow w-full border rounded py-2 px-3 form-input mt-1 block ring-green-500 outline-none focus:ring-1' placeholder='Enter your Name' type="text" />
            </label>
            <label className=' block mb-5'>
                <span className=' text-gray-700'>Email</span>
                <input
                    {...register("email", { required: true })}  
                    className=' shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring-1' placeholder='Enter your Email' type="email" />
            </label>
            <label className=' block mb-5'>
                <span className=' text-gray-700'>Contact</span>
                <input
                    {...register("contact", { required: true })}  
                    className=' shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring-1' placeholder='Enter your Contact Number' type="tel" />
            </label>
            <label className=' block mb-5'>
                <span className=' text-gray-700'>No. of Adults</span>
                <input
                    {...register("adults", { required: false })}  
                    className=' shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring-1' placeholder='Enter number of Adults' type="number" />
            </label>
            <label className=' block mb-5'>
                <span className=' text-gray-700'>No. of Children</span>
                <input
                    {...register("children", { required: false })}  
                    className=' shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-green-500 outline-none focus:ring-1' placeholder='Enter number of Children' type="number" />
            </label>
            <label className=' block mb-5'>
                <span className=' text-gray-700'>Enquiry</span>
                <textarea
                    {...register("comment", { required: true })}  
                    className=' shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-green-500 outline-none focus:ring-1' placeholder='Enter your Enquiry here*' rows={8} />
            </label>

            {/* errors will return when field validation fails*/}
            <div className=' flex flex-col p-5'>
                {errors.name && 
                (<span className=' text-red-500'>The Name Field is required</span>
                )}
                {errors.name && 
                (<span className=' text-red-500'>The Comment Field is required</span>
                )}
                {errors.name && 
                (<span className=' text-red-500'>The Email Field is required</span>
                )}
                {errors.name && 
                (<span className=' text-red-500'>Enquiry field cannot be empty</span>
                )}
            </div>

            <input
                type="submit"
                className=' shadow bg-green-500 hover:bg-white hover:text-green-500 duration-500 ease-out border hover:border-green-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-20 self-center rounded cursor-pointer'
                value="Submit Enquiry"
            />
        </form> 
    )}
        </main>
    );
}

export default Post

//This gives an array of paths which gives all the slugs we're going to need
export const getStaticPaths = async () => {
    const query = `*[_type == 'post']{
        _id,
        slug {
        current
       }
      }`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
};

// This uses those slugs to fetch the information for each page
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == 'post' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        description,
        mainImage,
        postImage,
        slug,
        body
        }`
    
    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
        },
        revalidate: 60, // after 60 seconds, it will update the old cached version.
    };
};