import React from 'react';

import LocationOnIcon from "@mui/icons-material/LocationOn"
import Dropdown from './PostsComponents/Dropdown';
import Sliding from './Sliding';



export default function Posts() {
  const[moreFlag,setMoreFlag]=React.useState(false);

 let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ipsum velit. Donec imperdiet ex vitae mauris rhoncus semper sit amet sed sapien. Nulla justo ipsum, tempor ac eleifend et, dignissim vel nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ipsum velit. Donec imperdiet ex vitae mauris rhoncus semper sit amet sed sapien. Nulla justo ipsum, tempor ac eleifend et, dignissim vel nibh Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ipsum velit. Donec imperdiet ex vitae mauris rhoncus semper sit amet sed sapien. Nulla justo ipsum, tempor ac eleifend et, dignissim vel nibh.`

  return (
    
    <div className='w-[60vw] mr-3' >
    <div className='bg-[#f1f1f1] rounded-xl  w-[650px] py-4 px-2 m-auto my-5 shadow shadow-gray-700 relative ml-6'>
      
      <div className='flex justify-start items-center mb-2 mx-4 '>
        <div className=' w-[50px] h-[50px] mx-1 object-cover bg-transparent rounded-[100px]'><img src='/Images/profilePic.png' className='rounded-[150px] w-full h-full object-cover' alt='Pfimg' /></div>
        <div className='ml-[1rem]'>
          <h1 className='font-semibold'>Sourav Mete </h1>
          <p className=''> 2 hours ago</p>
        </div>
        <button class="border-2  rounded-full px-3 py-1 ml-3 text-green-900">+ Support</button>
       
      </div>
      <div className='absolute top-7 right-10 flex items-center'>
       <p><LocationOnIcon/> Delhi,India</p>
       <p><Dropdown/> </p>
      </div>
      {/* Post Description  */}
      <div className='mx-4'>
        <p className='text-black font-light w-full text-[1rem]'>
        <span>{moreFlag?text:text.slice(0,280)} <span className='cursor-pointer font-semibold transition-all ease-in-out text-green-900' onClick={()=>{setMoreFlag(!moreFlag)}}>{moreFlag?`LESS..`:`READ MORE ...`} </span> </span>
        </p>
        
      </div>
      {/* Post Image  */}
      <Sliding/>
      
    
      <div className='flex items-center justify-between mx-[20px] mt-5'>
       
          <div className='flex items-center'>
          <img src='/Images/appreaciate.png'  className='w-[20px] h-[20px]' alt=''/>
            <div className="flex flex-col items-center">
            <p className=' sm:flex hidden ml-1 font-normal'> Appreciate</p>
            <div className='font-thin text-[12px] leading-3'>125k</div>
          </div>
          </div>
          <div className='flex items-center'>
          <img src='/Images/comment.png'  className='w-[20px] h-[20px]' alt=''/>
          <div className="flex flex-col items-center">
            <p className=' sm:flex hidden ml-1 font-normal'> Comment</p>
            <div className='font-thin text-[12px] leading-3'>125k</div>
          </div>
          </div>
          <div className='flex items-center'>
          <img src='/Images/learn.png'  className='w-[20px] h-[20px]' alt=''/>
            <div className="flex flex-col items-center">
            <p className=' sm:flex hidden ml-1 font-normal'>Learn</p>
            <div className='font-thin text-[12px] leading-3'>125k</div>
          </div>
          </div>
          <div className='flex items-center'>
          <img src='/Images/share.png'  className='w-[20px] h-[20px]' alt=''/>
          <div className="flex flex-col items-center">
            <p className=' sm:flex hidden ml-1 font-normal'> Send</p>
            <div className='font-thin text-[12px] leading-3'>125k</div>
          </div>
          </div>
     

      </div>

    </div>
   </div>
  );
}



