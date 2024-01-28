import { Component } from "react";
// import newUser from "./NewUser";
import PageHeader from "./header";
import PageFooter from "./footer";
import Users from "./Users";
import AddUser from "./AddUser";

export default class MainApp extends Component {
  componentDidMount() {
    const json = localStorage.getItem("gog");
    const userData = JSON.parse(json);
    if (userData) {
      this.setState(() => ({ userData }));
    }
  }

  componentDidUpdate() {
    const json = JSON.stringify(this.state.userData);
    localStorage.setItem("gog", json);
  }

  state = {
    headerData: "This is header using variable...",
    footerData: "This is footer using variable...",
    userData: [],
  };

  addUser = (data) => {
    this.setState((prevState) => {
      return { userData: prevState.userData.concat(data) };
    });
  };

  deleteUsers = () => {
    this.setState(() => {
      return { userData: [] };
    });
  };

  deleteUser = (user) => {
    this.setState((prevState) => {
      return {
        userData: prevState.userData.filter((option) => user !== option),
      };
    });
  };

  render() {
    // const headerData = "This is header using variable...";
    // const footerData = "This is footer using variable...";
    // const userData = ["Admin", "Manager", "QA"];

    return (
      <div>
        <PageHeader hdata={this.state.headerData} />
        <h1>Welcome to main app</h1>
        <AddUser au={this.addUser} />
        <Users
          udata={this.state.userData}
          du={this.deleteUsers}
          hasData={this.state.userData.length > 0}
          dUser={this.deleteUser}
        />
        <PageFooter fdata={this.state.footerData} />
      </div>
    );
  }
}
