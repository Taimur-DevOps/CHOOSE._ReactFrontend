import React from "react";

const HeroSection = () => {
  return (
    <div className="  bg-gray-300">
      <div className="max-w-[1140px] mx-auto ">
        <div>
          <h1 className="text-[36px] font-bold leading-[42px] text-[#FFFFFF] pt-[113px] pb-[52px]">
            {" "}
            Main heading goes here big and bold
          </h1>
        </div>
        <div>
          <p className="text-[20px] leading-[28px] font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mollis rhoncus dolor, id tempor est tincidunt ac. Integer semper
            metus at convallis mollis. Maecenas non dui lectus. Vestibulum
            commodo quam vel molestie ornare. Etiam auctor, felis quis ultrices
            iaculis, augue metus pellentesque ligula
          </p>
        </div>
        <div className="flex gap-[20px] justify-start items-center mt-[69px] pb-[94px]">
          <button className="bg-primary text-white rounded-lg py-[15px] pr-[37px] pl-[27px] text-[18px] leading-[31px] whitespace-nowrap font-semibold ">
            REGISTER NOW @ $50
          </button>
          <button className="bg-white border-2 border-primary text-primary rounded-lg py-[15px]  px-[30px] text-[18px] leading-[31px] whitespace-nowrap font-semibold ">
            VIEW SYALLABUS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
