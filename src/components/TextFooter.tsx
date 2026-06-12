import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-rose-800 text-4xl lg:text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-[#b6ddff]">Ache</span> <br /> o par das fotos
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-rose-800 text-4xl lg:text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        pra revelar <br /> <span className="text-[#b6ddff]">uma surpresa</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-rose-600 text-sm opacity-30 hover:opacity-70">
        © {new Date().getFullYear()}{" "}
        <Link href="https://github.com/leitaonerd">leitaonerd</Link>
      </p>
    </>
  );
}
