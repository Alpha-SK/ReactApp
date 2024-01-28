import { Component } from "react";

export default class PageFooter extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.fdata}</h3>
      </div>
    );
  }
}
