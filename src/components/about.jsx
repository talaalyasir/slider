import React from 'react'



import Heading from '../components/heading'
import Counter from '../components/counter'
import Aboutcard from '../components/aboutcard';
import Img from "../assets/studio002.jpg"
import { FiUsers, FiLayers, FiDollarSign } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";

export default function About() {
    return (
        <>
            <div className='w-[85%] mx-auto'>
                <div>
                    <Heading head={{ h1: "WHO WE ARE", h2: "Experienced UX and Web designers, crafting innovative digital solutions for clients worldwide" }} />
                </div>
                <div className='grid lg:grid-cols-2 py-10 gap-14'>
                    <div className='space-y-5'>
                        <h1 className='text-2xl font-medium'>A team of specialists, passionate about new technologies & progress</h1>
                        <p className='text-[1.1rem]'>Sed elementum urna metus, vestibulum in, nulla eu Pellentesque at dui qual. Nullam lorem ipsum lorem iosum – urna metus,</p>
                        <p className='text-[1.1rem]'>
                            Vivamus sagittis tortor et nisi auctor. Lorem nulla eu varius fermentum at volutpat ipsum dolor sit amet dolor urna metus vestibulum in! Ut elit tellus lorem ipsum  – ipsum nulla glavida dolor sit amet luctus lorem ipsum elementum urna metus vestibulum dolor.
                        </p>
                    </div>
                    <div>
                        <ul className='space-y-5'>
                            <li className='text-xl'>

                                <span className='text-green-500 text-2xl '>✓</span> 100+ completed projects
                            </li>
                            <li className='text-xl'>

                                <span className='text-green-500 text-2xl'>✓</span> Leading rockstar specialists
                            </li>

                            <li className='text-xl'>
                                <span className='text-green-500 text-2xl'>✓</span> Returning customers & positive feedbacks
                            </li>
                            <li className='text-xl'>
                                <span className='text-green-500 text-2xl'>✓</span> A decade of expertise & constant innovations
                            </li>
                        </ul>
                        <div className='space-y-5 py-5'>
                            <button className=' bg-blue-700 lg:w-52 w-full lg:mx-4 hover:bg-blue-900 hover:cursor-pointer  py-3 px-12 text-white rounded-xl'>Get in tocuh</button>
                            <button className=' bg-[#EBF4FD]  lg:w-52 w-full lg:mx-4 py-3 px-12 text-blue-500 hover:text-white hover:bg-blue-700 hover:cursor-pointer rounded-xl'>View Poertfolio</button>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 sm:grid-cols-2'>
                    <Counter head={{ h1: "10", ptxt: "Years in business", plus: "+" }} />
                    <Counter head={{ h1: "8", ptxt: "Rockstar specialists",plus:"" }} />
                    <Counter head={{ h1: "50", ptxt: "Completed projects", plus: "+" }} />
                    <Counter head={{ h1: "14", ptxt: "Industry awards",plus:"" }} />
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className='grid lg:grid-cols-2 bg-[#EBF4FD]'>
                <div className='grid md:grid-cols-2 px-[10%] gap-5 py-6 xl:space-y-0 space-y-5'>
                    <Aboutcard data={{ icon: <BiTrendingUp />, ptext: "Lorem ipsum dolor - sit amet, consectetur elit tellus" }} />
                    <Aboutcard data={{ icon: <FiUsers />, ptext: "Glavrida - dolor nulla lorem ipsum dolor posuere" }} />
                    <Aboutcard data={{ icon: <FiDollarSign />, ptext: "Nulla lorem ipsum dolor amet nulla posuere lorem amet" }} />
                    <Aboutcard data={{ icon: <FiLayers />, ptext: "Glavrida from lorem ipsum dolor amet nulla posuere" }} />
                </div>
                <div>
                    <img src={Img} alt="" />
                </div>
            </div>

        </>

    )
}