import React from "react";
import { AddComment } from "../actions/actionsCreator.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class FormComments extends React.Component {
      constructor(props) {
        super(props);
        this.addNewComment = this.addNewComment.bind(this);
      }
      addNewComment = e => {
        e.preventDefault();
        const { id }= this.props.match.params;
        const username = this.usernameCommentInput.value;
        const content = this.contentCommentInput.value;
        this.props.AddComment(parseInt(id), username, content);
        this.formCommentRef.reset();
        setTimeout(() => {
          alert("Your comment published Successfully");
        }, 500);
      }
      render() {
      return (
        <section className="flex flex-row flex-wrap mx-auto w-full">
        <form className="w-full" ref={(el) => this.formCommentRef = el}>
          <div className="flex flex-wrap mb-4">
            <div className="relative w-full appearance-none label-floating">
              <input
                maxLength="20"
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-10/12 mx-auto bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="username"
                type="text"
                placeholder="User Name"
                ref={(usernameCommentInput) =>
                  (this.usernameCommentInput = usernameCommentInput)
                }
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
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-10/12 mx-auto bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                id="content"
                type="text"
                placeholder="Content of comment"
                ref={(contentCommentInput) =>
                  (this.contentCommentInput = contentCommentInput)
                }
                required
              ></textarea>
              <label
                htmlFor="content"
                className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
              >
                Content of comment
              </label>
            </div>
          </div>
          <div className="flex flex-wrap mb-4 justify-center">
            <button
              className="shadow bg-green-700 hover:bg-green-800 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-4 rounded uppercase"
              type="submit"
              onClick={this.addNewComment}
            >
              Comment
            </button>
          </div>
        </form>
    </section>
      )
    }
}
const mapStateToProps = (state) => {
    return {
      comments: state.comments,
      posts: state.posts,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        AddComment: AddComment,
      },
      dispatch
    );
  };
  export default connect(mapStateToProps, mapDispatchToProps)(FormComments);