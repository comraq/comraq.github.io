import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className={ (this.props.active)? "active": "" }>
      <a href={ this.props.path } onClick={ this.props.callback }>
        { this.props.value }
      </a>
    </li>;
  }
}

export default Nav;
