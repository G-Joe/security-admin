import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const CylinderChart = () => {
  useEffect(() => {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.XYChart3D);
    chart.paddingBottom = 45;
    chart.angle = 35;

    // Add data
    chart.data = [
      {
        weekday: "Mon",
        frequency: 8700,
      },
      {
        weekday: "Tue",
        frequency: 9000,
      },
      {
        weekday: "Wed",
        frequency: 8700,
      },
      {
        weekday: "Thurs",
        frequency: 8700,
      },
      {
        weekday: "Fri",
        frequency: 8900,
      },
    ];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "weekday";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 70; // Adjust the spacing between bars
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    const labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = 0;
    labelTemplate.horizontalCenter = "middle";
    labelTemplate.verticalCenter = "middle";
    labelTemplate.dy = 10;
    labelTemplate.inside = false;
    labelTemplate.fill = am4core.color("#615e83");
    labelTemplate.fontSize = 14;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = false;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.grid.template.strokeDasharray = "1,3";
    valueAxis.renderer.grid.template.strokeOpacity = 0.3;

    // Create series
    const series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = "frequency";
    series.dataFields.categoryX = "weekday";

    const columnTemplate = series.columns.template;
    columnTemplate.width = 50; // Set the width of each bar to 30 pixels
    columnTemplate.fill = am4core.color("#9f97ff");
    columnTemplate.strokeOpacity = 0;
    columnTemplate.tooltipText = "{valueY}";
    columnTemplate.showTooltipOn = "hover";

    // Hide the watermark
    chart.logo.disabled = true;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" className="chart-container" />;
};

export default CylinderChart;
