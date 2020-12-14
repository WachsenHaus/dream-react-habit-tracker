import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

////
class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };
  handleSubmit = (inputText) => {
    this.props.onSubmit(inputText);
  };
  render() {
    return (
      <>
        <HabitAddForm onSubmit={this.handleSubmit} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
