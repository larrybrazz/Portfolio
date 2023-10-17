import React, { useCallback } from 'react';

const About = () => {

  const handleDownloadResume = useCallback(() => {
    try{const resume = new Blob(
      [
        `Olanrewaju Adebayo
Frontend Engineer
St Mary’s College, Fenham Hall Drive,
Newcastle, UK NE4 9YH
+44(0)7823719099
olanrewajuadebayo004@gmail.com
Summary:
Highly skilled and experienced frontend developer with expertise in website development
and design. Proficient in creating engaging user experiences and implementing
cutting-edge technologies. Strong problem-solving and communication skills.Proficient in
Node.js, Express, and MongoDB for backend development.
Experience
01/2021- Present
Freelancing, Frontend Engineer
● Consulted with clients to understand and document website requirements and
also improve user experience
● Prepared mock-ups and storyboards to visualise web pages design that appeals
to customers' emotions.
● Developed web application architecture and determined hardware and software
requirements
● Sourced, selected, and organised information for website content
● Designed the appearance, layout, and flow of websites
● Written and Conducted tests, performed security measures and quality controls
● Wrote, modified, integrated and tested websites related code.
● Utilised GIT for Version control.
● Collaborated with backend teams using Node.js, Express, and MongoDB for
seamless integration of frontend and backend functionalities.
01/2020 - 12/ 2022
New Horizon - Frontend Developer
● Collaborated with a team to enhance web design for improved user engagement
and load times, resulting in a 95% positive user feedback.
● Implemented website state management using Redux and Redux Toolkit.
● Simplified the site's design, prioritising user accessibility and visual
representation.
2 
● Resolved customer needs promptly and maintain high customer satisfaction
● Effectively addressed technical issues and provided troubleshooting solutions.
● Proficient in API documentation, testing, and integration, using tools like
Postman, Vite-test , jest.
● Conducted comprehensive testing of APIs for functionality, reliability, and security.
● Worked closely with backend developers, utilising Node.js, Express, and
MongoDB for data integration and real-time updates.
Skills
● Website Development
● HTML/CSS, Tailwind CSS, SCSS and Bootstrap
● Javascript
● React, Redux and Redux toolkit
● Node js(Express)
● MongoDB
● Responsive Design
● User Interface (UI) Design
● Docker
● SQL
● Mock-up and Storyboard Creation
● Api Integration and Test-Driven Development(TDD)
● Web Architecture
● Content Creation and Optimization
● Software testing and Quality Control
● Git and Github
● SEO
● Microsoft Office
● Excel
● Powerpoint
● Canvas
Personal Qualities
● Attention to Details
● Communication , Organisation and Management Skills
● Fast Learner
● Multitasking
● Ability to work Under Pressure
● Problem Solving and Creative thinking
3 
Education
Dec 2014 - Jan 2020
University of Agriculture, Abeokuta- Bachelor In Agriculture
Crop Protection.
Feb 2023 - Feb 2024
University of Sunderland, United Kingdom- Msc In International Business management
International Business management
Certificates
● Frontend Web Development (2021)
Projects.
● My github Profile: https://github.com/larrybrazz
Hobbies
● Listening to music
● Swimming
● Dancing
● Football
● Travelling and Meeting New People`,
      ],
      {
        type: "application/pdf",
      }
    );

    const url = URL.createObjectURL(resume);
    const link = document.createElement('a');
    link.href = url; 
    link.download = "my-resume.pdf";
    link.click();
      URL.revokeObjectURL(url);
    } catch(error) {
      console.error("Error creating and downloading PDF:", error)
    }
  },[])

  return (
    <div id="about">
      <div className=" container mx-auto space-y-8 grid md:grid-cols-3 grid-col p-1 bg-black text-white">
        <div>
          <div
            className="w-72 h-72 bg-red-400 "
            style={{ margin: "50px" }}
          >

          </div>
          <img
            src="/Teamwork.webp"
            alt="teamwork"
            style={{ width: "300px", marginTop: "-200px" }}
          />
        </div>

        <div className="space-y-5">
          <p className="text-3xl text-red-900">About me</p>
          <h2 className="text-5xl"> I'm </h2>
          <h2 className="text-5xl">
            {" "}
            A <span className="text-red-900">Software Engineer</span>{" "}
          </h2>
          <p className="text-3xl py-5 px-4">Based in Newcastle, United Kingdom</p>
          <p className="font-bold py-6 px-4 text-slate-300 text-xl tracking-wider italic w-full">
            {" "}
            Hi! My name is Olanrewaju Adebayo. I am Software Engineer, and I'm
            very passionate and dedicated to my work. With 3 years experience as
            a professional Web developer. I have acquired the skills and
            knowledge necessary to make your project a success.A trial will
            convince you.
          </p>
          <button
            className="rounded p-3 text-xl bg-red-500 hover:bg-transparent border"
            onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>

        <div  className="w-full">
          <img
            src="/Teamwork.webp"
            alt=""
            style={{ width: "300px", marginBottom: "-200px" }}
          />
          <div
            className="w-72 h-72 bg-red-200 "
            style={{ margin: "50px" }}
          ></div>
        </div>
      </div>

      <div className=" md:w-11/12 mx-auto bg-slate-800 pt-28 mt-4 rounded-md text-white px-8">
        <p className="text-3xl font-bold my-4">My Skills</p>
        <p className="font-bold my-4">
          I am working on a professional, visually sophisticated and
          technologically proficient, responsive and multi-functional creative
          personal resume portfolio.
        </p>
        <ul className="space-y-4 text-orange-800 font-extrabold ">
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>BOOTSRAP</li>
          <li>TAILWIND CSS</li>
          <li>REACT</li>
          <li> REDUX AND REDUX TOOLKIT</li>
          <li>FIREBASE</li>
          <li>NODEjs, EXPRESS AND MONGODB</li>
        </ul>
        <div className="grid grid-cols-5 gap-4 pb-20">
          <img className="rounded" src="/ReactLogo.webp" alt="" />
          <img src="/Three.webp" alt="" />
          <img src="/bootstrap2.webp" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About