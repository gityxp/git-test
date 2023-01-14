import React, { Component } from "react";
import axios from "axios";
class Search extends Component {
  myRef = React.createRef();

  search = () => {
    // alert(this.myRef.current.value)
    axios
      .get(`https://api.github.com/search/users?q=${this.myRef.current.value}`)
      .then(
        response => {
          this.props.updateState({ users: response.data.items });
        },
        error => {
          alert("失败了", error);
        }
      );
  };
  render() {
    return (
      <div>
        {/*Search*/}
        <input placeholder="请输入关键词" ref={this.myRef} />&nbsp;
        <button onClick={this.search}>搜索</button>
      </div>
    );
  }
}

export default Search;
