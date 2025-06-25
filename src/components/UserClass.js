import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component Mounted!");
  }

  render() {
    console.log("Render Called!");
    const { author } = this.props;
    return (
      <div>
        <div>Class Based Component</div>
        <h1>{author}</h1>
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          UPDATE COUNT
        </button>
      </div>
    );
  }
}

export default UserClass;
