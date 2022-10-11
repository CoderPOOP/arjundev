import Image from "next/image";
import HeroFinal from "../images/HeroFinal.png";
import MeImage from "../images/meimage.jpeg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col" id="mobile-menu">
        <ul className="flex justify-center text-lg text-center pt-8">
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
              href="/skills"
            >
              Skills
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-7 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden md:block hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src={HeroFinal}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image className="rounded-full" src={MeImage} />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Arjun Vijay Prakash
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    I am a Full-Stack Developer based in India 🇮🇳
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg my-4">
                  I am a Full-Stack Developer with over 3.5 years of experience
                  in Software Development. I also have experience in Machine
                  Learning and Data Science. At Present, I have learnt Web and
                  ML Technologies like NextJs, ExpressJs, SKlearn, TailwindCSS,
                  TensorFlow and Pandas. At this age of 13, I am a student but I
                  can assure you that, the products drawn by me are no less
                  compared to a Professional Developer. Get a Site done by Me on
                  Fiverr(arjun_v_prakash)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
