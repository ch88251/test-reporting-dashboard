import "./FilterBar.css";

export default function FilterBar({ filters }) {
  return (
    <section className="filters">
      {filters.map((filter) => (
        <div className="filter-group" key={filter.label}>
          <label>{filter.label}</label>
          {filter.type === "input" ? (
            <input type="text" defaultValue={filter.value || ""} placeholder={filter.placeholder || ""} />
          ) : (
            <select defaultValue={filter.value || filter.options?.[0]}>
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </section>
  );
}
