import PageHeader from "../components/ui/PageHeader.jsx";
import FilterBar from "../components/ui/FilterBar.jsx";
import "./page-layout.css";

export default function Overview() {

  const filters = [
    { label: "Application", options: ["All Applications", "Car Clinic", "Meal Planner" ] },
    { label: "Version", options: ["1.0.0", "1.1.0", "1.2.0" ] },
    { label: "Environment", options: ["All Environments", "Development", "Testing", "Staging" ] },
    { label: "Test Type", options: ["All Test Types", "Smoke", "API", "UI", "Regression", "Performance", "Stress" ] },
    { label: "Date Range", type: "input", value: "Last 14 days" },
  ];

  return (
    <>
      <PageHeader 
        title="Quality Overview" 
        subtitle="Current quality metrics across applications, environments, and infrastructure"
        statusText="Release Candidate Healthy" />
      <FilterBar filters={filters} />
    </>
  );
}
