import React from "react";
// import career from '@/assets/logos/career-removebg-preview.PNG';
import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white bg-gradient-to-r from-yellow-300 to-yellow-600">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className=" bg-white rounded-lg">
            {/* <Image
              className="px-2 py-1 rounded"
              src={career}
              width={250}
              height={190}
              alt="logo picture"
            /> */}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get the latest news!
                </h2>

                <p className="mt-4 text-gray-200 dark:text-gray-400">
                  Stay informed with the latest updates! Explore expert insights
                  and valuable resources to enhance your career journey. We are
                  here to guide you through opportunities and challenges,
                  ensuring a successful and fulfilling professional experience.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border rounded border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="hello@gmail.com"
                    className="w-full py-2 rounded border-none focus:border-transparent focus:ring-transparent p-2"
                  />

                  <button className="mt-1 w-full bg-white text-gray-600 px-6 py-3 text-sm font-bold uppercase tracking-wide  transition-none hover:bg-rose-500 sm:mt-0 sm:w-auto sm:shrink-0 rounded">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Services
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    1on1 Coaching
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Company Review
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    HR Consulting
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Helpful Links
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accessibility
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Hiring Statistics
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <Link href="#">
                <FaFacebook className="text-white w-8 h-8 hover:scale-105 duration-300" />
              </Link>

              <Link href="#">
                <FaInstagram className="text-white w-8 h-8 hover:scale-105 duration-300" />
              </Link>

              <Link href="#">
                <FaTwitter className="text-white w-8 h-8 hover:scale-105 duration-300" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()}. Company Name. All rights
              reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
