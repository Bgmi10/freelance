<<<<<<< HEAD
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from "../layout/Loader/Loader";
import ScrollAnimation from 'react-animate-on-scroll';
import MetaData from "../layout/MetaData";

import { Link } from "react-router-dom";
import './inhouse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTags } from '@fortawesome/free-solid-svg-icons';




const Inhouse = () => {

  const { loading } = useSelector((state) => state.texts);

  const course_list = [{
    data: {
      list: [{
        id: 1,
        name: "Full Stack Development",
        authorName: "Priya Patel",
        img: "https://campalin.com/thumbnsil/programs/HR%20THUMBNAIL.png",
        link:"/test",


      },
      {
        id: 2,
        name: "Data Science",
        authorName: "Armaan Sidana",
        img: "https://campalin.com/thumbnsil/programs/data%20thumbnail.png",
        link:"",

      },
      {
        id: 3,
        name: "Ethical Hacking",
        authorName: "Priya Patel",
        img: "https://campalin.com/thumbnsil/programs/ETHICAL%20THUMBNAIL.png",
        link:"",

      }
      ]

    }
  }]


  return (
    <>
      {loading ? <Loader /> : (
        <div>
          <MetaData title="Inhouse" />
          <ScrollAnimation animateIn='fadeIn'>
            <div>
              <h1 style={{ color: "white", fontWeight: "bold", fontSize: "50px", display: "flex", justifyContent: "center", marginTop: "20px", fontFamily: "sans-serif", marginTop: '150px' }}>Programs</h1>
            </div>
            {course_list.map((item, index) =>
              <div key={index}>
                <h2 style={{ color: "#01ddffd8", fontWeight: "bold", fontSize: "30px", marginLeft: "70px", display: "flex", justifyContent: "start", marginTop: "60px", fontFamily: "sans-serif" }}>Tech & Data</h2>
                <div style={{
                  display: "flex", flexDirection: 'row', marginLeft: "auto", marginTop: "50px"
                }}>
                  {item.data.list.map((course, i) => (
                    <div key={i} style={{
                      border: "1px solid  ", width: "350px", height: "350px", marginTop: "0px", marginLeft: "40px", borderRadius: "12px", display: "flex", justifyContent: 'start', flexDirection: 'column', // Align content vertically
                      padding: '20px',
                    }}>
                      <Link to={course.link}  style={{ textDecoration: 'none' }}>
                      <div>
                        <img src={course.img} style={{ width: "350px", height: "200px", borderRadius: "12px", }} className='image-hover' alt="Course Thumbnail" />
                      </div>
                      <div style={{textDecoration: 'none'}}>
                        <h2 style={{ color: "white", fontSize: "25px", fontFamily: "Raleway", marginTop: "5px" }}>{course.name}</h2>
                        <p style={{ color: "#8d8d8d", fontSize: "16px", fontFamily: "Raleway", marginTop: "5px" }}>{course.authorName}</p>
                      </div>
                      </Link>
                    </div>
                   
                  ))}
                </div>
              </div>
            )}
          </ScrollAnimation>
        </div>
      )}
    </>
  );
}



=======
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from "../layout/Loader/Loader";
import ScrollAnimation from 'react-animate-on-scroll';
import MetaData from "../layout/MetaData";
import './inhouse.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTags } from '@fortawesome/free-solid-svg-icons';




const Inhouse = () => {
 
    const { loading} = useSelector((state) => state.texts); 


  return (
    < >
       {loading ? <Loader/> :( 
       <div>
        <MetaData title="Inhouse" />
        <ScrollAnimation animateIn='fadeIn'>
        <div> <h1 style={{color:"white", fontWeight:"bold", fontSize:"50px" , display:"flex", justifyContent:"center" , marginTop:"20px", fontFamily:"sans-serif"}}>Programs</h1>
        </div>
        <div>
            <h2 style={{color:"#01ddffd8", fontWeight:"bold", fontSize:"30px" ,marginLeft:"70px", display:"flex", justifyContent:"start" , marginTop:"60px", fontFamily:"sans-serif", flex:"wrap"}}>Tech & Data</h2>
        </div>
        
        <div className="course-container">
        <Link to="/course/fullstack" className="course-link">
      
          <div className="course-card">
            <div>
              <img src="https://campalin.com/thumbnsil/programs/FULL%20STACK%20THUMBNAIL.png" className="course-thumbnail" alt="Course Thumbnail" />
            </div>
            <div>
              <p className="offer-text">
                <FontAwesomeIcon icon={faTags} className="offer-icon" /> Special Offer
              </p>
              <h2 className="course-name">Full Stack Development</h2>
              <p className="author-name">Priya Patel</p>
              <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
            </div>
          </div>
          </Link>
          <Link to="/course/datascience" className="course-link">
          <div className="course-card">
            <div>
              <img src="https://campalin.com/thumbnsil/programs/data%20thumbnail.png" className="course-thumbnail" alt="Course Thumbnail" />
            </div>
            <div>
              <p className="offer-text">
                <FontAwesomeIcon icon={faTags} className="offer-icon" /> Special Offer
              </p>
              <h2 className="course-name">Data Science</h2>
              <p className="author-name">Armaan Sidana</p>
              <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
            </div>
          </div>
          </Link>
          <Link to="/course/cybersecurity" className="course-link">
          <div className="course-card">
            <div>
              <img src="https://campalin.com/thumbnsil/programs/FULL%20STACK%20THUMBNAIL.png" className="course-thumbnail" alt="Course Thumbnail" />
            </div>
            <div>
              <p className="offer-text">
                <FontAwesomeIcon icon={faTags} className="offer-icon" /> Special Offer
              </p>
              <h2 className="course-name">Ethical Hacking</h2>
              <p className="author-name">Priya Patel</p>
              <FontAwesomeIcon icon={faArrowCircleRight} className="arrow-icon" />
            </div>
          </div>
          </Link>
          
       
    </div>
    <Link to="/course/humanresource" className="course-link">
    <div style={{marginLeft:"20px"}}>
        <div style={{border:"1px solid  ", width:"350px", height:"350px",marginTop:"60px", marginLeft:"49px", borderRadius:"12px", display:"flex",  justifyContent: 'start', margin:"20px",display:"flex",  flexDirection: 'column', // Align content vertically
    padding: '20px',}}>
        <img src='https://campalin.com/thumbnsil/programs/HR%20THUMBNAIL.png' style={{width:"350px", height:"200px", borderRadius:"12px" , marginLeft:"0px" }} className='course-thumbnail'></img>
        <div>
             <p style={{color:"#8d8d8d",fontSize:"10px", fontFamily:"sans-serif" , marginTop:"5px", textDecoration:"line-through"}}><FontAwesomeIcon icon={faTags} style={{fontSize:"15px" ,  color:"#00fbff" , marginTop:"5px"}} /> Special Offer</p>
             <h2 style={{color:"white",fontSize:"30px", fontFamily:"" , marginTop:"5px"}}>Human Resources</h2>
             <p  style={{color:"#8d8d8d",fontSize:"30px", fontFamily:"sans-serif" , marginTop:"5px"}}>Jonathan Thompson</p>
            <FontAwesomeIcon icon={faArrowCircleRight} style={{color:"#8d8d8d",fontSize:"40px", fontFamily:"sans-serif" , marginTop:"5px", textDecoration:"line-through", marginLeft:"300px"}}/>
            
             </div>
             
             </div>
   
        </div>
        </Link>

         </ScrollAnimation>
       </div>

       )}
    </>
  )
}



>>>>>>> 95411bfc5e19854ea08525c879f58ec483a10af5
export default Inhouse