import React from 'react'


function Hero() {
    return (
        <div className=''>

            <div className="bg-white py-3 px-2 flex hero  shadow-xl">

                <div className="hero-content   text-left mt-10 mb-40 left-0 ">

                    <div className="">

                        <h1 className='text-black mb-80 text-xl  '>Abhay Pratap Singh <br />
                        <div className='flex gap-3 mt-2'>
                            <a href="https://www.linkedin.com/in/abhay-pratap-singh-b73297249/">
                        <button className='btn btn-outline btn-success shadow-xl '>Connect</button></a>
                    <a href="https://drive.google.com/file/d/1g1vNzmlV2pVSfFRQHz-iJ18JNnI3zdaw/view?usp=sharing" download>
                        <button className='btn btn-outline btn-warning shadow-xl'>Resume</button></a>

                            <br />
                            </div>
 

                        </h1>


                    </div>
                </div>


                <div className=" hero min-h-screen rounded " >
                    <div className="hero-overlay bg-opacity-100 rounded-md bg-white"></div>
                    <div className="hero-content text-center  ">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-black">Who I am ?</h1>
                            <p className="mb-5 text-base-100">Young & Passionate B.Tech Computer Science 3rd Year Student ,
                                "Designing & Programming enthusiast" Seeking exciting opportunities in 
                               <span className='underline'> Software development,
                                Proficient in :)
                                ✴️ HTML/CSS
                                🌐 React.js
                                〽 Tailwind CSS
                                ♨️ Java
                                ⭐ JavaScript
                                ⚡ MERN Stack
                                👨‍💻 Data Structures & Algorithms
                                ✨ UI/UX Designs
                                🎴 Poster/Logo Designs
                                ✍️ Content Writing.</span> 
                                <br />

                                Eager to contribute to innovative projects | Open to collaboration and continuous learning | Let's connect and unlock the potential of technology together!

                               <br /> Thank you for reading 💗</p>
                            <div className="divider shadow-xl "></div>
                            <h1 className="mb-5 text-5xl font-bold text-black">My Vision?</h1>
                            <p className="mb-5 text-base-100">With expertise spanning frontend development using React, CSS, and Tailwind, coupled with proficiency in UI/UX design through FIGMA, and a solid foundation in full-stack development & problem-solving, I envision myself as a dynamic contributor poised to elevate teams and propel companies towards unprecedented success.
 <br /></p><a href="https://www.linkedin.com/in/abhay-pratap-singh-b73297249/">
                            <button className="btn bg-new text-white border-none rounded-full shadow-xl">Read More</button></a>
                        </div>

                    </div>
                </div>


            </div>




        </div>
    )
}

export default Hero
