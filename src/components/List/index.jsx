import React, { Component } from "react";
import "./index.css";
class List extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/*List*/}
        <ul>
          {this.props.users.map(item => {
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

export default List;
