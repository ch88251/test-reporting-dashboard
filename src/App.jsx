import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/layout/AppShell.jsx";
import Overview from "./pages/Overview.jsx";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </AppShell>
  );
}
