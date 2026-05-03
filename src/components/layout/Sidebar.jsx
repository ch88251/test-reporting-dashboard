import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const dashboardLinks = [
  {path: "/", label: "Overview", end: true}
];

export default function Sidebar() {
  const renderLink = (link) => (
    <NavLink
      key={link.path}
      to={link.path}
      end={link.end}
      className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
    >
      {link.label}
    </NavLink>
  );

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">Q</div>
        <div>
          <div className="brand-title">
            Quality Dashboard
          </div>
          <div className="brand-subtitle">Test Automation Reporting</div>
        </div>
      </div>
      <div className="nav-section-title">Dashboards</div>
      {dashboardLinks.map(renderLink)}
    </aside>
  );
}
