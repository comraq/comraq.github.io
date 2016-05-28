import React from "react";

import Brand from "./Brand";
import BrandImg from "./BrandImg";
import Nav from "./Nav";
import DropdownMenu from "./dropdown/Menu";

class Navbar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 1
    };

    this.navClicked = this.navClicked.bind(this);
  }

  navClicked(key) {
    return event => this.setState({ active: key });
  }

  render() {
    let navs = this.context.navItems.map((e, i) => {
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
          return <Nav { ...props } />

        case "dropdown":
          return <DropdownMenu { ...props } profiles={ e.profiles }
                   emails={ e.emails } />;

        default:
          return "default";
      }
    });

    return <div>
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">{ navs }</ul>
      </nav>
      { this.props.children }
    </div>;
  }
}

Navbar.contextTypes = {
  navItems: React.PropTypes.array
};

export default Navbar;
