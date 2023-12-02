//next imports
import Image from "next/image";

//media
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";

//components
import Info from "./components/Info";
import Form from "./components/Form";
import Sucess from "./components/Sucess";

export default function Home() {
  return (
    <main className=" bg-white">
      {
        //<Image src={mobileImage} alt="Newslatter illustration Mobile" />
        //<Info />
        //<Form />
      }
      <Sucess />
    </main>
  );
}
