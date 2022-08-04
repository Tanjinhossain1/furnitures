import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='bg-black pb-12 text-white'>
                <div className='mt-32 p-12 text-white'>
                <div>
                    <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        <div>
                            <h1 className='text-3xl font-semibold'>Don't Miss Out</h1>
                            <p className='mt-3 mb-6 '>Sign up for the latest beauty news, product samples and coupons</p>
                            <label htmlFor="">EMAIL ADDRESS</label>
                            <br />
                            <input type="text" placeholder="EMAIL" class="input input-bordered input-primary w-full max-w-xs mt-2" />
                            <button className='mt-4 w-full lg:w-[355px] rounded-lg mb-6 border-white border-2 py-2'>SIGN UP</button>
                            <p>This site is intended for US. By signing up. you understand and agree that your that your date will be collected and used subject to our US Privacy Pollcy and Terms of Use.</p>
                          <div className='mt-6 grid grid-cols-3 sm:grid-cols-5'>
                          <div className='border-4 rounded-full py-2 flex justify-center w-[50px] border-white bg-black'>
                                <a className='text-2xl text-white' target="_blank" rel="noreferrer" href="https://www.instagram.com/sktanjin/"><FaInstagram /></a>
                            </div>
                          <div className='border-4 rounded-full py-2 flex justify-center w-[50px] border-white bg-black'>
                                <a className='text-2xl text-white' target="_blank" rel="noreferrer" href="https://www.facebook.com/iloveyou.tanjin/"><FaFacebookF /></a>
                            </div>
                          <div className='border-4 rounded-full py-2 flex justify-center w-[50px] border-white bg-black'>
                                <a className='text-2xl text-white' target="_blank" rel="noreferrer" href="https://twitter.com/TanjinHossain4"><FaTwitter /></a>
                            </div>
                          <div className='border-4 rounded-full py-2 flex justify-center w-[50px] border-white bg-black'>
                                <a className='text-2xl text-white' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tanjin-hossain-56765123b/"><FaLinkedin /></a>
                            </div>
                          <div className='border-4 rounded-full py-2 flex justify-center w-[50px] border-white bg-black'>
                                <a className='text-2xl text-white' target="_blank" rel="noreferrer" href="https://github.com/Tanjinhossain1"><FaGithub /></a>
                            </div>
                          </div>
                        </div>
                        <div>
                            <p className='mt-6'>COMPANY</p><br />
                            <Link className='mt-4' to='/about'>About</Link><br />
                            <Link className='mt-4' to='/'>Experts and spokenModels</Link><br />

                            
                        </div>
                        <div>
                            <p className='mt-6'>CUSTOMER SERVICE</p><br />

                            <Link className='mt-4' to='/contactUs'>Contact Us</Link><br />
                            <Link className='mt-4' to='/myAccount'>My Account</Link><br />
                            <Link className='mt-4' to='/Store Locator'>Store Locator</Link><br />
                            <Link className='mt-4' to='/redeem'>Redeem rewards</Link><br />

                            <div className='mt-5'>
                            <iframe width="353" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=bangladesh,goadnail&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                        <div>
                            <p className='mt-6'>CUSTOMER SERVICE</p><br />

                            <Link className='mt-4' to='/beauty'>Beauty Magazine</Link><br />
                            <Link className='mt-4' to='/tools'>Tools and consultations</Link><br />
                            <Link className='mt-4' to='/offers'>Offers</Link><br />
                            <Link className='mt-4' to='/lorealparis'>LorealParis</Link><br />
                        </div>
                        <div>
                           
                        </div>
                        
                    </div>

                </div>
            </div>
                    <hr />
                        <div>
                            <div className='w-3/4 p-3 mx-auto grid grid-cols-4 md:grid-cols-6'>
                                <p>SITE MAP</p>
                                <p>PRIVACY</p>
                                <p>TERMS</p>
                                <p>CONTENT PERMISSION </p>
                                <p>MAKEUP.COM </p>
                                <p>SKINCARE.COM </p>
                            </div>
                        </div>
                       <div className='border border-gray-500'>
                       </div>
                       <div>
                        <p className='text-center mt-4'>This site is intended for US consumers Cookies and related technology are use for advertising. <br /> To learn more, visit {year} </p>
                       </div>
        </div>
    );
};

export default Footer;