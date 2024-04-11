import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "How can I contact you? ",
    answer:
      "You can contact me through my email jamhbaleanuj@gmail.com. OR you can contact me through twitter and linkedIn given in the footer of this webpage",
  },
  {
    question:
      "What are some of the changes that can be done to the Java Point of sales app?",
    answer:
      "There are great changes that can be done to the Java Point of Sales Software. Some of which can be, implenting other database technologies such as firebase, mongoDB atlas cloud, etc so that the Software can be installed in many different workstations in different locations and will still share same information. OR using a H2 database so that we don't have to install MYSQL on every workstation",
  },
  {
    question: "How can I make changes to the Reports?",
    answer:
      "There are 2 ways you can make changes to the Reports. 1) If you know the JRXML, you can directly edit the JRXML code present OR 2) Download the IReport version 5.6.0 and open your JRXML file in it, this way you can use GUI to make changes to the report by a simple drag and drop",
  },
  {
    question: "Want to make changes in the PDF documentation?",
    answer:
      "Unfortunately, you cannot make direct changes into the PDF documentation, But you can mail me at jambhaleanuj@gmail.com and the required changes will be done to the documentation.",
  },
  {
    question: "Is it necessary to use IReport version 5.6.0 only? ",
    answer: "Yes, newer Ireport version may not work with the code present.",
  },
  {
    question: "Is the software suitable for large scale use? ",
    answer:
      "No, not at the moment. This project is only suitable as a Very Small scale use case, since it is not tested in a large scale enviroment and may posses some bugs or security flaws . If you desire to use this project for a large scale use, many change's are needed to be made to the code. ",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            Have any questions?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
