import React, { useState } from 'react';
import RenderLineChart from  './chart';
import DeathData from './DeathData';
import RenderRadialChart from './AgeRadialChart.js';
import AgeData from './AgeData';
import { Grid, Card } from '@material-ui/core'

function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <section>
      <Grid>
    <Card style={{height: 500}}>
      {clicked ? <RenderLineChart data={DeathData()}/> : <button onClick={()=>setClicked(true)}>Click me</button>}
    </Card>
    
    <div style={{height: 700, width: 700}}>
      <RenderRadialChart data={AgeData()}/>
    </div>
    </Grid>
    </section>
   

  );
}

export default App;
