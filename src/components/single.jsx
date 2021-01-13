import React from 'react';

class Single extends React.Component {
    render() {
        const {username, title, content, date, comments} = this.props.post;
        console.log(this.props.post)
        return (
            <div className="flex flex-wrap w-full px-4 py-6 w-full justify-center" key={this.props.index}>
            <span className="w-full text-center">
              <h1 className="text-2xl font-semibold tracking-normal text-gray-800 uppercase">
                {title}
              </h1>
            </span>
            <span className="w-1/3 text-center text-sm">
              Author:
              <span className="text-green-500 text-sm">{username}</span>
            </span>
            <span className="w-1/3 text-center text-sm">
              Date: <span className="text-green-500 text-sm	">{date}</span>
            </span>
            <span className="w-1/3 text-center text-sm">
              Comments: <span className="text-green-500 text-sm">{comments}</span>
            </span>
            <p className="w-full text-center">
            {content}
            </p>
          </div>
        )
    }
}

export default Single;