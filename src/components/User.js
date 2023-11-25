import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count1}</h1>
      <h1>Name: {name}</h1>
      <h3>Location: Bengalore</h3>
      <h4>Contact: +91 7619417835</h4>
    </div>
  );
};

export default User;
