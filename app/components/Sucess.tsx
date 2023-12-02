//next imports
import Image from "next/image";

//media
import sucessicon from "@/assets/images/icon-success.svg";

export default function Sucess() {
  const useremail: string = "cocodasilva@gmail.com";
  return (
    <main className="flex flex-col justify-between h-screen py-8 px-6">
      <div className="flex flex-col gap-6 mt-16">
        <Image src={sucessicon} alt="icon of sucess state" />
        <div>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{useremail}</strong>.
            Please open it and click the button inside to confirm your
            subscription
          </p>
        </div>
      </div>
      <button>Dimiss message</button>
    </main>
  );
}
