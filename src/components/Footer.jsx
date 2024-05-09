import { TwitterIcon } from "../assets/icons/TwitterIcon";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";
const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <img src="/AJ_logo.png" width={30} />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Anuj Jambhale
                </div>
              </div>
              <br></br>
              <div className="w-56 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl "
                  href="https://twitter.com/anujjambhale"
                >
                  <TwitterIcon />
                </a>

                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.linkedin.com/in/anuj-jambhale-856689245/"
                >
                  <LinkdinIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://www.github.com/jambhaleAnuj"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2022. MIT license.
          </p>
        </div>
      </div>
    </footer>
  );
};
