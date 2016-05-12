import React from "react";

class Brand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <a href={ this.props.path } onClick={ this.props.callback }
      className={ "navbar-brand " + ((this.props.active)? "active": "") }>
      { this.props.value }
    </a>;
  }
}

export default Brand;
