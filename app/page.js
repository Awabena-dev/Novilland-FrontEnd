"use client";
import { useEffect } from "react";
import Header from "./components/Main/Header";
import Numbers from "./components/Helper/Numbers";
import Services from "./components/Main/Services";
import Team from "./components/Main/Team";
import Booking from "./components/Helper/Booking";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <Numbers />
      <Services />
      <Team id="about" />
      <Booking id="contact" />
    </>
  );
}
