import React from 'react';
import img1 from './Assets/profile.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="aboutheading">
        <h1>About me</h1>
      </div>
      <div className="subabout">
        <div className="leftseab">
          <img src={img1} alt="img" className="profile-img" />
        </div>
        <div className="rigthseab">
          <h1>
            I'm Shruti Aryachandra Kamble and I am a{' '}
            <span style={{ color: '#FF4081' }}>Full Stack Developer</span>
          </h1>
          <p>
            I am a Full Stack Developer with experience in frontend, backend,
            and database technologies. I have a strong interest in creating
            interactive and user-friendly web applications using various
            programming languages and frameworks. I'm always eager to learn new
            technologies and stay updated with the latest trends in the tech
            industry.
          </p>
          <p>
            I completed my Bachelor of Engineering (B.E.) in Information
            Technology in 2023 from Tulsiramji Gailwad Patil College of
            Engineering and Technology, Mohgaon, Nagpur. Throughout my college
            years, I learned the key concepts of web development and software
            engineering. I am now ready to apply what I’ve learned to real-world
            projects and improve my skills in the tech field. I look forward to
            working on exciting projects and growing as a developer.
          </p>
          <button>Download CV</button>
        </div>
      </div>
      <div className="divline"></div>
      
      {/* Skills Section */}
      <div className="skills">
        <div className="soft-skills">
          <h1>Soft Skills</h1>
          <div className="skills-box">
            <div className="skill">Communication</div>
            <div className="skill">Problem Solving</div>
            <div className="skill">Teamwork</div>
            <div className="skill">Adaptability</div>
          </div>
        </div>
        <div className="tech-skills">
          <h1 style={{margin:'30px'}}>Technical Skills</h1>
          <div className="skills-box">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Firebase</div>
            <div className="skill">Bootstrap</div>
            <div className="skill">MongoDB</div>
            <div className="skill">Git</div>
            <div className="skill">SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
