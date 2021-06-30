import React from "react";
import bioImage from "../../images/bio-image.JPG"

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am an SMU undergraduate with a degree in English. I have spent the past 8 years teaching
        elementary school, and now I am diving into web development. Computers have always been a hobby of
        mine, so I am excited to turn my passion into my career! Currently, I am enrolled in SMU's coding
        boot camp and excited to launch a new career soon!
      </p>
      <img className="bioImage" src={bioImage} alt="Katie Devinney"/>
    </div>
  );
}

export default About;
