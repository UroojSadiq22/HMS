import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Styleadmin from './admin.module.css'

const agedata = [
  { id: 0, value: 10, label: '0-10' , color: 'green'},
  { id: 1, value: 15, label: '10-20' },
  { id: 2, value: 20, label: '20-30' },
  { id: 3, value: 30, label: '30-40' , color: 'brown' },
  { id: 4, value: 50, label: '40-50' },

];
const genderdata = [
  { id: 0, value: 10, label: 'Male' , color: 'green'},
  { id: 1, value: 15, label: 'Female' },

];
const depdata = [
  { id: 0, value: 10, label: 'Dentistry' },
  { id: 1, value: 15, label: 'Cardiology' },
  { id: 2, value: 20, label: 'Pulmonolgy' },
  { id: 3, value: 30, label: 'General'},
  { id: 4, value: 50, label: 'Nutrientist' },

];

export default function PieActiveArc() {
  return (
    <>
    <div style={{margin: '1rem'}}>
      
    <div className={Styleadmin.pie} >
    <h3>Age Group</h3>
      <PieChart
      series={[
        {
          data : agedata,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30 },
        },
      ]}
      
      height={200}
    />
    </div>
     <div className={Styleadmin.pie} >
      <h3>Patients Gender</h3>
     <PieChart
     series={[
       {
         data: genderdata,
         highlightScope: { faded: 'global', highlighted: 'item' },
         faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
       },
     ]}
     height={200}
   />
   </div>
    <div className={Styleadmin.pie} >
    <h3>Departments</h3>
    <PieChart
    series={[
      {
        data : depdata,
        highlightScope: { faded: 'global', highlighted: 'item' },
        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      },
    ]}
    height={200}
  />
  </div>

    </div>
    
    </>
    
    
  );
}