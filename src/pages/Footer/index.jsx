import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
class Footer extends Component {
  state = { total: 0, isDone: 0, todoArr: [] };
  componentDidMount() {
    this.token = PubSub.subscribe("atguig", (msg, stateObj) => {
      console.log("Item组件收到数据了!!!", stateObj);
      const { todos } = stateObj;
      const doneCount = todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
      this.setState({ total: todos.length, isDone: doneCount, todoArr: todos });
    });
  }
  componentWillUmount() {
    PubSub.unsubscribe();
  }

  handleCheckAll = event => {
    const { todoArr } = this.state;
    console.log(todoArr);
    const newTodos = todoArr.map(todoObj => {
      return { ...todoObj, done: event.target.checked };
    });
    this.setState({ todoArr: newTodos }, () => {
      PubSub.publish("getState", { todoArr: newTodos });
    });
  };

  handleClearAllDone = () => {
    const { todoArr } = this.state;
    console.log(todoArr);
    const newTodos = todoArr.filter(todoObj => {
      return todoObj.done === false;
    });
    this.setState({ todoArr: newTodos }, () => {
      PubSub.publish("getStates", { todoArr: newTodos });
    });
  };

  render() {
    const { total, isDone } = this.state;
    return (
      <div className="div">
        <input
          type="checkbox"
          checked={isDone === total && total !== 0 ? true : false}
          onChange={this.handleCheckAll}
        />已完成{isDone}/全部{total}
        <button onClick={this.handleClearAllDone}>清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;
