import React from "react";
 
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
  }
  render() {
    return (
      <div>
        <p>Giá trị {this.state.index}</p>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index + 1
            })
          }}
        >
          Tang
        </button>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index -1
            })
          }}
        >
          Giam
        </button>
      </div>
    );
  }
}
export default Count;