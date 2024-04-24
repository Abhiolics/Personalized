import React from 'react'

function Hero2() {
  return (
    <div className=''>
       <hr className='bg-black rounded-full'/>
        <h1 className='text-5xl bg-white text-center text-black p-5'>My Journey</h1>

      <ul className="timeline  timeline-snap-icon max-md:timeline-compact timeline-vertical bg-white">
  <li>
  
 

    
    <div className="timeline-middle ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 animate-ping purple"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10 mt-6">
      <time className="font-mono italic text-black">2022 - Present</time>
      <div className="text-lg text-black font-semibold">B.Tech in Computer Science - SRMU, Lucknow</div>
<p className='text-base-100'>
  Currently enrolled in undegraduate B.Tech CSE program, right now in 5th semester & till 4th semester i've scored 8.00/10 CGPA.
</p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="font-mono italic text-black">2022</time>
      <div className="text-lg text-black font-semibold">Intermediate - SRGMA (Gola-Gokarannath,Lakhimpur)</div>
<p className='text-base-100'>Completed class 12th with Science stream PCM with a score of 84%.</p>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
    </div>
    <div className="timeline-start md:text-end mb-10">
      <time className="font-mono italic text-black" >2020</time>
      <div className="text-lg font-semibold text-black">High School - BDS International School (Meerut)</div>
      <p className='text-base-100 mb-8'>
Completed class 10th from BDS International School, Meerut with a score of 81%.
</p>
    </div>
  </li>
</ul>
    </div>
  )
}

export default Hero2
