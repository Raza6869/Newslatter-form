"use client";
//next imports
import Image from "next/image";

//media
import mobileImage from "../assets/images/illustration-sign-up-mobile.svg";
import desktopImage from "@/assets/images/illustration-sign-up-desktop.svg";

//components
import Info from "./components/Info";
import Form from "./components/Form";
import Sucess from "./components/Sucess";
//context
import FormProvider from "./context/formProvider";
import UseFormContext from "./hook/useFormContext";
import { useEffect, useState } from "react";

export default function Home() {
  const DeviceSize = () => {
    const [width, setWidth] = useState(0);

    const handleWindowSize = () => {
      setWidth(window.innerWidth);
    };

    useEffect(() => {
      handleWindowSize();
      window.addEventListener("resize", handleWindowSize);

      return () => window.removeEventListener("resize", handleWindowSize);
    }, []);

    return width;
  };
  console.log(DeviceSize());

  return (
    <FormProvider>
      <main className=" bg-darkSlateGrey flex items-center justify-center h-screen">
        <div className="bg-white sm:items-center justify-center sm:w-[800px] sm:h-[550px] sm:rounded-[30px] sm:p-4 sm:flex sm:flex-row-reverse">
          <Image
            src={DeviceSize() < 638 ? mobileImage : desktopImage}
            alt="Newslatter illustration Mobile"
            className="sm:h-full w-full sm:w-auto"
          />
          <div className="px-6 py-8 sm:px-12">
            <Info />
            <Form />
          </div>
        </div>

        {
          //<Sucess />
        }
      </main>
    </FormProvider>
  );
}
