"use client";
import { NextPageContext, NextComponentType } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
interface HeaderProps {
  priceData: CryptoDataPoint[];
}
const paths = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
const Header: NextComponentType<NextPageContext, {}, HeaderProps> = ({
  priceData,
}) => {
  const router = useRouter();
  // refresh router to check for cache changes
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 15000); // 15 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="flex flex-col w-full gap-5 ">
      <Marquee>
        {priceData.map((point) => (
          <li key={point.name}>
            {point.symbol}: ${point.quote.USD.price.toFixed(2)}
          </li>
        ))}
      </Marquee>
      <div className="flex justify-between p-5">
        <h1>umnblockchain</h1>
        <nav className="flex gap-5">
          {paths.map(({ name, path }) => (
            <Link href={path} key={name}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;

function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="marquee">
        <ul className="marquee__content">{children}</ul>
        <ul className="marquee__content">{children}</ul>
      </div>
    </div>
  );
}
