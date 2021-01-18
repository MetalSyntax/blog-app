import React from 'react';
import {Link} from 'react-router-dom'
import { faUser, faComments, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Posts extends React.Component {
  render() {
    const {id, username, title, excerpt, date, comments } = this.props.post;
    return (
      <div className="flex w-full md:w-1/3 lg:w-1/3 px-2">
        <div className="flex flex-wrap w-full px-4 py-6 justify-center rounded shadow my-2" key={this.props.index}>
          <Link to={{pathname: `/${id}`}} className="w-full text-center py-1">
            <h2 className="text-xl font-semibold tracking-normal text-gray-800 hover:text-green-700 uppercase py-1">
              {title}
            </h2>
          </Link>
          <section className="w-full xl:text-left text-center">
          <span className="w-full xl:w-1/3 text-center text-sm px-1">
          <FontAwesomeIcon icon={faUser} /> Author:
            <span className="text-green-500 text-sm px-1">{username}</span>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm px-1">
          <FontAwesomeIcon icon={faCalendar} /> Date: <span className="text-green-500 text-sm px-1">{date}</span>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm px-1">
          <FontAwesomeIcon icon={faComments} /> Comments: <span className="text-green-500 text-sm px-1">{comments}</span>
          </span>
          </section>
          <p className="w-full text-left">
          {excerpt}
          </p>
          <Link to={{pathname: `/${id}`}} className="text-center bg-green-700 text-white border border-green-700 rounded py-2 px-4 my-2 h-8	hover:text-green-700 hover:bg-white uppercase font-semibold leading-3">
            Read more
          </Link>
        </div>
        </div>
    );
  }
}

export default Posts;