import React from "react";

function Counter() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="bg-count rounded-3xl py-8 px-12 ">
          <div className="flex justify-evenly">
            <div className=" text-center">
              <p className=" text-white fredok-font text-3xl font-semibold pb-3 uppercase">Since</p>
              <p className=" text-white fredok-font text-3xl font-semibold ">1987</p>
            </div>
            <div className=" text-center">
            <p className=" text-white fredok-font text-3xl font-semibold pb-3 uppercase">dealers</p>
              <p className=" text-white fredok-font text-3xl font-semibold ">5500</p>
            </div>
            <div className=" text-center">
            <p className=" text-white fredok-font text-3xl font-semibold pb-3 uppercase">distributor</p>
              <p className=" text-white fredok-font text-3xl font-semibold ">1000</p>
            </div>
            <div className=" text-center">
            <p className=" text-white fredok-font text-3xl font-semibold pb-3 uppercase">products</p>
              <p className=" text-white fredok-font text-3xl font-semibold ">108</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
