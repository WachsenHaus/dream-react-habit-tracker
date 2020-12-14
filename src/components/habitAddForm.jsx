import React, { Component } from "react";

class HabitAddForm extends Component {
  handleAdd = () => {
    const inputText = document.querySelector(".add-input").value;
    inputText && this.props.onAdd(inputText);
  };
  render() {
    return (
      <>
        <input className="add-input" type="text" placeholder="입력해주세요" />
        <button onClick={this.handleAdd}>Add</button>
      </>
    );
  }
}

export default HabitAddForm;
