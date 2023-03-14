import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { MdFlight } from "react-icons/md";
import { BiBus } from "react-icons/bi";
import { BiTrain } from "react-icons/bi";
import Item from "./../Data/items.json";
import { AiFillStar } from "react-icons/ai";
import "./DetailPage.css";

function DetailPage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
const navigateTo=useNavigate()
  const data = useLocation();
  const hotels = [
    {
      name: "Hilton",
      price: "3,000",
      services: ["Free Wi-Fi", "Fitness center", "Room service"],
      image: "https://example.com/hilton.jpg",
    },
    {
      name: "Marriott",
      price: "3,500",
      services: ["Pool", "Spa", "Restaurant"],
      image: "https://example.com/marriott.jpg",
    },
    {
      name: "Holiday Inn",
      price: "2,800",
      services: ["Free breakfast", "Airport shuttle", "Parking"],
      image: "https://example.com/holidayinn.jpg",
    },
  ];

  const Travel = [
    { source: <MdFlight size={39} />, price: "5,000" },
    { source: <BiBus size={39} />, price: "3,500" },
    { source: <BiTrain size={39} />, price: "2,000" },
  ];
  const [totalAmount, setTotalAmount] = useState(0);
  const [hotelData, setHotelData] = useState(0);
  const [travelData, setTravelData] = useState(0);
  const [guid, setGuid] = useState(0);

  const HandelHotelData = (data) => {
    setHotelData(data.price);
    const amount = data.price.replace(/,/g, "");
    setTotalAmount((prevNumber) => prevNumber + Number(amount));
  };

  const handelTravelData = (data) => {
    setTravelData(data.price);
    const amount = data.price.replace(/,/g, "");
    setTotalAmount((prevNumber) => prevNumber + Number(amount));
  };

  const handelTourGuide = (data) => {
    setGuid(data.amount);
    const amount = data.amount.replace(/,/g, "");
    setTotalAmount((prevNumber) => prevNumber + Number(amount));
  };

  return (
    <div className="flex flex-col justify-start gap-[50px] m-9">
      <div className="mt-12">
        <div className="flex flex-row justify-start items-center gap-[30px]">
          <div>
            <img
              src={data.state.image}
              alt={data.state.title}
              className="w-[448px] h-[622px] rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex flex-col textAnimation">
            <span>
              • The Taj Mahal is a mausoleum located in Agra, India, and was
              built by the Mughal emperor{" "}
            </span>
            <span> Shah Jahan in memory of his wife Mumtaz Mahal.</span>
            <br></br>

            <span>
              • Construction of the Taj Mahal began in 1632 and was completed in
              1653, taking over 20 years
            </span>
            <span>to build.</span>

            <br></br>

            <span>
              • The Taj Mahal is made entirely of white marble, and the
              intricate carvings and designs on walls{" "}
            </span>

            <br></br>

            <span>
              • The Taj Mahal's main dome is 240 feet (73 meters) tall, making
              it one of the tallest domes in the
            </span>
            <span> world </span>

            <br></br>
            <span>
              • The design of the Taj Mahal is a blend of Indian, Persian, and
              Islamic architectural styles.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-[95px]">
        <div className="bg-slate-300 hover:bg-orange-300 p-4 rounded-xl">
          <h1 className="text-center font-bold text-[30px] pb-6">
            Hotels Names
          </h1>
          <div className="flex flex-row justify-between text-lg font-bold">
            <div className="w-[150px] text-start">Hotel</div>
            <div className="w-[150px] text-start">Services</div>
            <div className="w-[150px] text-center">Amount</div>
            <div className="w-[83px] text-start pl-[22px]">Add</div>
          </div>
          {hotels.map((val, i) => {
            return (
              <div key={i} className="flex flex-row flex-wrap justify-between pb-4 font-semibold pt-6">
                <div className="w-[150px] text-start">{val.name}</div>
                <div className="w-[150px] text-start">
                  {val.services.map((service,id) => {
                    return (
                      <p key={id
                      } className="bg-slate-200 p-1 rounded-xl m-1">
                        #{service}
                      </p>
                    );
                  })}
                </div>
                <div className="w-[150px] text-center">{val.price}</div>
                <div className="w-[83px] text-center">
                  <button
                    onClick={() => HandelHotelData(val)}
                    className="bg-black p-2 w-[80px] rounded-lg text-white hover:bg-white hover:font-bold hover:text-black"
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-300 hover:bg-orange-300 p-4 rounded-xl mt-[56px] h-[423px]">
          <h1 className="text-center font-bold text-[20px] text-[30px] pb-6">
            Travels
          </h1>
          <div className="flex flex-row gap-[40px] justify-between text-lg font-bold">
            <div className="w-[70px] text-start">Source</div>
            <div className="w-[150px] text-center">Amount</div>
            <div className="w-[103px] text-center pl-[13px]">Add</div>
          </div>
          {Travel.map((val, i) => {
            return (
              <div key={i} className="flex flex-row gap-[40px] flex-wrap justify-between p-4 font-semibold">
                <div className="w-[70px] text-start">{val.source}</div>
                <div className="w-[150px] text-center">{val.price}</div>
                <div className="w-[103px] text-center pl-9">
                  <button
                    onClick={() => handelTravelData(val)}
                    className="bg-black p-2 w-[80px] rounded-lg text-white rounded-lg hover:bg-white hover:font-bold hover:text-black"
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-300 hover:bg-orange-300 p-4 rounded-xl h-[290px] w-[338px] mt-[128px]">
          <div className="flex flex-col font-bold text-[20px] gap-[17px]">
            <span className="text-center pb-3 font-bold text-[25px]">
              Budget Caluclator
            </span>
            <div className="flex flex-row justify-between">
              <div>Hotel Booked :</div>
              <div>{hotelData}</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Travel Booked :</div>
              <div>{travelData}</div>
            </div>

            <div className="flex flex-row justify-between">
              <div>TourGuide Booked :</div>
              <div>{guid}</div>
            </div>
            <hr className="bg-black h-1"></hr>
            <div className="flex flex-row justify-between">
              <div>Total Amount :</div>
              <div>{totalAmount}</div>
            </div>

            <div className=" text-center">
                <button onClick={()=>navigateTo('/thankyou')} type="button" className="rounded-full p-2 rounded-lg mt-[4px] text-white bg-blue-500">Make a trip </button>
            </div>

          
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[45px] text-blue-500 font-bold ">
          Tour Guides
        </h1>
      </div>
      <div className="flex flex-row justify-start flex-wrap gap-[32px]">
        {Item.tourGuids.map((val, i) => {
          return (
            <div className="flex flex-row justify-start gap-[30px]">
              <div
                key={i}
                className="relative w-[448px] bg-slate-300 hover:bg-orange-300 h-[250px] rounded-[192px] shadow-lg"
              >
                <img
                  src={val.image}
                  alt={val.name}
                  className="w-[228px] h-[250px] rounded-[136px] shadow-lg hover:text-white"
                />

                <div className="absolute left-[239px] py-3 top-0 inset-x-0 text-white">
                  <p className="mt-[20px] font-bold text-[20px] text-black w-fit">
                    Name: {val.name}
                  </p>
                </div>

                <div className="absolute left-[239px] py-3 top-[42px] inset-x-0 text-white">
                  <p className="mt-[20px] font-bold text-[20px] text-black w-fit">
                    Phone: {val.phone}
                  </p>
                </div>

                <div className="absolute left-[239px] py-3 top-[80px] inset-x-0 text-white">
                  <p className="mt-[20px] font-bold text-[20px] text-black w-fit">
                    Amount: {val.amount}
                  </p>
                </div>
                

                <div className="absolute left-[239px] py-3 top-[119px] inset-x-0 text-white">
                  <p className="mt-[20px] font-bold text-[20px] text-black w-fit">
                    <div className="flex flex-row items-center">
                      <div>
                        <span>Rating: {val.rating} &nbsp;</span>
                      </div>
                      <AiFillStar color="orange" />
                    </div>
                    {/* <span className="relative -top-[24px] left-[109px]">
                      
                    </span> */}
                  </p>
                </div>

                <div className="absolute left-[238px] py-3 top-[196px] inset-x-0 text-white">
                  <button
                    onClick={() => handelTourGuide(val)}
                    className="bg-black p-1 w-[80px] rounded-lg hover:bg-white hover:text-black hover:font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DetailPage;
