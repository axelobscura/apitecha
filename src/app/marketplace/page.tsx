"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Marketplace() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center w-100 vh-100">
      <Header/>
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in your Image</h1>
      <Footer/>
    </main>
  );
}
