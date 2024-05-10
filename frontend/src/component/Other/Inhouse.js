import React from 'react'
import { useSelector } from 'react-redux'
import Loader from "../layout/Loader/Loader";
import ScrollAnimation from 'react-animate-on-scroll';
import MetaData from "../layout/MetaData";
import './inhouse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTags } from '@fortawesome/free-solid-svg-icons';




const Inhouse = () => {
 
    const { loading} = useSelector((state) => state.texts); 

    const course_list = [{
        data:{
          list:[{
            id:1,
            name:"Full Stack Development",
            authorName:"Priya Patel",
            img:"https://campalin.com/thumbnsil/programs/HR%20THUMBNAIL.png",


          },
          {
            id:2,
            name:"Data Science",
            authorName:"Armaan Sidana",
            img:"https://campalin.com/thumbnsil/programs/data%20thumbnail.png",

          },
          {
            id:3,
            name:"Ethical Hacking",
            authorName:"Priya Patel",
            img:"https://campalin.com/thumbnsil/programs/ETHICAL%20THUMBNAIL.png",

          }
          ]

        }
    }]
   

  return (
    < >
       {loading ? <Loader/> :( 
       <div>
        <MetaData title="Inhouse" />
        <ScrollAnimation animateIn='fadeIn'>
        <div> <h1 style={{color:"white", fontWeight:"bold", fontSize:"50px" , display:"flex", justifyContent:"center" , marginTop:"20px", fontFamily:"sans-serif"}}>Programs</h1>
        </div>
        <div>
            <h2 style={{color:"#01ddffd8", fontWeight:"bold", fontSize:"30px" ,marginLeft:"70px", display:"flex", justifyContent:"start" , marginTop:"60px", fontFamily:"sans-serif"}}>Tech & Data</h2>
        </div>
        {course_list.map((item,index)=>
        <div style={{display:"flex", flexDirection: 'row',
        flex:"wrap",
        justifyContent: 'space-between', marginLeft:"25px", marginTop:"50px"}} key={index}>
        <div style={{border:"1px solid  ", width:"350px", height:"350px",marginTop:"60px", marginLeft:"80px", borderRadius:"12px", display:"flex",  justifyContent: 'start', margin:"20px",display:"flex",  flexDirection: 'column', // Align content vertically
    padding: '20px',}}>
            <div>
             <img src='https://campalin.com/thumbnsil/programs/FULL%20STACK%20THUMBNAIL.png' style={{width:"350px", height:"200px", borderRadius:"12px" , }} className='image-hover'></img>
             </div>
             <div>
             <p style={{color:"#8d8d8d",fontSize:"10px", fontFamily:"sans-serif" , marginTop:"5px", textDecoration:"line-through"}}><FontAwesomeIcon icon={faTags} style={{fontSize:"15px" ,  color:"#00fbff" , marginTop:"5px"}} /> Special Offer</p>
             <h2 style={{color:"white",fontSize:"30px", fontFamily:"" , marginTop:"5px"}}>{item.data.list.map((name,index)=>name.name)}</h2>
             <p  style={{color:"#8d8d8d",fontSize:"30px", fontFamily:"sans-serif" , marginTop:"5px"}}>Priya Patel</p>
            <FontAwesomeIcon icon={faArrowCircleRight} style={{color:"#8d8d8d",fontSize:"40px", fontFamily:"sans-serif" , marginTop:"5px", textDecoration:"line-through", marginLeft:"300px"}}/>
            
             </div>
           
        

        </div>
        
        
        </div>)}
        <div style={{border:"1px solid white ", width:"350px", height:"350px",marginTop:"60px", marginLeft:"70px", borderRadius:"12px", display:"flex",  justifyContent: 'start', margin:"20px", }}>
        <img src='' style={{width:"350px", height:"200px", borderRadius:"12px" , marginLeft:"0px" }} className='image-hover'></img>
            
        </div>

         </ScrollAnimation>
       </div>

       )}
    </>
  )
}



export default Inhouse