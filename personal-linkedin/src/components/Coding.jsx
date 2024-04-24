import React from 'react'

function Coding() {
  return (
    <div>
       <hr className='bg-black rounded-full'/>
        <h2 className='bg-white text-black text-4xl text-center py-4'>Other Profiles</h2>
       
    <div className='bg-white  flex p-5 gap-10 px-20 grid grid-cols-4'>
       <div>
       <a href="https://leetcode.com/Abhiolics/" >
      <img className="mask mask-squircle animate- "  src="https://assets.leetcode.com/users/avatars/avatar_1706958839.png"  />
      
      <p className=' font-semibold mt-2 text-base-100 text-2xl  text-suu'>  Leetcode</p>
      </a>
      </div>
    
      <div className='' >
       <a href="https://github.com/Abhiolics">
      <img className="mask mask-squircle animate" src="https://avatars.githubusercontent.com/u/138395064?v=4" />
      <p className='text-center font-semibold mt-2 text-base-100 text-2xl text-suu'>Github</p>
      </a>
      </div>
      <div>
     <a href="https://www.linkedin.com/in/abhay-pratap-singh-b73297249/">
      <img className="mask mask-squircle animate-" src="https://media.licdn.com/dms/image/D5603AQES0OiE6Je70g/profile-displayphoto-shrink_400_400/0/1713099729380?e=1719446400&v=beta&t=cGif8UMITv9JCZ7VGcp2sGK95NF8Uh2tCU39gN86D30" />
      <p className='text-center font-semibold mt-2 text-base-100 text-2xl text-suu'>LinkedIn</p>
      </a>
      </div>
      <div>
        <a href="https://www.behance.net/abhaypsingh27">
      <img className="mask mask-squircle animate-" src="https://mir-s3-cdn-cf.behance.net/user/230/4488881388229569.6603adc245cdf.jpg" />
      <p className='text-center font-semibold mt-2 text-base-100 text-2xl text-suu flex justify-center'>Behance</p>
      </a>
      </div>

      
    </div>
    </div>
  )
}

export default Coding
