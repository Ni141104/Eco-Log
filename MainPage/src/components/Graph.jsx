import React from "react";
import { Chart } from "react-google-charts";

export default function Graph({ FormData }) {
  // Calculate the total waste contribution
  const totalContribution =
    FormData.DryWaste + FormData.WetWaste + FormData.EWaste + FormData.MetalWaste;

  // Prepare data for the PieChart
  const data = [
    ["Waste", "Contribution %"],
    ["Dry Waste", (FormData.DryWaste / totalContribution) * 100],
    ["Wet Waste", (FormData.WetWaste / totalContribution) * 100],
    ["E-Waste", (FormData.EWaste / totalContribution) * 100],
    ["Metal Waste", (FormData.MetalWaste / totalContribution) * 100],
  ];

  // Options for the PieChart
  const options = {
    title: "Waste Categorization",
    is3D: true,
  };

  return (
    <div style={{ backgroundColor: "#020617", padding: "20px" }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}
