import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Router</h1>
        <h2>This is About screen!</h2>
        <UserClass name={"VR (Class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>Router</h1>
//       <h2>This is About screen!</h2>
//       {/* <User name={"VR (Function)"} /> */}
//       <UserClass name={"VR (Class)"} />
//     </div>
//   );
// };

export default About;
