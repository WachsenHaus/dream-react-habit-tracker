import React, { Component } from "react";
import "./app.css";
import HabitAddForm from "./components/habitAddForm";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    totalCount: 3,
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  changeCount = (length) => {
    const totalCount = length;
    this.setState({ totalCount });
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
    this.changeCount(habits.length);
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count < 1 ? (habits[index].count = 0) : habits[index].count--;

    this.setState({ habits });
    this.changeCount(habits.length);
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
    this.changeCount(habits.length);
  };
  handleAdd = (habit) => {};

  render() {
    return (
      <>
        <Navbar totalCount={this.state.totalCount} />
        <HabitAddForm onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
