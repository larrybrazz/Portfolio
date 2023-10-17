import React from 'react';

const Content =()=> {

    return (
      <div
      >
        <div className=" mx-auto mt-16 grid grid-cols-2 gap-2">
          <div className="mx-10 space-y-9 text-white ">
            <p className=" text-3xl pt-20">Hello, I'm </p>
            <div className=" white-space">
              <h1 className="text-red-500 text-6xl ">
                Olanrewaju Adebayo
              </h1>
            </div>
            <div className="flex align-center">
              <div className="list-none mr-4 text-2xl">
                <li>
                  {" "}
                  <a href="/">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="/">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </div>
              <p className=" text-4xl ">
                <span className="font-bold text-3xl"> Creative </span>Developer
              </p>
            </div>
            <p className="w-48 text-white transition ease-in-out delay-300  hover:-translate-y-1 hover:scale-110  duration-800 bg-red-400 p-4 text-2xl rounded-md hover:bg-red-800 mr-9 ">
              Say Hello <i icon="fa fa-envelope" />{" "}
            </p>{" "}
            <span className="text-2xl">About me</span>
            <p>Larrybrazz70@gmail.com</p>
          </div>
          <div data-aos="Zoom-out">
            <img className="rounded-full" src="/handshake.webp" alt="" />
          </div>
        </div>
      </div>
    );
  }


export default Content
