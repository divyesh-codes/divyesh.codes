import React, { useEffect, useState } from 'react';
import skillsData from './data/skill.json';


const About = () => {
    const [skills, seSkills] = useState([]);

    useEffect(() => {
        seSkills(skillsData.skills);
    },[]);

  return (
    <section id="about" className="about sec-pad">
    <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
            Discover more about me, my work, and the programming and technology skills I currently specialize in
            </span>
        </h2>
        <div className="about__content">
            <div className="about__content-main">
                <h3 className="about__content-title">Get to know me!</h3>
                <div className="about__content-details">
                    <p className="about__content-details-para">
                        👋<strong>Hey, I'm Divyesh</strong>, a passionate <b>Full-Stack Developer & UI/UX Designer</b> based in Ahmedabad, India.
                        With a strong eye for clean code and bold design, I specialize in building high-performing websites and applications that blend functionality with modern aesthetics.
                    </p>
                    <p className="about__content-details-para">
                        <strong>💻 What I Do:</strong>
                    </p>
                    <p className="about__content-details-para">
                        Custom Web & App Development<br/>
                        UI/UX Design with a focus on user-first experiences<br/>
                        WordPress, Laravel, and E-commerce solutions<br/>
                        Performance Optimization and SEO-friendly builds<br/>
                    </p>
                </div>
                <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">
                    Contact
                </a>
            </div>
            <div className="about__content-skills">
                <h3 className="about__content-title">My Skills</h3>
                <div className="skills">
                    {skills.map((skill, index) => (
                    <div className="skills__skill" key={index}>{skill}</div>
                    ))}
                </div>
                 <p className="about__content-details-para">
                        <strong>🎯 Why Work With Me?</strong>
                </p>
                <p className="about__content-details-para">
                    I believe in clear communication, pixel-perfect execution, and delivering solutions that align with your business goals. Whether you're a startup or an established brand, I’m here to bring your digital vision to life.
                </p>
            </div>
        </div>
    </div>
    </section>
  );
};

export default About;
