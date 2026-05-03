import PageHeader from "../components/ui/PageHeader.jsx";
import FilterBar from "../components/ui/FilterBar.jsx";
import MetricCard from "../components/ui/MetricCard.jsx";
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

      <section className="metrics-grid">
        <MetricCard label="Pass Rate" value="91.4%" footnote="+2.1% from previous build" trendType="up"/>
        <MetricCard label="Failed Tests" value="17" footnote="-6 since last run" trendType="up"/>
        <MetricCard label="Total Tests" value="1,248" footnote="Across 42 test suites"/>
        <MetricCard label="Average Duration" value="18m 42s" footnote="+1m 08s slower than baseline"/>
      </section>
    </>
  );
}
