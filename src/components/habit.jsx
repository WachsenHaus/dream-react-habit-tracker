import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };
    handleIncrement = (event) =>{
        //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함
        this.setState({count: this.state.count +1});
        //this.state.count +=1; 이렇게 하면 리액트에서는 업데이트 되었는지 모른다. 그렇기 때문에 꼭 setstate를 사용해야한다.
    }
    handleDecrement = (event) =>{
        //state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 해야 함
        const count = this.state.count - 1;
        this.setState({count: count<0?0:count});
        //this.state.count +=1; 이렇게 하면 리액트에서는 업데이트 되었는지 모른다. 그렇기 때문에 꼭 setstate를 사용해야한다.
    }
    render() {
        const {name,count} = this.props.habit;
       return (
           <>
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete">
                <i className="fas fa-trash"></i>
            </button>
           </>
       );
    }
}

export default Habit;
