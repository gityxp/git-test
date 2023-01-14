import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
class Item extends Component {
  state = {
    isShow: false,
    todos: [
      { id: "001", name: "吃饭", done: true, isShow: false },
      { id: "002", name: "睡觉", done: true, isShow: false },
      { id: "003", name: "打代码", done: false, isShow: false },
      { id: "004", name: "逛街", done: true, isShow: false }
    ]
  };
  componentDidMount() {
    this.token = PubSub.subscribe("atguigu", (msg, stateObj) => {
      const { todos } = this.state;
      this.setState({ todos: [...todos, stateObj] }, () => {
        PubSub.publish("atguig", { todos: this.state.todos });
      });
    });
    PubSub.publish("atguig", { todos: this.state.todos });

    this.toke = PubSub.subscribe("getState", (msg, stateObj) => {
      this.setState({ todos: stateObj.todoArr });
      PubSub.publish("atguig", { todos: stateObj.todoArr });
    });

    this.tok = PubSub.subscribe("getStates", (msg, stateObj) => {
      this.setState({ todos: stateObj.todoArr });
      PubSub.publish("atguig", { todos: stateObj.todoArr });
    });
  }
  componentWillUmount() {
    PubSub.unsubscribe(this.token);
    PubSub.unsubscribe(this.toke);
    PubSub.unsubscribe(this.tok);
  }

  deleteTodo = id => {
    if (window.confirm("确定删除吗?")) {
      const { todos } = this.state;
      const newTodos = todos.filter(todoObj => {
        return todoObj.id !== id;
      });
      this.setState({ todos: newTodos });
      PubSub.publish("atguig", { todos: newTodos });
    } else {
      return false;
    }
  };

  handleCheck = id => {
    return event => {
      const { todos } = this.state;
      const newTodos = todos.map(todoObj => {
        if (todoObj.id === id)
          return { ...todoObj, done: event.target.checked };
        else return todoObj;
      });
      this.setState({ todos: newTodos });
      PubSub.publish("atguig", { todos: newTodos });
    };
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(item => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={this.handleCheck(item.id)}
                />
                {item.name}
                <button onClick={() => this.deleteTodo(item.id)}>删除</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Item;
