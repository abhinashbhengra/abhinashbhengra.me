import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 lg:px-40 py-6 mt-9 text-black">
      <div>
        <Link href="/">ABHINASH BHENGRA</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="#projects">Projects</Link>
        {/* <Link href="/about" className="border px-4 py-1">
          Resume
        </Link> */}
        <Link
          className="hidden lg:block"
          href="https://twitter.com/AbhinashBhengra"
          target="blank"
        >
          <img src="/images/twitter-logo.svg" alt="twitter" className="w-6" />
        </Link>
        <Link
          className="hidden lg:block"
          href="https://github.com/abhinashbhengra"
          target="blank"
        >
          <img src="/images/github-logo.svg" alt="github" className="w-6" />
        </Link>
        {/* <Link href="/contact">Contact</Link> */}
      </div>
    </div>
  );
}
