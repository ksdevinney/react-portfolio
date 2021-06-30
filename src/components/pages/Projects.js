import React, { useState } from "react";
import mywork from "./mywork.json"
import Card from "../Card"

function Projects (){
  const [mywork1, setMywork] = useState(mywork)
  console.log(mywork);
  return (
    <div className="container">
   
      <h1>My Work</h1>
      <div>
       {mywork1.map((proj) => (
         <Card 
         id={proj.id}
         key={proj.id}
         App={proj.App}
         image={proj.image}
         description={proj.description}
         github={proj.github}
         live={proj.live}
         />
       ))}
    </div>
    </div>
  );
}

export default Projects;