import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // revalidates every 60 seconds
  const data = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=30&sort=market_cap&cryptocurrency_type=all&tag=all",
    {
      headers: {
        "X-CMC_PRO_API_KEY": `${process.env.COIN_MARKET_API_KEY}`,
        Accept: "application/json",
      },
      next: {
        revalidate: 60,
      },
    }
  ).then((res) => res.json());
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header priceData={data.data} />
        {children}
      </body>
    </html>
  );
}
