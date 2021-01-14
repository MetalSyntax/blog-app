import React from "react";
import { addPost } from "../actions/postActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.addNewPost = this.addNewPost.bind(this);
      }
      addNewPost() {
        this.props.addPost({
          id:
            Math.max(
              ...this.props.postList.map(function (o) {
                return o.id;
              })
            ) + 1,
          username: this.usernameInput.value,
          title: this.titleInput.value,
          content: this.contentInput.value,
          excerpt: this.excerptInput.value,
          /*date: this.dateInput.value,*/
          date: new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear(),
          comments: 0,
        });
      }
    render() {
        const {username, title, content, excerpt ,date} = this.props;
        return (
            <section className="flex flex-row flex-wrap mx-auto w-full">
                <form id="contact-me" className="w-full max-w-3xl mx-auto bg-white p-8 text-gray-700">
                    <h1 className="w-full text-2xl font-semibold my-5">Create a new post</h1>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <input maxlength="20"className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="username" type="text" placeholder="Username"
                            ref={usernameInput => this.usernameInput = usernameInput} defaultValue = {username}
                            required />
                            <label htmlFor="username" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Username
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <input maxlength="70" className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="title" type="text" placeholder="Title of post"
                            ref={titleInput => this.titleInput = titleInput} defaultValue = {title}
                            required />
                            <label htmlFor="title" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Title of post
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <textarea className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="content" type="text" placeholder="Content of post" ref={contentInput => this.contentInput = contentInput} defaultValue = {content}></textarea>
                                <label htmlFor="content" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Content of post
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <textarea maxlength="150" className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="excerpt" type="text" placeholder="Excerpt of post" ref={excerptInput => this.excerptInput = excerptInput} defaultValue = {excerpt}></textarea>
                                <label htmlFor="excerpt" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Excerpt of post
                            </label>
                        </div>
                    </div>
                    <div className=""> 
                        <button className="w-full shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="submit" onClick={this.addNewPost}>
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
      postList: state,
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
  
export default connect(mapStateToProps,mapDispatchToProps)(Form);

/*<!--<div className="flex flex-wrap mb-4">
<div className="relative w-full appearance-none label-floating">
    <input type="date" className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="date" ref={dateInput => this.dateInput = dateInput} defaultValue = {date} />
</div>
</div>-->*/