import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [persons, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData((persons) => res.data);
    });
  }, []);
  console.log(persons);

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
