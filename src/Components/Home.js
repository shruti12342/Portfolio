import React from 'react'
import './Home.css'
import img1 from './Assets/profile.jpg'
import propilePic from './Assets/profile2.avif'
import html from './Assets/html.png'
import css from './Assets/css.png'
import bootstrap from './Assets/bootstrap.jpg'
import js from './Assets/js.png'
import java from './Assets/java.png'
import mongodb from './Assets/mongodb.jpg'
import vscode from './Assets/vscode.png'
import reactjs from './Assets/reactjs.png'
import github from './Assets/github.png'
import firebase from './Assets/firebase.png'
import cloudinary from './Assets/cloudinary.png'
import frontenddevelopment from './Assets/frontenddevlopment.jpg'
import backenddevelopment from './Assets/backenddevelopment.jpg'
import webdevelopment from './Assets/webdevelopment.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='homesection'>
      <div className='details'>
        <div className='leftdetails'>
            <p>Hi, my name is</p>
            <h1 style={{fontSize:'55px'}}>Shruti Kamble</h1>
            <p>A Full Stack Developer focused on learning new technologies and building effective solutions.</p>
            <div className='smicons'>
                <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" class="fa">&#xf09a;</a>
                <a href="https://www.linkedin.com/in/shruti-kamble-5b9733225/" class="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/shruti.kamble_sk/"class="fa">&#xf16d;</a>
            </div>
            <button>Download CV</button>
        </div>
        <div className='rightdetails'>
            <div className='myimg'>
                <img src={propilePic} alt='mtimage' width={50} height={50}/>
            </div>
        </div>
      </div>
      <div className='technicalSkills'>
        <h1>Technical Skills</h1>
        <div className='techskill'>
            <div>
                <img src={html} alt='image1' width={50} height={50}/>
                <img src={css} alt='image1' width={50} height={50}/>
                <img src={bootstrap} alt='image1' width={50} height={50}/>
                <img src={js} alt='image1' width={50} height={50}/>
                <img src={java} alt='image1' width={50} height={50}/>
                <img src={firebase} alt='firebase' width={50} height={50}/>
            </div>
            <div>
                <img src={mongodb} alt='image1' width={50} height={50}/>
                <img src={vscode} alt='image1' width={50} height={50}/>
                <img src={reactjs} alt='image1' width={50} height={50}/>
                <img src={github} alt='image1' width={50} height={50}/>
                <img src={cloudinary} alt='cloudinary' width={50} height={50}/>
            </div>
        </div>
      </div>
      <div className='techeducation'>
      <h1>Technical Educations</h1>
        <div className='maineducation'>
        <div className='education'>
            <h3>Bachelor of Engineering</h3>
            <p>Tulsiramji Gaikwad Patil College of Engineering and Technology Mohgaon, Nagpur</p>
            <h6>Academic Year : 2019 - 2023</h6>
        </div>
        <div className='education'>
            <h3>Higher Secondary Certificate</h3>
            <p>Shrimati Saraswati Bai Nistane Vidyalay Takalghat, Nagpur</p>
            <h6>Academic Year : 2018 - 2019</h6>
        </div>
        <div className='education'>
            <h3>Secondary School Certificate</h3>
            <p>Shrimati Saraswati Bai Nistane Vidyalay Takalghat, Nagpur</p>
            <h6>Academic Year : 2016 - 2017</h6>
        </div>
        </div>
      </div>
      <div className='expertise'>
        <h1>Expertise</h1>
        <div className='mainexpertiseee'>
            <div className='sexpertise'>
                <img src={frontenddevelopment} alt='frontendDev' width={300} height={180}/>
                <h3>Frontend Development</h3>
            </div>
            <div className='sexpertise'>
                <img src={backenddevelopment} alt='frontendDev'  width={300} height={180}/>
                <h3>Backend Development</h3>
            </div>
            <div className='sexpertise'>
                <img src={webdevelopment} alt='frontendDev' width={300} height={180}/>
                <h3>Responsive Web Design</h3>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
