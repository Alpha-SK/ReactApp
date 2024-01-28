import { Component } from "react";
import User from "./User";
import Button from "@mui/material/Button";

export default class Users extends Component {
  render() {
    return (
      <div>
        {this.props.udata.map((data) => (
          <User key={data} ud={data} du={this.props.dUser} />
        ))}

        <Button
          disabled={!this.props.hasData}
          onClick={this.props.du}
          variant="contained"
        >
          Delete All
        </Button>
      </div>
    );
  }
}
