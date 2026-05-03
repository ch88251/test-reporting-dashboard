import "./MetricCard.css";

export default function MetricCard({ label, value, footnote, trendType }) {
  return (
    <article className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      {footnote && <div className={`metric-footnote ${trendType || ""}`}>{footnote}</div>}
    </article>
  );
}
