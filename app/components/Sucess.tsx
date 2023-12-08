//next imports
import Image from "next/image";
import { useContext } from "react";

//media
import sucessicon from "@/assets/images/icon-success.svg";

//context
import { FormContext } from "../context/formContext";

export default function Sucess() {
  const { setSucess, email } = useContext(FormContext);
  const goBack = () => {
    setSucess(false);
  };

  return (
    <main className="flex flex-col justify-between bg-white sm:w-[400px] h-full sm:h-auto sm:rounded-[30px] py-8 px-6 sm:px-14 sm:py-12">
      <div className="flex flex-col gap-6 mt-16 sm:mt-0 sm:mb-8 ">
        <Image
          src={sucessicon}
          alt="icon of sucess state"
          className="sm:h-12 sm:-ml-2 sm:mb-2"
        />
        <div>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
      </div>
      <button className="button" onClick={goBack}>
        Dimiss message
      </button>
    </main>
  );
}
