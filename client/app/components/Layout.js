import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Navbar from "./navbar/Navbar";
import ButtonPanel from "./home/ButtonPanel";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: this.props.data };

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(e) {
    this.setState({
      text: e.target.value
    })
  }

  getChildContext() {
    return { navItems: this.props.navbar };
  }

  render() {
    return <div>
      <Router history={ browserHistory }>
        <Route path="/" component={ Navbar }>
          <IndexRoute component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/projects" component={ Projects } />
        </Route>
      </Router>

      <p>Your Input: { this.state.text }</p>
      <input type="text" value={ this.state.text }
        placeholder="a placeholder" onChange={ this.inputChanged } />
      <ButtonPanel values={ this.state.text } />
    </div>;
  }
}

Layout.childContextTypes = {
  navItems: React.PropTypes.array
};

export default Layout;
