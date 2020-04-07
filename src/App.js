import React from 'react';
import RenderLineChart from  './chart';
import DeathData from './DeathData';
import RenderRadialChart from './AgeRadialChart.js';
import AgeData from './AgeData';
import { Grid } from '@material-ui/core'

function App() {
  console.log(AgeData())

  return (
    <section>
      <Grid>
    <div style={{height: 500}}>
      <RenderLineChart data={DeathData()}/>
    </div>
    
    <div style={{height: 700, width: 700}}>
      <RenderRadialChart data={AgeData()}/>
    </div>
    </Grid>
    </section>
   

  );
}

export default App;
