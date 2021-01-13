import React from 'react';

class Cards extends React.Component {
  render() {
    const { username, title, content } = this.props.post;
    return (
      <section className="flex flex-row flex-wrap mx-auto w-full">
        <h1 className="text-center text-xl uppercase font-bold py-4 w-full">Updates</h1>
        <div className="flex flex-wrap w-full px-4 py-6 md:w-1/3 lg:w-1/3 justify-center" key={this.props.index}>
          <span className="w-full text-center">
            <h2 className="text-xl font-semibold tracking-normal text-gray-800 uppercase">
              {title}
            </h2>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm">
            Author:
            <span className="text-green-500 text-sm">{username}</span>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm">
            Date: <span className="text-green-500 text-sm	">12-01-2021</span>
          </span>
          <span className="w-full xl:w-1/3 text-center text-sm">
            Comments: <span className="text-green-500 text-sm">3</span>
          </span>
          <p className="w-full text-center">
          {content}
          </p>
        </div>
      </section>
    );
  }
}

export default Cards;