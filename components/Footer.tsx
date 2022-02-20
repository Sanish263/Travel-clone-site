import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <div className="bg-[#111111] p-6 items-center text-white flex flex-row justify-around md:font-semibold">
            <div className="flex flex-col space-x-4 max-w-xl">
                <h3 className=' text-gray-100'>
                    © Copyright 2022 Paakhi Travels Travel Agency
                </h3>
                <div className=' md:hidden text-left flex flex-row text-sm'>
                    <h3 className='md:hidden mx-2 -ml-4'>Ph:</h3>
                    <button className='md:hidden text-green-500 underline underline-offset-4'>+91-5487941232</button>
                </div>
            </div>
            <div className='flex space-x-4 text-base items-center'>
                <h1 className=' text-green-500 hidden md:flex'>Follow us on:</h1>
                <InstagramIcon className=' h-8 w-8 hover:scale-125 transition-transform duration-300 ease-out cursor-pointer'/>
                <FacebookIcon className=' h-8 w-8 hover:scale-125 transition-transform duration-300 ease-out cursor-pointer'/>
                <WhatsAppIcon className=' h-8 w-8 hover:scale-125 transition-transform duration-300 ease-out cursor-pointer'/>

            </div>
        </div>
    )
}

export default Footer