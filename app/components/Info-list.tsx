//next imports
import Image from "next/image";

//media
import listIcon from "@/assets/images/icon-list.svg";

export default function InfoList() {
  return (
    <ul className="flex flex-col gap-2">
      <li className="flex gap-3 items-start">
        <Image src={listIcon} alt="icon of list" />
        <p>Product discovery and building what matters</p>
      </li>
      <li className="flex gap-3 items-start">
        <Image src={listIcon} alt="icon of list" />
        <p>Messuring to ensure updates are sucess</p>
      </li>
      <li className="flex gap-3 items-start">
        <Image src={listIcon} alt="icon of list" />
        <p>And much more!</p>
      </li>
    </ul>
  );
}
