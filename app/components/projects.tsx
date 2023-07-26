import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="px-12 lg:px-40 mt-20 mb-20">
      <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-start">
        Projects
      </h1>
      <p className="text-slate-400 mb-8 text-center lg:text-start">
        Some of the projects I worked on:
      </p>
      <div className="lg:flex gap-8 mb-8">
        <div className="mb-8">
          <div className="relative">
            <img
              src="/images/waves-zone.png"
              alt="ecommerce"
              className="w-full h-full shadow-2xl rounded opacity-50"
            />
            <div className="absolute top-24 right-24 lg:top-36 lg:right-32 text-center">
              <RoughNotation type="highlight" color="#fef3c7" show>
                <p className="text-black text-2xl lg:text-4xl font-bold ">
                  Waves-Zone
                </p>
              </RoughNotation>
              <RoughNotation type="box" color="#fef3c7" show>
                <p className="text-white text-2xl lg:text-4xl font-bold">
                  E-commerce App
                </p>
              </RoughNotation>
            </div>
          </div>

          <p className="font-bold mt-4 flex gap-2">
            Waves-Zone E-commerce App
            <span className="flex gap-1">
              <img src="/images/react-logo.svg" alt="react" className="w-6" />
              <img src="/images/js-logo.svg" alt="js" className="w-6" />
              <img src="/images/css-logo.svg" alt="css" className="w-6" />
            </span>
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deserunt facilis at nihil pariatur eum tempore, quia nostrum
            corrupti blanditiis iure ducimus saepe quas, deleniti nam vel
            distinctio officiis ex.
          </p> */}
          <div className="mt-4 flex">
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Live</p>
                <img
                  className="w-4 block"
                  src="/images/link-logo.svg"
                  alt="live"
                />
              </div>
            </Link>
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Code</p>
                <img
                  className="w-4 block"
                  src="/images/github-logo.svg"
                  alt="github"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <div className="relative">
            <img
              src="/images/sociogram.png"
              alt="sociogram"
              className="w-full h-full opacity-50"
            />
            <div className="absolute top-24 right-24 lg:top-36 lg:right-32 text-center">
              <RoughNotation type="highlight" color="#e9d5ff" show>
                <p className="text-white text-2xl lg:text-4xl font-bold">
                  Sociogram
                </p>
              </RoughNotation>
              <RoughNotation type="box" color="#e9d5ff" show>
                <p className="text-black text-2xl lg:text-4xl font-bold">
                  Social Media App
                </p>
              </RoughNotation>
            </div>
          </div>

          <p className="font-bold mt-4 flex gap-2">
            Sociogram Social Media App
            <span className="flex gap-1">
              <img src="/images/react-logo.svg" alt="react" className="w-6" />
              <img src="/images/js-logo.svg" alt="js" className="w-6" />
              <img src="/images/css-logo.svg" alt="css" className="w-6" />
            </span>
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            officiis. Fuga corrupti, aut laborum ducimus porro modi ab sapiente
            vel tempora exercitationem consectetur iste ad repudiandae veritatis
            voluptas eos suscipit!
          </p> */}
          <div className="mt-4 flex">
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Live</p>
                <img
                  className="w-4 block"
                  src="/images/link-logo.svg"
                  alt="live"
                />
              </div>
            </Link>
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Code</p>
                <img
                  className="w-4 block"
                  src="/images/github-logo.svg"
                  alt="github"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-8">
        <div className="mb-8">
          <div className="relative">
            <img
              src="/images/portfolio.png"
              alt="portfolio"
              className="w-full h-full shadow-2xl rounded opacity-50"
            />
            <div className="absolute top-24 right-40 lg:top-36 lg:right-48 text-center">
              <RoughNotation type="highlight" color="#000" show>
                <p className="text-white text-2xl lg:text-4xl font-bold ">
                  Portfolio
                </p>
              </RoughNotation>
              {/* <RoughNotation type="box" color="#fff" show>
                <p className="text-black text-4xl font-bold">E-commerce App</p>
              </RoughNotation> */}
            </div>
          </div>

          <p className="font-bold mt-4 flex gap-2">
            My Portfolio Website
            <span className="flex gap-1">
              <img src="/images/next-js.svg" alt="react" className="w-6" />
              <img src="/images/typescript-logo.svg" alt="js" className="w-6" />
              <img src="/images/tailwind-logo.svg" alt="css" className="w-6" />
            </span>
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            deserunt facilis at nihil pariatur eum tempore, quia nostrum
            corrupti blanditiis iure ducimus saepe quas, deleniti nam vel
            distinctio officiis ex.
          </p> */}
          <div className="mt-4 flex">
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Live</p>
                <img
                  className="w-4 block"
                  src="/images/link-logo.svg"
                  alt="live"
                />
              </div>
            </Link>
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Code</p>
                <img
                  className="w-4 block"
                  src="/images/github-logo.svg"
                  alt="github"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <img
              src="/images/sociogram.png"
              alt="sociogram"
              className="w-full h-full opacity-50"
            />
            <div className="absolute top-24 right-24 lg:top-36 lg:right-32 text-center">
              <RoughNotation type="highlight" color="#fda4af" show>
                <p className="text-white text-2xl lg:text-4xl font-bold">
                  Sociogram
                </p>
              </RoughNotation>
              <RoughNotation type="box" color="#fff" show>
                <p className="text-black text-2xl lg:text-4xl font-bold">
                  Social Media App
                </p>
              </RoughNotation>
            </div>
          </div>

          <p className="font-bold mt-4 flex gap-2">
            Sociogram Social Media App
            <span className="flex gap-1">
              <img src="/images/react-logo.svg" alt="react" className="w-6" />
              <img src="/images/js-logo.svg" alt="js" className="w-6" />
              <img src="/images/css-logo.svg" alt="css" className="w-6" />
            </span>
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            officiis. Fuga corrupti, aut laborum ducimus porro modi ab sapiente
            vel tempora exercitationem consectetur iste ad repudiandae veritatis
            voluptas eos suscipit!
          </p> */}
          <div className="mt-4 flex">
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Live</p>
                <img
                  className="w-4 block"
                  src="/images/link-logo.svg"
                  alt="live"
                />
              </div>
            </Link>
            <Link href="">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Code</p>
                <img
                  className="w-4 block"
                  src="/images/github-logo.svg"
                  alt="github"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
