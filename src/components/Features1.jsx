import { motion } from "framer-motion";

import feature1 from "../assets/images/product_sales_report.png";
import feature2 from "../assets/images/screenshot_for_receipt_for_website.png";
import feature3 from "../assets/images/custormer_report_screenshot_for_website.png";
import feature4 from "../assets/images/monthly_and_yearly_sales_screenshot_for_website.png";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Make Data-Driven Decisions
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Unlike any tool you used before
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
                With the help of IReport 5.6.0. Generate informative Graphs,
                Detailed Receipts and bills.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Fully Customizable Reports</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>
                    Change the looks with Simple Drag and Drop provided by
                    ireport application
                  </span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Generate Daily,Monthly,Weekly reports</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1}
                  alt="f1"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset brightness-75 h-[450px] w-auto"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded ">
                <img
                  src={feature2}
                  alt="f2"
                  className="rounded-xl  custom-border-gray mx-auto sm:mx-unset brightness-75"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature3}
                  alt="f3"
                  className="rounded-xl  custom-border-gray brightness-75"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={feature4}
                  alt="f4"
                  className="rounded-xl  custom-border-gray brightness-75"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
