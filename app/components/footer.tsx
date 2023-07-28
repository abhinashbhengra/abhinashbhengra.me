import Link from "next/link";
const Footer = () => {
  return (
    <div className="px-4 lg:px-40 mb-24 ">
      <div className="h-0.5 bg-slate-100 mb-4"></div>
      <div className="flex justify-between items-center">
        <p className="text-slate-600 text-xs lg:text-sm">
          Buit with Typescript, Tailwind and Next.js 🖤
        </p>
        <div className="flex gap-2">
          <Link href="https://twitter.com/AbhinashBhengra" target="blank">
            <p className="text-slate-600 text-xs lg:text-sm">Twitter</p>
          </Link>
          <Link href="https://github.com/abhinashbhengra" target="blank">
            <p className="text-slate-600 text-xs lg:text-sm">Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abhinash-bhengra-451716194/"
            target="blank"
          >
            <p className="text-slate-600 text-xs lg:text-sm">LinkedIn</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
