import React, { Component } from "react";
import PubSub from "pubsub-js";
import { nanoid } from "nanoid";
class Header extends Component {
  myRef = React.createRef();
  handleDown = e => {
    // console.log(this.myRef.current.value)
    if (e.keyCode === 13) {
      if (this.myRef.current.value.trim() === "") {
        alert("请输入内容!!!");
      } else {
        PubSub.publish("atguigu", {
          id: nanoid(),
          name: this.myRef.current.value,
          done: false,
          isShow: false
        });
        this.myRef.current.value = "";
      }
    }
  };
  render() {
    return (
      <div>
        {/*Header*/}
        <input
          type="text"
          autoFocus="autofocus"
          placeholder="请输入你的任务名称,按回车确认"
          style={{ width: "500px", height: "30px", outline: "none" }}
          ref={this.myRef}
          onKeyUp={this.handleDown}
        />
      </div>
    );
  }
}

export default Header;
