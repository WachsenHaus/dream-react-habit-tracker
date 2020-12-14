import React, { Component } from "react";
import Habit from "./habit";

////
class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    this.setState({ habits }); // {habits:habits} 키와 밸류로서 로컬변수를 가르킨다. 동일할경우 생략이 가능하다.
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count < 1 ? (habits[index].count = 0) : habits[index].count--;

    this.setState({ habits });
  };
  handleDelete = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    // this.setState({ habits });
    //필터를 써보자... 구닥다리 방식은 이제그만
    const habits = this.state.habits.filter((item) => item.id !== habit.id); //필터함수는 해당하는 조건에 맞는 요소들을 모아 새로운 배열을 반환한다.
    //클릭한 아이디와 다른애들만 남게되는 함수이지
    this.setState({ habits });
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
