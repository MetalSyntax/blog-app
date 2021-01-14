import React from 'react';

class Single extends React.Component {
    render() {
        const {username, title, content, date, comments, textComments} = this.props.post;
        console.log(this.props.post)

        return (
            <div className="flex flex-wrap w-full px-4 py-6 w-full" key={this.props.index}>
            <span className="w-full text-center">
              <h1 className="text-2xl font-semibold tracking-normal text-gray-800 uppercase py-4">
                {title}
              </h1>
            </span>
            <section className="w-full py-2">
              <span className="text-center text-sm px-2">
                Author:
                <span className="text-green-500 text-sm">{username}</span>
              </span>
              <span className="text-center text-sm px-2">
                Date: <span className="text-green-500 text-sm	">{date}</span>
              </span>
              <span className="text-center text-sm px-2">
                Comments: <span className="text-green-500 text-sm">{comments}</span>
              </span>
            </section>
            <p className="py-2 w-full text-justify">
            {content}
            </p>
            <section className="w-full my-4">
              <h2 className="text-xl text-center font-semibold uppercase">Comments</h2>
            {
              textComments.map((subitem, i) =>{
                return (
                  <div className="">
                    <p className="text-md font-semibold">{subitem.username}</p>
                    <p className="text-sm">{subitem.content}</p>
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