import React from "react";

class Comments extends React.Component {
  render() {
    if (this.props.postComments !== undefined) {
    return (
        <section className="w-full my-4 px-4">
          <h2 className="text-lg text-left font-semibold uppercase py-2">
           {this.props.postComments.length} Comments
          </h2>
          {this.props.postComments.map((subitem, index) => {
            return (
              <div className="py-1" key={index}>
                <p className="text-md font-semibold text-green-600">
                  {subitem.username}
                </p>
                <p className="text-sm pb-2">{subitem.content}</p>
                <hr />
              </div>
            );
          })}
        </section>
    );
    }
  };
};
export default Comments;
