import React from 'react';
import {Link} from 'react-router-dom'

class Cards extends React.Component {
  render() {
    const {id, username, title, excerpt, date, comments } = this.props.post;
    return (
        <div className="flex flex-wrap w-full px-4 py-6 md:w-1/3 lg:w-1/3 justify-center" key={this.props.index}>
          <Link to={{pathname: `/${id}`}} className="w-full text-center">
            <h2 className="text-xl font-semibold tracking-normal text-gray-800 uppercase">
              {title}
            </h2>
          </Link>
          <span className="w-full xl:w-1/3 text-center text-sm">
            Author:
            <span className="text-green-500 text-sm">{username}</span>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm">
            Date: <span className="text-green-500 text-sm	">{date}</span>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm">
            Comments: <span className="text-green-500 text-sm">{comments}</span>
          </span>
          <p className="w-full text-center">
          {excerpt}
          </p>
        </div>
    );
  }
}

export default Cards;