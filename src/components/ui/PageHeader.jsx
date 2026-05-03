import "./PageHeader.css";

export default function PageHeader({ title, subtitle, statusText, statusType = "success" }) {
  return (
    <section className="topbar">
      <div className="page-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
