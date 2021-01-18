import React from "react";

class Comments extends React.Component {
  render() {
    if (this.props.postComments !== undefined) {
    return (
        <section className="w-full my-4">
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
