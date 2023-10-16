import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Hero() {
  return (
    <section className=" px-4">
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="container-wrapper">
              <div className="flex justify-between items-center gap-4">
                <div className=" max-w-xl w-[100%]">
                  <h2 className=" text-[#707070] text-5xl uppercase font-medium fredok-font">
                    strawberry
                  </h2>
                  <h1 className=" text-[#362B2E] text-[52px] font-semibold uppercase fredok-font">
                    big butterscotch
                  </h1>
                  <p className="text-[#707070] text-3xl uppercase font-medium fredok-font">
                    {" "}
                    ice cream cone
                  </p>
                  <div className="pt-6 flex items-center gap-5">
                    <a
                      href="/"
                      className=" bg-[#ED1556] uppercase rounded-lg text-white text-base py-3 px-8 font-semibold "
                    >
                      {" "}
                      see product
                    </a>
                    <a
                      href="/"
                      className="text-[#362B2E] uppercase text-base py-3 px-8 font-semibold underline "
                    >
                      order now !
                    </a>
                  </div>
                </div>

                <div>
                  <img src="images/hero-img.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-wrapper">
              <div className="flex justify-between items-center gap-4">
                <div className=" max-w-xl w-[100%]">
                  <h2 className=" text-[#707070] text-5xl uppercase font-medium fredok-font">
                    strawberry
                  </h2>
                  <h1 className=" text-[#362B2E] text-[52px] font-semibold uppercase fredok-font">
                    big butterscotch
                  </h1>
                  <p className="text-[#707070] text-3xl uppercase font-medium fredok-font">
                    {" "}
                    ice cream cone
                  </p>
                  <div className="pt-6 flex items-center gap-5">
                    <a
                      href="/"
                      className=" bg-[#ED1556] uppercase rounded-lg text-white text-base py-3 px-8 font-semibold "
                    >
                      {" "}
                      see product
                    </a>
                    <a
                      href="/"
                      className="text-[#362B2E] uppercase text-base py-3 px-8 font-semibold underline "
                    >
                      order now !
                    </a>
                  </div>
                </div>

                <div>
                  <img src="images/hero-img.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container-wrapper">
              <div className="flex justify-between items-center gap-4">
                <div className=" max-w-xl w-[100%]">
                  <h2 className=" text-[#707070] text-5xl uppercase font-medium fredok-font">
                    strawberry
                  </h2>
                  <h1 className=" text-[#362B2E] text-[52px] font-semibold uppercase fredok-font">
                    big butterscotch
                  </h1>
                  <p className="text-[#707070] text-3xl uppercase font-medium fredok-font">
                    {" "}
                    ice cream cone
                  </p>
                  <div className="pt-6 flex items-center gap-5">
                    <a
                      href="/"
                      className=" bg-[#ED1556] uppercase rounded-lg text-white text-base py-3 px-8 font-semibold "
                    >
                      {" "}
                      see product
                    </a>
                    <a
                      href="/"
                      className="text-[#362B2E] uppercase text-base py-3 px-8 font-semibold underline "
                    >
                      order now !
                    </a>
                  </div>
                </div>

                <div>
                  <img src="images/hero-img.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
