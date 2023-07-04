import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Left from "@/Component/Left/Left";
import Center from "@/Component/Center/Center";
// import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen flex">
      {/* <Image src={basket} alt="basket" /> */}

      <Left />
      <Center />
    </div>
  );
}
