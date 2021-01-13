import React from "react";

class Form extends React.Component {
    render() {
        const {username,title,content} = this.props;
        return (
            <section className="flex flex-row flex-wrap mx-auto w-full">
                <form id="contact-me" className="w-full max-w-3xl mx-auto bg-white p-8 text-gray-700">
                    <h1 className="w-full text-2xl font-semibold my-5">Create a new post</h1>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="username" type="text" placeholder="Username"
                            ref={usernameInput => this.usernameInput = usernameInput} defaultValue = {username}
                            required />
                            <label for="username" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Username
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <input className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                            id="title" type="text" placeholder="Title of post"
                            ref={titleInput => this.titleInput = titleInput} defaultValue = {title}
                            required />
                            <label for="title" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Title of post
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                        <div className="relative w-full appearance-none label-floating">
                            <textarea className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="content" type="text" placeholder="Content of post"ref={contentInput => this.contentInput = contentInput} defaultValue = {content}></textarea>
                                <label for="content" className="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Content of post
                            </label>
                        </div>
                    </div>
                <div className="">
                    <button className="w-full shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit" onClick={this.addNewStudent}>
                        Save
                    </button>
                </div>
                </form>
            </section>
            );
        }
}
  
export default Form;