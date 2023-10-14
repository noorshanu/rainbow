import React from "react";

function About() {
  return (
    <>
      <section className="" id="about">
        <div className="container-wrapper">
          <div className=" bg-[#E3014B]  pl-8 rounded-3xl">
            <div className="flex justify-between flex-col sm:flex-row">
              <div className=" pt-20">
                <h1 className=" text-white text-4xl fredok-font font-semibold pb-2">About us</h1>
                <div>
                  <h2 className="text-white text-2xl font-medium pb-2 ">Welcome to Rainbow!</h2>

                  <p className=" max-w-xl text-lg  text-white lh-1_9">
                    Embarking on a journey to fulfil everyone's cravings <br />for
                    something yummy and sweet, we at, Rainbow Ice Cream <br /> are
                    churning wonderful tastes of happiness. We are also mixing
                    Mastiful flavours inside each scoop for every ice cream
                    lover. And to melt their heart with happiness, we are
                    spreading these cool colours to different corners of India.
                  </p>
                </div>
              </div>
              <div className="">
                <img src="images/about-img.png" alt="" className="bor-left sm:h-[450px] h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
