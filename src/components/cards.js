import React from "react";

class Card extends React.Component {
  render() {
    return (
      <section className="flex flex-row flex-wrap mx-auto max-w-7xl">
        <h1 className="text-center text-xl uppercase bold py-4 w-full">Updates</h1>
        <div className="flex flex-wrap w-full px-4 py-6 md:w-1/3 lg:w-1/3 justify-center">
          <a href="#" className="w-full text-center">
            <h2 className="text-xl font-bold tracking-normal text-gray-800">
              Title 1
            </h2>
          </a>
          <span className="w-full lg:w-1/2 text-center">
            Author:
            <span className="text-green-500">Wonder Diaz</span>
          </span>
          <span className="w-full lg:w-1/2 text-center">
            Date: <span className="text-green-500">12-01-2021</span>
          </span>
          <p className="w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            faucibus, felis non suscipit sollicitudin, mauris urna facilisis
            nisi, vitae aliquet lectus libero vel nibh.{" "}
          </p>
        </div>
        <div className="flex flex-wrap w-full px-4 py-6 md:w-1/3 lg:w-1/3 justify-center">
          <a href="#" className="w-full text-center">
            <h2 className="text-xl font-bold tracking-normal text-gray-800">
              Title 2
            </h2>
          </a>
          <span className="w-full lg:w-1/2 text-center">
            Author: <span className="text-green-500">Wonder Diaz</span>
          </span>
          <span className="w-full lg:w-1/2 text-center">
            Date: <span className="text-green-500">12-01-2021</span>
          </span>
          <p className="w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            faucibus, felis non suscipit sollicitudin, mauris urna facilisis
            nisi, vitae aliquet lectus libero vel nibh.{" "}
          </p>
        </div>
        <div className="flex flex-wrap w-full px-4 py-6 md:w-1/3 lg:w-1/3 justify-center">
          <a href="#" className="w-full text-center">
            <h2 className="text-xl font-bold tracking-normal text-gray-800">
              Title 3
            </h2>
          </a>
          <span className="w-full lg:w-1/2 text-center">
            Author: <span className="text-green-500">Wonder Diaz</span>
          </span>
          <span className="w-full lg:w-1/2 text-center">

            Date: <span className="text-green-500">12-01-2021</span>
          </span>
          <p className="w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            faucibus, felis non suscipit sollicitudin, mauris urna facilisis
            nisi, vitae aliquet lectus libero vel nibh.{" "}
          </p>
        </div>
      </section>
    );
  }
}

export default Card;
