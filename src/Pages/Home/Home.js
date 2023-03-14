import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Cards from "../../Components/Cards";
import travelImg from "./../../Assets/Images/travel1.png";
import traveler from "./../../Assets/Images/traveler.jpg";
import { data } from "./../Data/CardsData";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="-mb-[275px]">
        <img src={travelImg} alt="travel" className="w-full !h-[840px]" />
      </div>
      <div className="relative -top-[210px] left-[75px] imgClass w-max">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <h1 className="mb-3 font-[800] text-[65px] text-blue-300">
            Let's Enjoy The <br /> Wonders of <br />
            Nature
          </h1>
        </AnimationOnScroll>
      </div>
      <div className="flex flex-row justify-between !mt-0">
        <div className="flex flex-col justify-start flex-wrap gap-2 max-w-[60%]">
          <div className="ml-5">
          <h1 className="text-black text-3xl font-bold">Our Story</h1>
          <p className="text-black text-xl font-semibold">
            Travel allows us to broaden our horizons, learn about different
            cultures, and gain a new perspective on life. Whether it's a weekend
            trip to a neighboring town or a months-long adventure across
            continents, travel has the power to change us in profound ways.
          </p>
          <p className="text-black text-xl font-semibold">
            As we travel, we encounter new foods, new languages, new customs,
            and new people. It can be daunting at first, but it's important to
            remember that these differences are what make our world so rich and
            diverse. Embrace them with an open mind and heart, and you may find
            that you learn just as much from the people you meet as you do from
            the sights you see.
          </p>
          </div>
        </div>
        <div>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <img
              src={traveler}
              alt="traveler"
              className="w-[600px] !h-[400px]"
            />
          </AnimationOnScroll>
        </div>
      </div>
      <div className="flex flex-col ml-5">
        <h1 className="text-black text-center font-semibold text-[40px] mb-[31px]">
          Your Journey Starts Here
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-20 max-w-full px-3">
          {data.map((res,i) => {
            return (
              <div key={i} className="w-[390px] transition duration-300 ease-in-out hover:scale-110">
                <Cards
                  header={res.header}
                  paragraph={res.paragraph}
                  label={res.labels}
                  image={res.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* // Bottom card */}

<div className="flex flex-col items-center">
      <div className="max-w-[700px] p-6 bg-white border border-gray-200 rounded-lg shadow mt-10 transition duration-300 ease-in-out hover:scale-110 shadow-lg">
        <a href="#">
          <h5 className="mb-2 text-[35px] font-bold tracking-tight text-blue-500">
            Join and Trip With Us
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">
          "Travelling is not just about seeing new places and experiencing new
          things, it's also about discovering a new side of yourself. It's about
          stepping outside of your comfort zone and embracing the unknown. So,
          as you embark on your journey, remember to take in the sights, savor
          the flavors, and immerse yourself in the local culture. Allow yourself
          to get lost in the moment and appreciate the beauty of the present.
          Traveling is a gift, so enjoy every moment of it and create memories
          that will last a lifetime."
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Get in Touch
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path> */}
          </svg>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Home;
