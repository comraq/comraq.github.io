import React from "react";

import Brand from "./Brand";
import BrandImg from "./BrandImg";
import Nav from "./Nav";
//import DropdownMenu from "./dropdown/Menu";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };

    this.navClicked = this.navClicked.bind(this);
  }

  navClicked(key) {
    return event => this.setState({ active: key });
  }

  render() {
    let navs = this.props.navItems.map((e, i) => {
      const props = {
        key: i,
        active: i == this.state.active,
        value: e.value,
        path: e.path,
        callback: this.navClicked(i)
      }

      switch(e.type) {
        case "brand-img":
          return <BrandImg { ...props } img={ e.img } value="" />;

        case "brand":
          return <Brand { ...props } />;

        case "nav":
          return <Nav { ...props } />;

        case "dropdown":
          return "dropdown";

        default:
          return "default";
      }
    });

    return <nav className="navbar navbar-default">
      <ul className="nav navbar-nav">{ navs }</ul>
    </nav>;
  }
}

export default Navbar;
