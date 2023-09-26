import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints ? props.dataPoints.map(dataPoint => dataPoint.value) : [];
  let totalMaximum = valueArray.length > 0 ? Math.max(...valueArray) : 0;

  return (
    <div className="chart">
      {props.dataPoints ? (
        props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))
      ) : (
        <p>No data points available.</p>
      )}
    </div>
  );
};

export default Chart;
