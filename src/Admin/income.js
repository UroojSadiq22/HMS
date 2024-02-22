import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Styleadmin from './admin.module.css'

const uData = [3000, 3740, 2000, 2780, 890, 2390, 3490];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
];
const dayData = [1700, 3740, 2050, 1780, 1990, 2590, 1790];
const xdayLabels = [
  'Mon',
  'Tues',
  'Wed',
  'Thurs',
  'Fri',
  'Sat',
  'Sun',
];

export default function Income() {
  return (
    <>
    <div style={{display: 'flex' , flexDirection: 'row' , marginLeft: '2px'}}>
    <div className={Styleadmin.income}>
        <h2>$2734</h2>
        <label>average income/month</label>
    <LineChart
      width={350}
      height={200}
      series={[{ data: uData, area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      
    />
    
    </div>
    <div className={Styleadmin.income}>
    <h2>$1237</h2>
        <label>average income/week</label>
    <LineChart
      width={350}
      height={200}
      series={[{ data: dayData, area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: xdayLabels }]}
    />

    </div>

    </div>
    
    
    </>
    
  );
}