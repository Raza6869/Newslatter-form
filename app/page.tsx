//next imports
import Image from "next/image";

//media
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "@/assets/images/illustration-sign-up-desktop.svg";

//components
import Info from "./components/Info";
import Form from "./components/Form";
import Sucess from "./components/Sucess";

export default function Home() {
  return (
    <main className=" bg-darkSlateGrey flex items-center justify-center h-screen">
      <Sucess />

      {
        //<div className="bg-white sm:items-center justify-center sm:w-[800px] sm:h-[550px] sm:rounded-[30px] sm:p-4 sm:flex sm:flex-row-reverse">
        //<Image
        //src={desktopImage}
        //alt="Newslatter illustration Mobile"
        //className="sm:h-full"
        //>
        //<div className="px-6 py-8 sm:px-12">
        //<Info />
        //<Form />
        //</div>
        //</div>
      }
    </main>
  );
}
