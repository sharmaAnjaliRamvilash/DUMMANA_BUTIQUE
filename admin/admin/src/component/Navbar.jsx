import React from 'react'
import { assets } from '../assets/admin/assets'

import { Link } from 'react-router-dom'

function Navbar({ setToken }) {
    return (
        <div className='flex items-center justify-between py-2 px-[4%]'>
            <Link to={'/'}> <img src={assets.logo} alt="" className='w-[max(20%,200px)] cursor-pointer ' /></Link>
            <button onClick={() => setToken('')} className='bg-slate-700 cursor-pointer hover:bg-slate-500 transition-all duration-600 hover:scale-[10px] text-white sm:py-2 rounded-full sm:px-7 py-2 px-5 text-sm sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar