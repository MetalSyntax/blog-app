import React from "react";
import { Link } from "react-router-dom";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormComments from "./formComments"

class Single extends React.Component {
  render() {
    const { username, title, content, date } = this.props.postSingle[0];

    return (
      <div
        className="flex flex-wrap w-full px-4 py-6 w-full"
      >
        <span className="w-full text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-normal text-gray-800 uppercase py-4">
            {title}
          </h1>
        </span>
        <section className="w-full py-2">
          <span className="text-center text-sm px-2">
            <FontAwesomeIcon icon={faUser} /> Author:
            <span className="text-green-500 text-sm"> {username}</span>
          </span>
          <span className="text-center text-sm px-2">
            <FontAwesomeIcon icon={faCalendar} /> Date:{" "}
            <span className="text-green-500 text-sm">{date}</span>
          </span>
        </section>
        <p className="py-2 w-full text-justify">{content}</p>
        <section className="w-full text-center py-4 my-4">
          <Link
            to="/"
            className="text-center bg-green-700 text-white border border-green-700 rounded py-2 px-4 hover:text-white hover:bg-green-800 uppercase font-semibold"
          >
            Back to Home
          </Link>
        </section>
        <section className="w-full my-4">
          <FormComments {...this.props} id={this.props.match.params.id}/>
        </section>
      </div>
    );
  }
}

export default Single;
