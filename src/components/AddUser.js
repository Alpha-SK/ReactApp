import { Component } from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';


export default class AddUser extends Component {
  addUser = (e) => {
    e.preventDefault();
    const inputdata = e.target.elements.uname.value;
    this.props.au(inputdata);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          UserName:
          <TextField type="text" name="uname" id="outlined-basic" label="Outlined" variant="outlined"/>
          <Button type="submit" variant="text">
            Add User
          </Button>
        </form>
      </div>
    );
  }
}
