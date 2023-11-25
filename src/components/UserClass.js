import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };

    // console.log("Child Constructor Called");
  }

  async componentDidMount() {
    // console.log("Child Component Did Mount Called");
    const data = await fetch("https://api.github.com/users/IyappanV");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  render() {
    // console.log("Childrent Render Called");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h3>Location: {location}</h3>
        <h4>Contact: +91 7619417835</h4>
      </div>
    );
  }
}

export default UserClass;
