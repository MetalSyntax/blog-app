import React from "react";
import { addComment } from "../actions/postActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.addNewComment = this.addNewComment.bind(this);
      }
      addNewComment() {
        this.props.addComment({
            id:
            Math.max(
              ...this.props.postList.map(function (o) {
                return o.id;
              })
            ) + 1,
          username: this.usernameCommentInput.value,
          content: this.contentCommentInput.value,
        })
      }
  render() {
    const {username, content} = this.props;
    console.log(this.props)
    return (
      <section className="flex flex-row flex-wrap mx-auto w-full">
        <form className="w-full">
          <div className="flex flex-wrap mb-4">
            <div className="relative w-full appearance-none label-floating">
              <input
                maxlength="20"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                placeholder="Username"
                ref={(usernameCommentInput) => (this.usernameCommentInput = usernameCommentInput)}
                defaultValue={username}
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
              <textarea
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="content"
                type="text"
                placeholder="Content of comment"
                ref={(contentCommentInput) => (this.contentCommentInput = contentCommentInput)}
                defaultValue={content}
              ></textarea>
              <label
                htmlFor="content"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Content of comment
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <button
              className="w-full shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded uppercase"
              type="submit"
              onClick={this.addNewComment}
            >
              Comment
            </button>
          </div>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      postList: state,
    };
  };
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        addComment: addComment,
      },
      dispatch
    );
  };

export default connect(mapStateToProps,mapDispatchToProps)(Comments);

/*export default Comments;*/