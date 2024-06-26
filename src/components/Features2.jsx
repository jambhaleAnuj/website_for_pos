import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import github_screenshot from "../assets/images/github_screenshot.png";
import fully_opensource from "../assets/images/full_opensource_for_website.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
  <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
          <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
            <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
              <img
                src={fully_opensource}
                alt="f1"
                className="rounded-xl  custom-border-gray brightness-75"
              />
            </div>
            <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
              <img
                src={github_screenshot}
                alt="f2"
                className="rounded-xl  custom-border-gray h-auto w-auto brightness-75"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
          <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
            <span className="custom-block-subtitle">
              Take a look at the code
            </span>
            <h2 className="mt-6 mb-8 text-4xl text-[#c461c4] lg:text-5xl custom-block-big-title ">
              Fully Open-Source Application
            </h2>
            <p className="mb-12 text-customGrayText leading-loose">
              Both, the Android Barcode Scanner application and the Java Point
              of sales application are fully open-source i.e their source code
              is freely available on the github links provied above.
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Every component of this project is open-source</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>You are welcome to contribute to this project</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
