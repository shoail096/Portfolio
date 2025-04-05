import React from 'react';


const experiences = [

  {
    role: "Full Stack Developer(Intern)",
    company: "Hallo Tech Solutions",
    duration: "September,2023 – December, 2023",
    description: "Developed a dynamic website using React for the frontend and Flask/Express for the backend. Contributed to both UI/UX design and server-side logic."
  },


];

function Experience() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">My Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="content">
              <h4>{exp.role}</h4>
              <h6>{exp.company}</h6>
              <small>{exp.duration}</small>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
