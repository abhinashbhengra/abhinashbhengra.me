import Link from "next/link";
const Connect = () => {
  return (
    <div className="text-sm lg:text-base tracking-wide leading-6 px-4 lg:px-40 mb-24">
      <h1 className="text-xl lg:text-2xl font-bold mb-2 text-center lg:text-start">
        Get in touch
      </h1>
      <p className="text-slate-400 mb-8">
        Do you have a job opportunity or idea you&apos;d like to discuss? Feel
        free to react me at{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-400">
          abhinashbhengra170dx@gmail.com
        </span>
        . You can also find me on{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-400">
          Twitter
        </span>
        ,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-400">
          Github
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-400">
          Linkedin
        </span>
        .
      </p>
    </div>
  );
};
export default Connect;
