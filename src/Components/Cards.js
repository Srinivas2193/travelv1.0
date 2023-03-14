import React from "react";

const Cards = ({ header, paragraph, label, image }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full rounded-[10px] !h-[270px]"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{header}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-row flex-wrap">
        {label.map((res,i) => {
          return (
            <div className="" key={i}>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300">
                #{res}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
