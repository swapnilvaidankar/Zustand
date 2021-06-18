import React from "react";
import usePeopleStore from "../store";

const People = () => {
  const people = usePeopleStore((state) => state.people);

  return (
    <div>
      <h3> We have {people.length} people </h3>
      <ul>{people.length && people.map((p) => <li>{p.person}</li>)}</ul>
    </div>
  );
};

export default People;
