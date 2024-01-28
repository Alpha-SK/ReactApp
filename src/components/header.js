import { Component } from "react";

export default class PageHeader extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.hdata}</h3>
      </div>
    );
  }
}
