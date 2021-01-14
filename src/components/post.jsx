import React from 'react';
import {Link} from 'react-router-dom'
import { faUser, faComments, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Cards extends React.Component {
  render() {
    const {id, username, title, excerpt, date, comments } = this.props.post;
    return (
        <div className="flex flex-wrap w-full px-4 py-6 md:w-1/3 lg:w-1/3 justify-center" key={this.props.index}>
          <Link to={{pathname: `/${id}`}} className="w-full text-center py-1">
            <h2 className="text-xl font-semibold tracking-normal text-gray-800 hover:text-green-700 uppercase py-1">
              {title}
            </h2>
          </Link>
          <section className="w-full text-left">
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
          <Link to={{pathname: `/${id}`}} className="text-center bg-green-700 text-white border border-green-700 rounded px-2 py-1 my-2 hover:text-green-700 hover:bg-white ">
            Read more
          </Link>
        </div>
    );
  }
}

export default Cards;