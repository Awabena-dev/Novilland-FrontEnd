import Image from "next/image";
import Header from "./components/Main/Header";
import Numbers from "./components/Helper/Numbers";
import Services from "./components/Main/Services";
import Team from "./components/Main/Team";
import Booking from "./components/Helper/Booking";

export default function Home() {
  return (
    <>
      <Header />
      <Numbers />
      <Services />
      <Team />
      <Booking />
    </>
  );
}
