import React from "react";

class Mybutton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="inline">
      <button className={ "btn " + this.props.class }
        onClick={ this.props.callback }>
        { this.props.value }
      </button>
    </div>;
  }
}

export default Mybutton;
