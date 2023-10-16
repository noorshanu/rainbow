import React from "react";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="flex justify-center">
          <img src="images/logo.png" alt="" />
        </div>
        <div className=" flex justify-center items-center gap-5 py-2">
          <a href="/">Home Page </a>
          <a href="/">About Us </a>
          <a href="/">Products </a>

          <a href="/">Contact Us </a>
        </div>
        <p className=" text-center max-w-4xl mx-auto py-5">
          Embarking on a journey to fulfil everyone's cravings for something
          yummy and sweet, we at, Rainbow Ice Cream are churning wonderful
          tastes of happiness. We are also mixing Mastiful flavours inside each
          scoop for every ice cream lover. And to melt their heart with
          happiness, we are spreading these cool colours to different corners of
          India.
        </p>
        <div className=" flex justify-evenly items-center">
          <p>Care@Rainbowicecreams.com</p>
          <p>+91 62623 62627</p>
        </div>

        <div className=" flex justify-center gap-4 py-8 items-center">
          <a href="/">
            {" "}
            <FaYoutube className="text-[#FF3000] text-3xl" />
          </a>
          <a href="/" className="">
            <FaFacebookSquare className="text-[#337FFF] text-2xl" />
          </a>
          <a href="/">
            <FaInstagram className="text-[#8AA3FB] text-2xl" />
          </a>
          <a href="/">
            <FaTwitter className="text-[#33CCFF] text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
