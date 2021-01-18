import React from "react";
import Posts from "./post.jsx";

export default class PostGrid extends React.Component {
  render() {
    let posts = this.props.posts;
    const post = posts.map((item, index) => (
      <Posts comments={this.props.comments} key={index} post={item} index={index}/>
    ));
    return (
      <div className="flex flex-row flex-wrap mx-auto lg:h-screen w-full">
        <h1 className="flex items-center justify-center text-center text-3xl uppercase font-bold py-4 w-full">Updates</h1>
        {post}
      </div>
    );
  }
}