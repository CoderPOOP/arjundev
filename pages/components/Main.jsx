import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import Head from "next/head";
import Link from "next/link";

const Main = () => {
  const GithubLink = "https://github.com/CoderPOOP";
  const InstagramLink = "https://www.instagram.com/arjuncoder/";
  const LinkedinLink =
    "https://www.linkedin.com/in/arjun-vijay-prakash-666941214/";
  const DevLink = "https://dev.to/arjuncodess";
  return (
    <>
      <Head>
        <title>Home - ArjunCodess</title>
        <meta
          name="description"
          content="Hey, this is my protfolio, make sure to take a look at my projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div name="home">
          <div className="flex pb-5 justify-center">
            <div
              id="toast-undo"
              className="p-4 max-w-xl text-gray-900 bg-white rounded-lg shadow-md dark:text-gray-600 dark:bg-gray-800 border rounded-sm"
              role="alert"
            >
              <div className="text-lg font-normal text-center">
                I am a Full Stack Developer based in India 🇮🇳
              </div>
            </div>
          </div>
          <div className="text-2xl md:text-4xl text-center md:pt-0 px-2">
            <h1 className="inline text-3xl md:text-5xl text-blue-500 truncate tracking-widest">
              A
            </h1>
            <h1 className="inline tracking-widest">
              rjun <span className="text-amber-700">V</span>ij
              <span className="text-red-500">a</span>y{" "}
              <span className="text-rose-600">P</span>r
              <span className="text-purple-500">a</span>k
              <span className="text-orange-500">a</span>sh
            </h1>
            <p className="text-lg pt-2 tracking-wider">
              Digital Craftsman (Designer, Developer)
            </p>

            <p className="text-base md:text-xl pt-4">
              I am a Full-Stack Developer with over 3.5 years of experience in
              Software Development.
            </p>
            <p className="text-base md:text-xl">
              I also have experience in the Machine Learning and Data Science.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-blue-500" id="mobile-menu">
          <ul className="flex justify-center text-lg text-center py-8">
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
                href="/work"
              >
                Work
              </Link>
            </li>
            <li className="mr-0">
              <Link
                className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-500">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noreferrer"
                href={InstagramLink}
              >
                Instagram <FaInstagram size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noreferrer"
                href={GithubLink}
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2088ff]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noreferrer"
                href={LinkedinLink}
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A0A0A]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noreferrer"
                href={DevLink}
              >
                Dev.to <SiDevdotto size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
