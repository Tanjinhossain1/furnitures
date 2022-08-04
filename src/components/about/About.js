import React from 'react';

const About = () => {
    return (
        <div className='pt-20'>
            <div className='w-3/4 mx-auto'>
                <div className='lg:flex justify-around items-center'>
                    <div>
                        <img className='lg:w-[500px]  rounded-lg' src="https://i.ibb.co/dJyrFSw/tanjin-Photo.jpg" alt="" />
                        <p className='text-4xl font-bold'>Hi, I am Tanjin Hossain</p>
                    </div>
                    <div className='w-2/4 '>
                        <p className='text-2xl font-semibold mb-4'>Hello Dear, </p>
                        <p>I am Front-end(React.js) developer and i have complete more projects with React.js. <span className='font-bold'>I have to complete 3 MERN stack projects</span> . I have to much Dedication and <span className='font-bold'>Dedication</span> also i will <span className='font-bold '>complete a internship with Front-end developer(React.js)</span>.  </p>
                        <p className='mt-4'>I love to explore any new things and some newer. I will complete a <span className='font-bold'>Team projects with Next.js</span> it was give more experience about team management or team up it was to good.</p>


                        <div className='mt-5'>
                            <p><span className='font-bold text-2xl  border-b-4 border-black'>SKILLS: </span></p>
                            <p className='mt-3'><span className='font-bold text-xl'>Expertise:</span> HTML, CSS, React.js, Bootstrap, Tailwind, Firebase Authentication, DaisyUi, Tailwind,  JWT, ES6, JavaScript, React Hook Form, PReact.js, GitHub, Next.js</p>
                            <p className='mt-3'><span className='font-bold text-xl'>Comfortable:</span> node.js, express.js, mongodb, nodemailer</p>

                            <p className='mt-3'><span className='font-bold text-xl'>Familiar :</span>  Redux.js, TypeScript, React Native. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;