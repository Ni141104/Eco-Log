/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function PieChart({FormData}) {	
    const totalContribution =
    FormData.DryWaste + FormData.WetWaste + FormData.EWaste + FormData.MetalWaste;
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Waste Category"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [   
					{ y:  (FormData.DryWaste ), label: "Dry Waste" },
					{ y:  (FormData.WetWaste ), label: "Wet Waste" },
					{ y:  (FormData.EWaste ), label: "E-Waste" },
					{ y:  (FormData.MetalWaste), label: "Metal Waste" }
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	
}
 
export default PieChart; 