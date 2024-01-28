import { Component } from "react";
import Button from "@mui/material/Button";


export default class User extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.ud}
          <Button onClick={() => this.props.du(this.props.ud)} variant="outlined">Delete</Button>
        </h3>
      </div>
    );
  }
}
