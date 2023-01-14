import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";
class Listl extends Component {
  state = { users: [] };
  componentDidMount() {
    // 订阅
    this.token = PubSub.subscribe("atguigu", (msg, stateObj) => {
      //   console.log("List组件收到数据了!!!", data);
      this.setState(stateObj);
    });
  }
  // 取消订阅
  componentWillUmount() {
    PubSub.unsubscribe();
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map(item => {
            return (
              <li key={item.id}>
                <img src={item.avatar_url} alt="head_portrait" />
                <p>{item.login}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Listl;
