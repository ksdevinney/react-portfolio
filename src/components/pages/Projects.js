import React, { useState } from "react";
import mywork from "./mywork.json"
import Card from "../Card"

function Projects (){
  const [mywork1, setMywork] = useState(mywork)
  return (
    <div className="container">
   
      <h1>My Work</h1>
      <div>
       {mywork1.map((proj,key) => (
         <Card 
         id = {proj.id}
         key={key}
         App={proj.App}
        //  screenshot={proj.screenshot}
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