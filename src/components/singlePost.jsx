import React from "react";
import Single from "./single.jsx";

export default class singlePost extends React.Component {
  render() {
    let posts = this.props.post;
    let id = this.props.match.params.id
    const postId = posts.filter(post => post.id == id).map((item, index) => (
      <Single 
        key={index} 
        post={item} 
        index={index}
      />
    ));
      /*<Single 
        key={index} 
        post={item} 
        index={index}
      />*/
    return (
    <div>
      <section className="flex flex-row flex-wrap mx-auto w-full">
        {postId}
      </section>
    </div>
    );
  }
}