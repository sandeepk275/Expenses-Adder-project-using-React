import React from "react";
import './Chart.css';
import ChartBar from './ChartBar';
 
const Chart=(props)=>{
    const dataPointsValue=props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax=Math.max(...dataPointsValue);// max(contain value like 1,2,3) so value are in aarray so we used like this

    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>{
                return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
            })}
        </div>
        
    );
};
export default Chart;