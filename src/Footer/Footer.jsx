import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000000]">
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 p-20 text-white max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center md:items-baseline gap-4">
          <h1 className="font-bold text-[24px]">CS — Ticket System</h1>
          <p className="text-[#a1a1aa] md:leading-[1.5]">
            Lorem Ipsum is simply dummy text of the
            <span className="md:block hidden">
              printing and typesetting industry.
            </span>
            Lorem
            <span className="md:block hidden">
              Ipsum has been the industry's standard
            </span>
            dummy text ever since the 1500s, when an
            <span className="md:block hidden">
              unknown printer took a galley of type and
            </span>
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-[20px] mt-10 md:mt-0">Company</h1>
          <a className="text-[#a1a1aa]" href="">
            About Us
          </a>
          <a className="text-[#a1a1aa]" href="">
            Our Mission
          </a>
          <a className="text-[#a1a1aa]" href="">
            Contact Sales
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-[20px] mt-10 text-center md:mt-0 md:text-left">Services</h1>
          <a className="text-[#a1a1aa]" href="">
            Products & Services
          </a>
          <a className="text-[#a1a1aa]" href="">
            Customer Stories
          </a>
          <a className="text-[#a1a1aa]" href="">
            Download Apps
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-[20px] mt-10 text-center md:mt-0 md:text-left">Information</h1>
          <a className="text-[#a1a1aa]" href="">
            Privacy Policy
          </a>
          <a className="text-[#a1a1aa]" href="">
            Terms & Conditions
          </a>
          <a className="text-[#a1a1aa]" href="">
            Join Us
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-[20px] mt-10 text-center md:mt-0 md:text-left">Social Links</h1>
          <a className="text-[#a1a1aa]" href="">
            <i class="fa-brands bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-x-twitter"></i>{" "}
            @CS — Ticket System
          </a>
          <a className="text-[#a1a1aa]" href="">
            <i class="fa-brands bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-linkedin"></i>{" "}
            @CS — Ticket System
          </a>
          <a className="text-[#a1a1aa]" href="">
            <i class="fa-brands bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-facebook"></i>{" "}
            @CS — Ticket System
          </a>
          <a className="text-[#a1a1aa]" href="">
            <i class="fa-solid bg-white h-[22px] w-[45px] p-1 text-black rounded-full fa-envelope"></i>{" "}
            support@cst.com
          </a>
        </div>
      </div>
      <div className="text-center p-4 text-white border-t border-t-gray-600 bg-[#000000] max-w-[1200px] mx-auto">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
