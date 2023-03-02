import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-neutral-900 h-[10vh] px-2 overflow-x-hidden'>

                <div className='text-white px-2 lg:px-10 text-[15px] lg:text-[25px] font-semibold w-[40%] text-start'>
                    <h1>Json Server <span className='text-red-600 text-15px lg:text-[30px]'>Curd</span></h1>
                </div>

                <div className='text-white px-10 text-[15px] lg:text-[18px] font-semibold flex gap-10 w-[60%] justify-start items-center'>
                    <NavLink to='/' className='hover:scale-105 hover:text-violet-300 active:bg-violet-400 active:p-2 active:text-black '>
                        <h1>Home</h1>
                    </NavLink>
                    <NavLink to='/showdata' className='hover:scale-105 hover:text-violet-300  active:bg-violet-400 active:p-2 active:text-black '>
                        <h1>ShowData</h1>
                    </NavLink>
                </div>

            </nav>


            <Outlet />

        </div>

    )
}

export default Navbar