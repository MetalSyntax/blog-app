import React from "react";
import Cards from "./cards.jsx";

export default class CardsList extends React.Component {
  render() {
    let posts = this.props.post;
    const divItem = posts.map((item, index) => (
      <Cards
        key={index}
        post={item}
        index={index}
      />
    ));
    return (
    <div>
      <section className="flex flex-row flex-wrap mx-auto w-full">
        <h1 className="text-center text-xl uppercase font-bold py-4 w-full">Updates</h1>
        {divItem}
      </section>
    </div>
    );
  }
}