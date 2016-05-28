import React from "react";

class DropdownItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>
      <a href={ this.props.url } className="dropdown-item">
        { this.props.value }
        <img className="dropdown-icon" src={ this.props.img } />
      </a>
    </li>;
  }
}

export default DropdownItem;
