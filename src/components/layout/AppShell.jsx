import Sidebar from "./Sidebar.jsx";
import "./AppShell.css";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <Sidebar/>
      <main className="main">{children}</main>
    </div>
  );
}
