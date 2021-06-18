import React, { useEffect, useState } from "react";
import usePeopleStore from "../store";

export const Input = () => {
  // const inputRef = useRef();
  const [personName, setPersonName] = useState("");
  const addPerson = usePeopleStore((state) => state.addPeople);
  const people = usePeopleStore((state) => state.people);
  const add = (event: any) => {
    // addPerson(event.target.value);
    // console.log("Event value > ", event.target.value);
    setPersonName(event.target.value);
  };

  const handleOnClick = () => {
    addPerson(personName);
  };

  useEffect(() => {
    console.log("Person > ", people);
  });

  return (
    <div>
      <input type="text" value={personName} onChange={(event) => add(event)} />
      <button onClick={() => handleOnClick()}> Add Person</button>
    </div>
  );
};
