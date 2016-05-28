import React from "react";

import { Link } from "react-router";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li className={ (this.props.active)? "active": "" }>
      <Link to={ this.props.path } onClick={ this.props.callback }>
        { this.props.value }
      </Link>
    </li>;
  }
}

export default Nav;
