import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub, FaMoon } from "react-icons/fa";

import { IoSunnySharp } from "react-icons/io5";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Nav = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <nav className='nav whitespace-nowrap'>
      <Link href='/'>
        <a className='group w-full  p-5 text-center text-xl  font-bold sm:p-0'>
          <h1 className='hidden px-3 [text-shadow:_2px_2px_8px_rgba(22,227,242,0.75)] md:flex'>
            <span className='rotate-12  transition-all duration-300 group-hover:-rotate-12 group-hover:scale-125 '>
              😺
            </span>
            Kazi Tanvirul Islam Sakib
          </h1>
          <h1 className='flex items-center justify-center text-center md:hidden '>
            KTI{" "}
            <span className='rotate-12  transition-all duration-300 group-hover:rotate-1 group-hover:scale-125 '>
              😺
            </span>
            Sakib
          </h1>
        </a>
      </Link>
      <ul className='nav-links lg:pr-10  '>
        {[
          [
            "About",
            "/about",
            "M0 5.51671C4.92537 1.00012 8.20895 2.12927 10.6716 5.51671C13.1343 8.90415 17.2388 5.51662 18.8806 3.25833C20.5224 1.00003 27.9104 3.2585 30.3731 5.51671C32.8358 7.77492 30.3731 1 32.8358 1C35.2985 1 32.8358 3.25853 36.1194 5.51671C39.403 7.77489 40.2239 4.38744 42.6866 4.38744C45.1493 4.38744 45.1493 6.64574 48.4328 7.77489C51.0597 8.6782 53.9055 6.64582 55 5.51671",
          ],
          [
            "Snippets",
            "/snippets",
            "M0.5 6.99992C5 5.99988 8 6.99988 12.5 2.4999C15.4614 -0.461475 11.8154 7.76693 14.5 6.9999C18 5.9999 21.0373 2.12919 23.5 4.3874C25.9627 6.64561 26.0373 5.9999 28.5 5.9999C30.9627 5.9999 30.8119 3.89096 34 1.4999C38 -1.50007 35.5 3.5 37 5.99988C38.2671 8.11159 43.2164 1.37082 46.5 2.49997C49.1269 3.40329 45 9.5 51.5 6.99997",
          ],
          [
            "Write-ups",
            "/write-ups",
            "M1 7.32277C5.5 6.32272 8.5 7.32272 13 2.82275C15.9614 -0.138627 10 10.5 18.0002 5.5C21.087 3.57081 28.0604 3.24039 25.5002 5.3874C20 9.99991 24 9.49995 26.5 7.50001C28.4231 5.96161 32.3119 4.39103 35.5 1.99997C39.5 -1 33.6991 4.69672 34.5 7.49992C35.5 10.9999 49.5002 -1.43051e-06 49.5002 4.32274C49.5002 7.10058 35.5 11.5 53.5002 7.99997",
          ],
          [
            "Projects",
            "/projects",
            "M1 5.32277C5.5 4.32272 8.75193 10.2404 10 4C10.5 1.5 8.99979 7.5 17 2.5C20 0.62505 22.9178 2.0068 23 2.5C23.5 5.49992 23 5.49994 25.5 3.5C27.4231 1.9616 29 7.32273 34 2.3227C37.5355 -1.21283 33.6991 2.69671 34.5 5.49992C35 7.24995 48.5 4.40051 49.5002 2.32274C50.7051 -0.180193 36.4998 7.00003 54.5 3.5",
          ],
          [
            "Contact",
            "/contact",
            "M1 7.32277C5.5 6.32273 8.5 7.32273 13 2.82275C15.9614 -0.138624 8.99979 9.5 17 4.5C20.0868 2.57081 25.5602 2.35299 23 4.5C17.4998 9.11251 23 7.49994 25.5 5.5C27.4231 3.9616 27.5 10 35.5 1.99997C39.0355 -1.53556 33.6991 4.69672 34.5 7.49992C35.5 10.9999 47.5 14.5 49.5002 4.32274C50.0359 1.59704 36.4998 9.00003 54.5 5.5",
          ],
        ].map(([title, url, d]) => (
          <li>
            <Link href={url}>
              <a>
                {title}
                <motion.svg
                  width='70'
                  height='12'
                  viewBox='0 0 70 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  {router.pathname === url ? (
                    <motion.path
                      transition={{ duration: 1 }}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      whileActive={{ pathLength: 1 }}
                      d={d}
                      stroke='url(#paint0_linear_73_1036)'
                    />
                  ) : null}
                  <defs>
                    <linearGradient
                      id='paint0_linear_73_1036'
                      x1='0.999999'
                      y1='2.50001'
                      x2='54.5'
                      y2='6'
                      gradientUnits='userSpaceOnUse'>
                      <stop offset='0.0157301' stop-color='#1E0456' />
                      <stop offset='0.832941' stop-color='#00D1FF' />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <ul className='flex space-x-5 px-2 pl-5 lg:pl-10 '>
        <button
          className='cursor-pointer rounded-lg  text-center'
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <FaMoon size={25} />
          ) : (
            <IoSunnySharp size={25} />
          )}
        </button>
        <a href=''>
          <FaGithub size={25} />
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
