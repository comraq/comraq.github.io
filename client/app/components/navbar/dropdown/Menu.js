import React from "react";

import DropdownItem from "./Item";

class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const profiles = this.props.profiles.map((e, i) =>
      <DropdownItem { ...e } key={ i }/>);

    const emails = this.props.emails.map((e, i) =>
      <DropdownItem { ...e } key={ i }/>);

    return <li className={ "dropdown " + (this.props.active)? "open": "" }>
      <a href="#" className="dropdown-toggle" data-toggle="dropdown"
        role="button" aria-haspopup="true"
        aria-expanded={ this.props.active } onClick={ this.props.callback }>
        { this.props.value }<span class="caret"></span>
      </a>
      <ul className="dropdown-menu">
        { profiles }
        <li role="separator" class="divider"></li>
        <li class="dropdown-header">Email</li>
        { emails }
      </ul>
    </li>;
  }
}

export default DropdownMenu;
