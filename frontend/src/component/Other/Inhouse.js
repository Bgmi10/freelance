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



export default Inhouse