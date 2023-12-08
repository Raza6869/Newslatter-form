import { useContext } from "react";
import { FormContext } from "../context/formContext";

export default function Form() {
  const { setSucess, setEmail } = useContext(FormContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSucess(true);
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label className="font-bold">Email address</label>
      <input
        type="email"
        id="email"
        title="email"
        placeholder="email@company.com"
        className="border-[1px] hover:border-darkSlateGrey border-grey h-12 w-full rounded-md px-4 mb-2"
        required
        onChange={handleChange}
      />
      <button type="submit" className="button">
        Subscrbe to monthly newsletter
      </button>
    </form>
  );
}
