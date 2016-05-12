import React from "react";

class BrandImg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styles = { "padding": 0 };
    return <a href={ this.props.path } style={ styles }
      className="navbar-brand">
      <img src={ this.props.img } />
    </a>;
  }
}

export default BrandImg;
