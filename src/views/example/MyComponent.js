import React from "react";
class Mycomponent extends React.Component {
  state = {
    name: "ABC",
    age: "34",
  };
  handleOnChangeName = (event) => {
    this.setState({
      //merge
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    alert("click me");
  };
  //re-render
  render() {
    return (
      <>
        <div class="1st">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          this is 1st component of state {this.state.name}
        </div>
        <div class="2nd">this is 2nd component of state {this.state.age}</div>
        <div class="3th">
          <button onClick={() => this.handleClickButton()}> Click me</button>
        </div>
      </>
    );
  }
}
export default Mycomponent;
