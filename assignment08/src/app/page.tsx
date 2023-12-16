"use client"
import { useState } from "react";

const personsList = ['Usman','Ali','Shami','Moiz','Zubair','Hamza'];

export default function Home() {
  // Declaring the Person Position [INDEX] in the Persons Array
  const [currentPerson, setCurrentPerson] = useState(0);

  // Setting First Person as Default Person
  const currentPersonName = personsList[currentPerson];

  // Function Definition For Next Person
  const handleNextPerson = ()=> {
    setCurrentPerson((lastPersonIndex)=> (lastPersonIndex + 1) % personsList.length);
  };

  // Function Definition For Next Person
  const handlePreviousPerson = ()=> {
    setCurrentPerson((lastPersonIndex)=> (lastPersonIndex - 1 + personsList.length) % personsList.length);
  };

  return (
    <div className="container mx-auto text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">{currentPersonName}</h1>
      <div>
        <button className="mr-2" onClick={handlePreviousPerson}>
          Previous
        </button>
        <button onClick={handleNextPerson}>Next</button>
      </div>
    </div>
  )
}
