import React from "react";
const topics = [
  {
    title: "Software Engineering",
    description: "Building Innovative software solutions for the modern world",
  },
  {
    title: "Electrical Engineering",
    description: "Powering Innovation in electroins and systems.",
  },
  {
    title: "Mechanical Engineering",
    description: "Desiging machines and systems that shape hte future.",
  },
  {
    title: "Chemical Engineering",
    description: "Advancing processes for sustainable future.",
  },
]
function EngineeringTopics() {
  return (
    <div>
      <h2>Engineering Topic</h2>
      {topics.map(function(item){
        return (
          <div>
            <h2>{item.title}</h2>
          <p>{item.description}</p></div>
        )
      
      })}
      
  
    </div>
  );
}
export default EngineeringTopics;