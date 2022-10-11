import web1 from '../images/web1.jpeg'
import web2 from '../images/web2.jpeg'
import web3 from '../images/web3.jpeg'
import web4 from '../images/web4.jpeg'
import Image from 'next/image'
import Link from 'next/link'

const Work = () => {
  return (
    <>
    <section className="p-10">
    <div className="flex flex-col" id="mobile-menu">
          <ul className="flex justify-center text-lg text-center pb-8">
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
                href="/skills"
              >
                Skills
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
          <div>
            <h3 className="text-3xl py-1 dark:text-white text-center uppercase">Work</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              These are some of my projects I would like to showcase, these projects are mainly built with NextJS -
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
              <p className='text-lg md:text-2xl text-center py-2'>Google Clone</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
              <p className='text-lg md:text-2xl text-center py-2'>Maruti Suzuki Bike Clone</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
              <p className='text-lg md:text-2xl text-center py-2'>Quiz Web App</p>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
              <p className='text-lg md:text-2xl text-center py-2'>Hulu Clone</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Work