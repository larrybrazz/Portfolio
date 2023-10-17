import React, { useEffect, useState } from "react";
import "./portfolio.css";

const Portfolio = () => {

      const [isVisible, setIsVisible] = useState(false);

      const handleScroll = () => {
        const content = document.querySelectorAll(".relative");
        const screenPosition = window.innerHeight / 1.2;

        content.forEach((element) => {
          const boxTop = element.getBoundingClientRect().top;
          if (boxTop < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = "scale(1)";
            element.style.transition = "all 1s";
          } else {
           element.style.opacity = 0;
           element.style.transform = "scale(0.1)";
           element.style.transition = "all 1s";
          }
        });
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // ?Remove the even listener when the component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div id="portfolio" className="w-11/12 mx-auto text-white pt-8">
      <div className="text-center space-y-4">
        <h1 className="text-xl font-semibold font-sans">Selected Works</h1>
        <h1 className="text-3xl font-extrabold font-serif ">
          Check out my Portfolio
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="relative portfolio_link ">
          <img src="/Screenshot 2023-03-03 113039.png" alt="" />
          <div className="absolute link-div top-0 bg-slate-800 ">
            <a
              className="hover:text-orange-800"
              href="https://github.com/larrybrazz/Shopify"
            >
              View Code
            </a>{" "}
            <br />
            <a
              className="hover:text-orange-800"
              href="https://capable-dasik-20d742.netlify.app/"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="relative portfolio_link">
          <img src="/Screenshot 2023-03-03 150248.png" alt="" />
          <div className="absolute link-div top-0 bg-slate-800 ">
            <a
              className="hover:text-orange-800 my-4"
              href="https://github.com/larrybrazz/ArtGallery"
            >
              View Code
            </a>{" "}
            <br />
            <a
              className="hover:text-orange-800"
              href="https://jovial-belekoy-4b33e4.netlify.app/"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="relative portfolio_link">
          <img src="/Screenshot 2023-03-03 113457.png" alt="" />
          <div className="absolute link-div top-0 bg-slate-800">
            <a
              className="hover:text-orange-800"
              href="https://github.com/larrybrazz/ExpenseTracker"
            >
              View Code
            </a>{" "}
            <br />
            <a
              className="hover:text-orange-800"
              href="https://soft-crumble-230c9e.netlify.app/"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="relative portfolio_link">
          <img src="/Screenshot 2023-03-03 154911.png" alt="" />
          <div className="absolute link-div top-0 bg-slate-800 ">
            <a
              className="hover:text-orange-800"
              href="https://github.com/larrybrazz/TenziesGame"
            >
              View Code
            </a>{" "}
            <br />
            <a
              className="hover:text-orange-800"
              href="https://celadon-marshmallow-597342.netlify.app/"
            >
              View Website
            </a>
          </div>
        </div>
        <div className="relative portfolio_link">
          <img src="/Screenshot 2023-03-03 113544.png" alt="" />
          <div className="absolute link-div top-0 bg-slate-800">
            <a
              className="hover:text-orange-800"
              href="https://github.com/larrybrazz/JobSeeker"
            >
              View Code
            </a>{" "}
            <br />
            <a
              className="hover:text-orange-800"
              href="https://astounding-swan-5453f6.netlify.app/"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3" style={{ height: "100px" }}></div>
    </div>
  );
};

export default Portfolio;
