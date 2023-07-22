import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'; // using npm install @mui/icons-material
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@mui/material";

const ShareSkills = ()=>{
  const [open,setOpen]=React.useState(false);
    const data=[
        {
            id:"1",
            name:"Stories",
            image:"Images/stories.png",
            color:"bg-green-200"
        },
        {
            id:"2",
            name:"Ideas",
            image:"Images/ideas.png",
            color:"bg-amber-200"
        },
        {
            id:"3",
            name:"Articles",
            image:"Images/articles.png",
            color:"bg-indigo-200"
        },
        {
            id:"4",
            name:"Experience",
            image:"Images/Experience.png",
            color:"bg-pink-300"
        }
    ]
    const [selected,setSelected]=React.useState(null);
    const [input,setInput]=React.useState(null);
    const [textInput1,setTextInput1]=React.useState(null);
    const [textInput2,setTextInput2]=React.useState(null);
  return (
    <div className='flex flex-col justify-center items-center w-[300px] cursor-pointer px-8'>
      <button  onClick={()=>setOpen(true)}>
      <div className='bg-white border-2 rounded-full flex justify-center items-center w-3/4'><img src='/Images/side2.png' className="w-full" alt='Pfimg' /></div>
     <div className='mx-auto mt-3 text-xl text-center'>Share Experience/Story</div> 
      </button>
      <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle> 
            <div className="flex flex-row  justify-around">
                <div className="flex items-center">
                    <div>
                      <button onClick={()=>setOpen(false)}>

                      <ArrowBackIosNewIcon fontSize="small"/>
                      </button>
                    </div>
                <div className="text-sm font-bold mt-1">
                Create New Post 
            </div>
            
                </div>
            
            <div className="ml-10 flex">
                <div className="flex items-center m-2">
                    <div>
                        <img src="dakota.jpg" className="rounded-full w-8 h-8"/>
                    </div>
                    <div className="ml-2">
                    <div className="text-xs font-semibold">
                    Author
                </div>
                <div className="text-xs ">
                    Shivangi Gupta
                </div>
                    </div>
                
                </div>
            </div>

            
            </div>
            <div className="flex">
         
              
                
               

            
              
           
                {data.map((item)=>{
                    return(
                        <div className="items-center hover:bg-gray-100 rounded-lg p-2">
                            <button onClick={()=>setSelected(item)}>
                            <div>
                            <img src={item.image} className={`w-8 h-8 rounded-full ${selected?.color} p-1`}/>
                                
                                </div>
                                <div className="text-xs font-thin">
                                    {item.name}
                                    
                                    </div>
                                    </button>
                                    
                            </div>
                            
                    )
                })}
            </div>
            <div className="mt-2">
                
                <div className="flex">
                    <div>
                    <input type="text" placeholder="Add Title Here.." value={input} onChange={(e)=>setInput(e.target.value)} className={`${selected?.color} placeholder:text-sm placeholder:font-semibold p-1`}/>
                    </div>
                    <div className={`flex items-center ${selected?.color} rounded-t-lg ml-2 `}>
                        <div>
                            <LocationOnIcon fontSize="small" className="text-red-400"/>

                        </div>
                        <div className="text-xs ml-2 mr-2 mt-1">
                            Place of Occurence
                        </div>
                    </div>
                    
                </div>
                <div className="mt-1">
                    <textarea value={textInput1} onChange={(e=>setTextInput1(e.target.value))} placeholder="| Write a Description Here" maxLength="350" className={`${selected?.color} w-80 h-25 placeholder:text-xs text-sm p-2 px-2`}></textarea>
                </div>
                <div>
                <textarea value={textInput2} onChange={(e=>setTextInput2(e.target.value))} placeholder="Moral of the story" maxLength="350" className={`${selected?.color} w-80 placeholder:text-xs h-8 placeholder:justify-center rounded-t-lg placeholder:ml-14 p-2`}></textarea>

                </div>
            </div>
 </DialogTitle>
            <DialogActions>
               
                <button className="bg-teal-800 rounded-2xl p-1 px-1 mr-4">
                    <span className="text-white">
                        Post
                    </span>
                   
                </button>
            </DialogActions>
           </Dialog>

         
        </div>
      
     
   
    
  )
}

export default ShareSkills;
