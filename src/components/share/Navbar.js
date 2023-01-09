import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Navbar = () => {
  // const { isLoading, data: products, refetch } = useQuery(['allCartProduct'], () =>
  //   fetch('https://furniture-ms4p.onrender.com/allCartProduct').then(res =>
  //     res.json()
  //   )
  // )
  // if (isLoading) {
  //   return <button className='btn btn-circle'>Loading</button>
  // }
  const { products, refetch } = useCart();
  // refetch()

  const navItems = <>
    <li><Link to='/home'>HOME</Link></li>
    <li className='text-xl'><Link to='/cart'><FaCartPlus /></Link></li>
    <li><Link to='/wishList'>WISH LIST</Link></li>
    <li><Link to='/about'>ABOUT</Link></li>
    <li><Link to='/login'>LOGIN</Link></li>
  </>

  return (
    <div className='' >
      <div className={`navbar bg-gradient-to-l duration-1000 fixed number1 hoverEffect && from-black text-white via-[#0a1963] to-[#890dd6]  `}>
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">FURNITURE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {navItems}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;