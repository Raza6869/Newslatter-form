//components
import InfoList from "./Info-list";

export default function Info() {
  return (
    <section className="px-6 py-8 text-darkSlateGrey">
      <div className="mb-5">
        <h1>Stay updated!</h1>
        <p>Join 60.000+ product managers receiving monthly updates on</p>
      </div>
      <InfoList />
    </section>
  );
}
