import React from "react";
import Cards from "./cards.jsx";

export default class CardsList extends React.Component {
  render() {
    let posts = this.props.postList;
    const divItem = posts.map((item, index) => (
      <Cards
        key={index}
        post={item}
        index={index}
      />
    ));
    return <div>{divItem}</div>;
  }
}