import React from 'react'
import { assets } from '../assets/fronted/assets'
import { Link } from 'react-router'

function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid w-full grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
                <div>
                    <Link to='/'> <img src={assets.logo} alt="" className='mb-5 w-32' /></Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti aut ex, ipsa doloremque architecto repellat temporibus repudiandae adipisci maiores exercitationem nisi sint officiis omnis commodi laboriosam quae alias expedita?

                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-4'>COMPANY</p>
                    <ul className='flex flex-col text-slate-700'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Our Privacy policy</li>

                    </ul>

                </div>
                <div>
                    <p className='text-center font-semibold'>
                        GET IN TOUCH
                    </p>
                    <ul className='flex flex-col gap-1 text-slate-600 '>
                        <li>+213457655</li>
                        <li>anjali@gmail.com</li>
                    </ul>

                </div>


            </div>
            <div className='my-10'>
                <hr />
                <p className='py-6 text-sm text-center mb-6'>Copyrigh 2024@forever-All Rights</p>
            </div>
        </div>
    )
}

export default Footer