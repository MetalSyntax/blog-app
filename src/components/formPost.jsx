import React from "react";
import { addPost } from "../actions/actionsCreator";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.addNewPost = this.addNewPost.bind(this);
  }

  addNewPost(e) {
    e.preventDefault();
    this.props.addPost({
      id: Math.max(...this.props.posts.map(function (o) {return o.id;})) + 1,
      username: this.usernameInput.value,
      title: this.titleInput.value,
      content: this.contentInput.value,
      excerpt: this.excerptInput.value,
      date:
        new Date().getDate() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getFullYear(),
      comments: 0,
    });
    this.formPostRef.reset();
  }

  render() {
    return (
      <section className="flex flex-row flex-wrap mx-auto w-full">
        <form
          id="post-me"
          className="w-full max-w-3xl mx-auto bg-white p-8 text-gray-700"
          ref={(el) => this.formPostRef = el}
        >
          <h1 className="w-full text-2xl font-semibold my-5">
            Create a new post
          </h1>
          <div className="flex flex-wrap mb-4">
            <div className="relative w-full appearance-none label-floating">
              <input
                maxLength="20"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-green-500"
                id="username"
                type="text"
                placeholder="Username"
                ref={(usernameInput) => (this.usernameInput = usernameInput)}
                required
              />
              <label
                htmlFor="username"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Username
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="relative w-full appearance-none label-floating">
              <input
                maxLength="70"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-green-500"
                id="title"
                type="text"
                placeholder="Title of post"
                ref={(titleInput) => (this.titleInput = titleInput)}
                required
              />
              <label
                htmlFor="title"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Title of post
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                rows="4"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-green-500"
                id="content"
                type="text"
                placeholder="Content of post"
                ref={(contentInput) => (this.contentInput = contentInput)}
              ></textarea>
              <label
                htmlFor="content"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Content of post
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                rows="2"
                maxLength="150"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-green-500"
                id="excerpt"
                type="text"
                placeholder="Excerpt of post"
                ref={(excerptInput) => (this.excerptInput = excerptInput)}
              ></textarea>
              <label
                htmlFor="excerpt"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Excerpt of post
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4 justify-center">
            <button
              className="shadow bg-green-700 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-semibold uppercase py-2 px-8 rounded"
              type="submit"
              onClick={this.addNewPost}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addPost: addPost,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
