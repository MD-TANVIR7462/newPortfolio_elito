import React from "react";
import shape1 from "../../images/about/shape1.png";
import shape2 from "../../images/about/shape2.png";

const About = (props) => {
  return (
    <section className="section-wrap bg-[#191919] md:pb-[60px] overflow-hidden z-50" id="about">
      <div className="wraper">
        <div className="grid-rows-1 grid grid-cols-2 md:grid-cols-1 items-center">
          <div className="relative z-20 md:max-w-[480px]">
            <div className="max-w-[350px] col:max-w-[350px]  text-center rounded-[10px] pb-[180px] bg-gradient-to-b to-[#1B1B19] from-[#2E2C1F] xl:ml-[20px] col:ml-0">
              <h2 className="text-[140px] col:text-[90px] text-[#FFE600] font-bold base-font">02</h2>
              <span className="text-white text-[18px] font-normal ">Years of Experience</span>
            </div>
            <div
              className="absolute right-[170px] lg:right-[80px] col:right-0  bottom-10 max-w-[300px] col:max-w-[350px] px-[20px] py-[20px] rounded-[12px] z-10 bg-transparent flex items-center justify-center 
                before:absolute before:content before:left-0 before:top-0 before:w-full before:h-full before:opacity-[1] before:-z-20 before:rounded-[12px] before:bg-gradient-to-l to-[#939393] from-[#1c1a1a4d] 
                after:absolute after:left-[2px] after:top-[2px] after:w-[98%] after:h-[98%] after:content after:bg-[#2D2B1F] after:opacity-[.85] after:-z-10 after:rounded-[12px]"
            >
              <h3 className="mr-[15px] w-[50%] text-[45px]  text-[#59C378] font-bold base-font flex items-center">
                <span className="odometer" data-count="100">
                  100
                </span>
                %
              </h3>
              <p className="text-[15px] w-[50%] text-white font-normal base-font">Clients Satisfections</p>
            </div>
          </div>
          <div className="about-right z-20 md:mt-7">
            <div className="max-w-[640px] mx-auto text-left text-white mb-[60px] md:mb-[40px]">
              <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">My Advantage</h2>
              <p className="base-font text-base font-normal">
                Hi, I'm Tajul Islam Tanvir, a web developer with 2 years’ experience in HTML, CSS, Tailwind, JavaScript,
                TypeScript, React, Next.js, Node.js, Express.js, MongoDB, and Firebase. I'm pursuing a CSE degree and
                love building clean, responsive, user-friendly apps.
              </p>
            </div>
            <ul className="flex flex-wrap  mx-[-15px]">
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#acac39] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="98">
                      88
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#FFE600]">JavaScript</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#1280da99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="92">
                      85
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#365fe6]">TypeScript</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="92">
                      95
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#AD00FF]">Tailwind CSS</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#14b49f] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="98">
                      88
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#34d1c9]">React JS</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#e7decea8] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="92">
                      85
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#e6e9e7c9]">Next JS</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#ff9a0099] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="72">
                      82
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#FF9A00]">Express JS</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#0ae73a99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="43">
                      43
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#2cc252]">Mongo DB</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#75e70ad5] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="43">
                      43
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#53da31]">Mongoose</p>
                </div>
              </li>
              <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#bb10d199] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                  <h3 className="font-bold text-[35px] text-white flex items-center justify-center">
                    <span className="odometer" data-count="40">
                      75
                    </span>
                    %
                  </h3>
                  <p className="font-normal text-[16px] text-[#c733d4]">Redux JS</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-[50px] left-0  z-0">
        <img src={shape1} alt="" />
      </div>
      <div className="absolute right-0 bottom-0  z-0">
        <img src={shape2} alt="" />
      </div>
      <div className="absolute bottom-[-95%] left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-0">
        <svg className="fill-[#FFE500]" width="995" height="1495" viewBox="0 0 995 1495" fill="none">
          <g opacity="0.3" filter="url(#filter0_f_39_4267)">
            <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500"></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_39_4267"
              x="-500"
              y="0"
              width="1495"
              height="1495"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-[-95%] right-[-10%]  z-10">
        <svg className="fill-[#AD00FF]" width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
          <g opacity="0.15" filter="url(#filter0_f_39_4265)">
            <circle cx="950" cy="950.004" r="450"></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_39_4265"
              x="-0.00012207"
              y="0.00402832"
              width="1900"
              height="1900"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265"></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default About;
