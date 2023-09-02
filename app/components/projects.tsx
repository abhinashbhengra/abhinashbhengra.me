import { RoughNotation } from "react-rough-notation";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="text-sm lg:text-base tracking-wide leading-6 px-4 lg:px-40 mt-20 mb-20"
    >
      <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-start">
        Projects
      </h1>
      <p className="text-slate-400 mb-8 text-center lg:text-start">
        Some of the projects I worked on:
      </p>
      <div className="lg:flex gap-8 mb-8">
        <div className="mb-8 flex flex-col justify-between">
          <div className="relative">
            <img
              src="/images/waves-zone.png"
              alt="ecommerce"
              className="w-full h-full shadow-2xl rounded opacity-50"
            />
          </div>

          <p className="font-bold mt-4 flex gap-2 mb-2">
            Waves-Zone E-commerce App
            <span className="flex gap-1">
              <img src="/images/react-logo.svg" alt="react" className="w-6" />
              <img src="/images/js-logo.svg" alt="js" className="w-6" />
              <img src="/images/css-logo.svg" alt="css" className="w-6" />
            </span>
          </p>
          <p>
            Waves-zone has most of the features that normally an eCommerce
            website has. Headphone theme with a beautiful UI, Sorting/Filtering
            of products, searching your products, saving them to your wishlist
            and cart.
          </p>
          <div className="mt-4 flex">
            <Link href="https://waves-zone.vercel.app/" target="blank">
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Live</p>
                <img
                  className="w-4 block"
                  src="/images/link-logo.svg"
                  alt="live"
                />
              </div>
            </Link>
            <Link
              href="https://github.com/abhinashbhengra/Waves-Ecommerce"
              target="blank"
            >
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
        <div className="mb-8 flex flex-col justify-between">
          <div className="relative">
            <img
              src="/images/sociogram.png"
              alt="sociogram"
              className="w-full h-full opacity-50"
            />
          </div>

          <p className="font-bold mt-4 flex gap-2 mb-2">
            Sociogram Social Media App
            <span className="flex gap-1">
              <img src="/images/react-logo.svg" alt="react" className="w-6" />
              <img src="/images/js-logo.svg" alt="js" className="w-6" />
              <img src="/images/css-logo.svg" alt="css" className="w-6" />
            </span>
          </p>
          <p>
            Sociogram is similar to instagram, It allows you to like/dislike
            posts, add posts to bookmark list, follow/unfollow user and even
            edit your user profile.
          </p>
          <div className="mt-4 flex">
            <Link
              href="https://sociogram-social-media.vercel.app/"
              target="blank"
            >
              <div className="border px-4 py-2 mx-1 text-sm font-thin rounded-sm flex gap-1">
                <p>Live</p>
                <img
                  className="w-4 block"
                  src="/images/link-logo.svg"
                  alt="live"
                />
              </div>
            </Link>
            <Link
              href=" https://github.com/abhinashbhengra/sociogram-social-media"
              target="blank"
            >
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
