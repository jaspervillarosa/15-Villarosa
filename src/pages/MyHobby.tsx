import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyHobby() {
  return (
    <div className="hobby-Main">
      <Header />
      <div className="hobby-upperDiv">
        <div className="hobby-innerUpperDiv">
          <h1>
            Jasper is a digital product designer living in <del>Las Piñas</del>{" "}
            city
          </h1>
        </div>
      </div>

      <div className="hobby1-imageContainer">
        <img className="hobby-Img1" src="src/image/graphics1.png" alt="image" />
      </div>

      <div className="hobbyCenter1">
        <h1 className="hobbyh1-1">
          Unique Canvas — Empowering Creative Collaboration
        </h1>
        <h2 className="hobbyh2-1">
          Book Design, Illustration, Branding & Identity
        </h2>
      </div>

      <div className="hobby2-imageContainer">
        <img className="hobby-Img2" src="src/image/graphics2.png" alt="" />
      </div>

      <div className="hobbyCenter2">
        <h1 className="hobbyh1-2">
          Experience — Improved and Increased Engagement
        </h1>
        <h2 className="hobbyh2-2">Product Design, Startups</h2>
      </div>

      <div className="hobby3-imageContainer">
        <img className="hobby-Img3" src="src/image/graphics3.png" alt="" />
      </div>

      <div className="hobby-lowerDiv">
        <div className="hobbyLower-Innerdiv">
          <div className="hobby1-imageContainer ">
            <img
              className="hobby-Img1 hobby-smImg1"
              src="src/image/graphics4.png"
              alt="image"
            />
          </div>

          <div className="hobbyCenter1">
            <h1 className="hobbyh1-1 hobbyh1-sm">
              Visual Consistency Across Print & Digital Products
            </h1>
            <h2 className="hobbyh2-1 hobbyh2-sm">Product Design</h2>
          </div>
        </div>

        <div className="hobbyLower-Innerdiv">
          <div className="hobby2-imageContainer ">
            <img
              className="hobby-Img2 hobby-smImg2"
              src="src/image/graphics7.png"
              alt=""
            />
          </div>

          <div className="hobbyCenter2">
            <h1 className="hobbyh1-2 hobbyh1-sm">
              Magazine Design: Creative Illustration & Layout
            </h1>
            <h2 className="hobbyh2-2 hobbyh2-sm">Product Design</h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
