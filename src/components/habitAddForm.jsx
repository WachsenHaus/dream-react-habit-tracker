import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const inputText = this.inputRef.current.value;
    inputText && this.props.onSubmit(inputText);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <>
        <form className="add-form">
          <input
            ref={this.inputRef}
            className="add-input"
            type="text"
            placeholder="입력해주세요"
          />
          <button className="add-button" onClick={this.onSubmit}>
            Add
          </button>
        </form>
      </>
    );
  }
}

export default HabitAddForm;
