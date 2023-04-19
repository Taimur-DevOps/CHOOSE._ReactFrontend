import React from "react";

const Navbar = () => {
  return (
    <div className="min-w-[1140px] my-2 mx-auto  bg-white">
      <nav className="flex items-center justify-between flex-wrap gap-[90px] h-[60px]  mx-auto">
        <div className="flex items-center  flex-shrink-0 text-white mr-6">
          <span className="font-extrabold text-[20px] leading-[24.2px] w-[102px] tracking-tight text-primary">
          
            CHOOSE.
          </span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-secondary border-primary hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button> 
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex lg:flex-grow  lg:gap-[25px] text-[13px]">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary mr-4"
            >
              OVERVIEW
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary mr-4"
            >
              WHY JOIN?
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary mr-4"
            >
              SYLLABUS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary mr-4"
            >
              AWARD
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary mr-4"
            >
              INSTRUCTORS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary mr-4"
            >
              TESTIMONIALS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-secondary  hover:text-primary"
            >
              FAQ'S
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[14px] leading-[38px] font-semibold inline-block px-[13px] py-0  border rounded bg-primary text-white border-white hover:border-transparent  mt-4 lg:mt-0"
            >
              ENROLL NOW @ $50
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
