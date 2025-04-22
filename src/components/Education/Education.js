import React from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const timelineData = [
  {
    date: "In 2016 (JSC)",
    title: "Junior School Certificate",
    desc: "Mohammed Kamal Uddin High School, Chittagong",
  },
  {
    date: "In 2019 (SSC)",
    title: "Senior School Certificate",
    desc: "Bangladesh Korea Technical Training Center, Chittagong",
  },
  {
    date: "In 2019–2023 (Diploma)",
    title: "Diploma in Computer Science and Technology",
    desc: "Chittagong Polytechnic Institute, Chittagong",
  },
  {
    date: "In 2024–Present (BSc)",
    title: "BSc in Computer Science and Engineering",
    desc: "East Delta University, Chittagong",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-[#191919] z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center text-white mb-16">
        <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">My Education</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#E34E44]"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  className={`relative flex items-center w-full ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 px-4 ${isLeft ? "text-right" : "text-left"}`}>
                    <div className="bg-[#191919] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                      <h3 className="font-semibold text-lg text-[#E34E44]">{item.date}</h3>
                      <p className="text-white font-bold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot in center */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-[#191919] p-[2px] rounded-full">
                    <FaCircle className="text-[#E34E44]" size={12} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <svg className="fill-[#E34E44]" width="1500" height="1000" fill="none">
          <g filter="url(#a)" opacity=".45">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter id="a" width="1500" height="1500" x="0" y="0" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_39_4212" stdDeviation="275" />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Education;
