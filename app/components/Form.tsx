export default function Form() {
  return (
    <form className="flex flex-col px-6 gap-2">
      <label className="font-bold">Email address</label>
      <input
        type="email"
        id="email"
        title="email"
        placeholder="email@company.com"
        className="border-[1px] hover:border-darkSlateGrey border-grey h-12 w-full rounded-md px-4 mb-2"
        required
      />
      <button>Subscrbe to monthly newsletter</button>
    </form>
  );
}
