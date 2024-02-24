import React from 'react'
import Styleadmin from './admin.module.css'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { BarChart } from '@mui/icons-material';
import { axisClasses } from '@mui/x-charts';
import Bar from './bar'
import Pie from './pie'
import Income from './income';
import PatientsTable from './patientstable';
import DoctorTable from './doctortable'

const index = ({patients}) => {
    
  return (
    <>
    <h1 style={{margin: '0 3.5rem' , color: 'blue'}}>Welcome to Admin Dashboard</h1>
    <div className={Styleadmin.container}>
      <div className={Styleadmin.horizontal}>
        <BusinessCenterOutlinedIcon style={{ fontSize: '40px' , color: 'royalblue'}}/>
        <div>
        <h2>Appointments</h2>
        <h3>50</h3>
        </div>
      </div>

      <div className={Styleadmin.horizontal}>
        <BloodtypeIcon style={{ fontSize: '40px' , color: 'royalblue' }}/>
        <div>
        <h2>Operations</h2>
        <h3>50</h3>
        </div>
      </div>

      <div className={Styleadmin.horizontal}>
        <AttachMoneyIcon style={{ fontSize: '40px' , color: 'royalblue' }}/>
        <div>
        <h2>Earnings</h2>
        <h3>50</h3>
        </div>
      </div>

      <div className={Styleadmin.horizontal}>
        <AccessibleOutlinedIcon style={{ fontSize: '40px' , color: 'royalblue'}}/>
        <div>
        <h2>New Patients</h2>
        <h3>50</h3>
        </div>
      </div>
    </div>
    
<div className={Styleadmin.chartscontainer}>
  <div>
  <Bar/>
<Income/>
<PatientsTable patients={patients}/>
  </div>
  <div style={{display: 'flex' , flexDirection:'column'}}>
  <DoctorTable/>
  <Pie/>
  </div>
</div>




    
    </>
    
  )
}

export default index
