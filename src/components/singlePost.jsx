import React from "react";
import Single from "./single.jsx";
import { useParams } from 'react-router-dom';

export default class singlePost extends React.Component {
  render() {
    let { id } = useParams();
    console.log(id)
    let posts = this.props;
    const divItem = posts.post.map((item, index) => (
      <Single
        key={index}
        post={item}
        index={index}
      />
    ));
    return (
    <div>
      <section className="flex flex-row flex-wrap mx-auto w-full">
        {divItem}
      </section>
    </div>
    );
  }
}