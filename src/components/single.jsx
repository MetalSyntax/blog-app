import React from 'react';
import {Link} from 'react-router-dom';
import Comments from './formComments'
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Single extends React.Component {
    render() {
        const {username, title, content, date, comments, textComments} = this.props.post;
        console.log(this.props.post)
        return (
            <div className="flex flex-wrap w-full px-4 py-6 w-full" key={this.props.index}>
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
              <FontAwesomeIcon icon={faCalendar} /> Date: <span className="text-green-500 text-sm">{date}</span>
              </span>
            </section>
            <p className="py-2 w-full text-justify">
            {content}
            </p>
            <section className="w-full text-center py-4 my-4">
              <Link to="/" className="text-center bg-green-700 text-white border border-green-700 rounded px-2 py-1 hover:text-green-700 hover:bg-white ">
                Back to Home
              </Link>
            </section>
            <section className="w-full my-4">
              <h2 className="text-lg text-left font-semibold uppercase py-2">{comments} Comments</h2>
              <Comments />
            {
              textComments.map((subitem) =>{
                return (
                  <div className="py-1">
                    <p className="text-md font-semibold text-green-600">{subitem.username}</p>
                    <p className="text-sm pb-2">{subitem.content}</p>
                    <hr />
                  </div>
                )
              })
            }
            </section>
          </div>
        )
    }
}

export default Single;