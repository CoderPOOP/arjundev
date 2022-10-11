import Link from "next/link";

const Contact = () => {
  return (
    <>
    <div className="flex flex-col" id="mobile-menu">
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
          </ul>
        </div>
    <div className="flex justify-center pb-20 px-2">
      <form
        method="POST"
        action="https://getform.io/f/ffb58dee-b77e-4202-bda5-1da637ea6f33"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline">
            Contact
          </p>
          <p className="pt-4">
            Submit the form below or shoot me an email -
            arjunv.prakash12345@gmail.com
          </p>
        </div>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline mt-5"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline my-3 rounded-2xl" type="submit">
        Let&apos;s Collaborate
      </button>
      </form>
      </div>
    </>
  );
};

export default Contact;
