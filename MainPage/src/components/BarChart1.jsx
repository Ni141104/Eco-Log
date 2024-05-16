import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Days", "Dry Waste","Wet Waste","E-Waste","Metal Waste"],
  ["Sunday", 1000, 1500, 1200,2200],
  ["Monday", 1170,1600,3200,4000],
  ["Tuesday", 660,1750,900,550],
  ["Wednesday", 1030,780,640,840],
  ["Thursday", 930,1000,250,400],
  ["Friday", 1530,200,750,1250],
  ["Saturday", 1200,670,990,1999],
];

export const options = {
  chart: {
    title: "Sales History",
    subtitle: "Price for Waste",
  },
};

export default function BarChart1() {
  return (
    <Chart
      chartType="Bar"
      width="800px"
      height="400px"
      data={data}
      options={options}
    />
  );
}
