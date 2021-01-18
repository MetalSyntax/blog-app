import React from "react";
import Single from "./single.jsx";
import Comments from "./comments";

class SinglePost extends React.Component {
  render() {
    const posts = this.props.posts;
    const Id = this.props.match.params.id;
    const postSingle = posts.filter((post) => post.id === parseInt(Id));
    const postComments = this.props.comments[Id] || []; 

    return (
      <section className="flex flex-row flex-wrap mx-auto w-full">
        <Single {...this.props} postSingle={postSingle} />
        <Comments  {...this.props} postComments={postComments}/>
      </section>
    );
  }
}

export default SinglePost;
