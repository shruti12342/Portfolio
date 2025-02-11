import React from 'react'
import './Projects.css'
import img1 from './Assets/profile.jpg';

const Projects = () => {
  return (
    <div className='projects'>
      <h1 style={{marginTop:'5%'}}>Projects</h1>
      <div className='allprojects'>
        <div className='uprojects' style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <div className='p1'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
          <div className='p2'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
          <div className='p3'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
          <div className='p4'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
        </div>
        <div className='dprojects'  style={{display:'flex', flexDirection:'row'}}>
        <div className='p1'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
          <div className='p2'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
          <div className='p3'>
          <img src={img1} width={300} height={200}/>
          <h3>Project 1</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
