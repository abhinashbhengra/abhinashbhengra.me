const Skills = () => {
  return (
    <div className="px-12 lg:px-40 mt-20 text-center lg:text-start">
      <h1 className="text-xl lg:text-2xl font-bold mb-8">Skills</h1>
      <div className="flex gap-x-6 lg:gap-x-20 justify-center flex-wrap">
        <img
          src="/images/next-js.svg"
          alt="nextJs"
          className="w-14 p-2 lg:p-0"
        />
        <img
          src="/images/react-logo.svg"
          alt="react"
          className="w-14 p-2 lg:p-0"
        />
        <img
          src="/images/js-logo.svg"
          alt="javascript"
          className="w-14 p-2 lg:p-0"
        />
        <img
          src="/images/typescript-logo.svg"
          alt="typescript"
          className="w-14 p-2 lg:p-0"
        />
        <img
          src="/images/tailwind-logo.svg"
          alt="tailwind"
          className="w-14 p-2 lg:p-0"
        />
        <img src="/images/css-logo.svg" alt="css" className="w-14 p-2 lg:p-0" />
        <img
          src="/images/html-logo.svg"
          alt="html"
          className="w-14 p-2 lg:p-0"
        />
      </div>
    </div>
  );
};

export default Skills;
