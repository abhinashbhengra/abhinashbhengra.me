import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
const Hero = () => {
  return (
    <div className="lg:flex justify-between items-center lg:px-36 mt-12">
      <div className="text-base md:text-base tracking-wide leading-6 px-12 lg:px-4 lg:w-4/5 mb-16 lg:mb-4">
        <h1 className="text-3xl font-bold mb-4">Hi there, I&apos;m Abhinash</h1>
        <p className="mb-2">
          I love to
          <span className="p-2">
            <RoughNotation type="underline" color="#000" show>
              code
            </RoughNotation>
          </span>
          and
          <span className="p-2">
            <RoughNotation type="underline" color="#000" show>
              build
            </RoughNotation>
          </span>
          products with a
          <span className="p-2">
            <RoughNotation type="highlight" color="#fbb0c2" show>
              user-
            </RoughNotation>
            <RoughNotation type="highlight" color="#fbb0c2" show>
              friendly,
            </RoughNotation>
            <RoughNotation type="highlight" color="#fbb0c2" show>
              simple
            </RoughNotation>
          </span>
          and
          <span className="p-2">
            <RoughNotation type="highlight" color="yellow" show>
              delightful
            </RoughNotation>
          </span>
          user experience.
        </p>
        <p className="mt-4">
          Having a solid understanding of{" "}
          <span>
            <RoughNotation type="underline" color="#000" show>
              ReactJS,{" "}
            </RoughNotation>
          </span>
          <span>
            <RoughNotation type="underline" color="#000" show>
              Javascript,
            </RoughNotation>
          </span>
          <span>
            <RoughNotation type="underline" color="#000" show>
              CSS{" "}
            </RoughNotation>
          </span>
          and{" "}
          <span>
            <RoughNotation type="underline" color="#000" show>
              HTML,{" "}
            </RoughNotation>
          </span>
          I&apos;m skilled, knowledgeable, and equipped to transform design
          concepts into enjoyable and practical user experiences.
        </p>
        <p className="mt-4">
          My frontend programming abilities have improved as a result of the
          transformational learning experience I had at the Web Development
          Bootcamp (NeoG Camp). Through projects, I was able to demonstrate my
          proficiency in designing user-friendly interfaces and putting into
          practise strong functions, which stoked my enthusiasm for developing
          useful digital solutions.
        </p>
        <p className="mt-4">
          I&apos;m currently looking for a new role as a developer.
          <span className="p-2">
            <RoughNotation type="circle" color="#fe5c5c" show>
              Hire me?
            </RoughNotation>
          </span>
        </p>
        <div className="mt-10">
          <Link
            className="px-4 py-3 mx-1 bg-black text-white text-sm font-thin rounded-sm"
            href="https://www.linkedin.com/in/abhinash-bhengra-451716194/"
            target="blank"
          >
            View Linkedin
          </Link>
          <Link
            className="border px-4 py-3 mx-1 text-sm font-thin rounded-sm"
            href="https://github.com/abhinashbhengra"
            target="blank"
          >
            View Github
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-40 w-40 lg:h-52 lg:w-52  overflow-hidden rounded-full">
          <img
            src="/images/Abhi.png"
            alt="abhi"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
