import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from './data'
import { logo } from '../../assets'
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from 'framer-motion';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='absolute w-full'>
      <nav className='relative'>
        <div className=' py-5 flex justify-between items-center lg:px-20 bg-transparent'>
          {/* left */}
          <div className='pl-5 lg:pl-0 w-[30%] lg:w-[10%]'>
            <Link to={'/'}>
              <h1 className='text-white text-3xl'>Vasel</h1>
            </Link>
          </div>
          {/* right */}
          <div className='right'>
            <ul className='hidden text-white lg:flex gap-8 font-poppins text-xl'>
              {navLinks.map((value) => (
                <li key={value.name} className='cursor-pointer capitalize'>
                  <Link to={value.href}>{value.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="menu mr-5 lg:mr-0 text-white  p-2 rounded-lg block lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {!isMenuOpen ?
              <TiThMenu />
              :
              <IoCloseOutline />
            }
          </div>

        </div>
        {/*  */}
        <div className=''>
          <motion.ul className={`absolute w-full text-center flex flex-col gap-9 font-poppins text-xl bg-black py-6 text-white ${isMenuOpen ? 'top-15' : 'top-[-270px]'} transition-opacity duration-1000`}

            initial={{ opacity: 0, y: -50 }} // Initial animation state
            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -260 }}// Animation when menu is open or closed
            transition={{ duration: 1 }} // Tra nsition duration
          >
            {navLinks.map((value) => (

              <li key={value.name} className='cursor-pointer capitalize'
                onClick={() => setIsMenuOpen(!isMenuOpen)}

              >
                <Link to={value.href}>{value.name}</Link>
              </li>
            ))}
          </motion.ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar