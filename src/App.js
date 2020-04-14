import React, { useState, useEffect } from 'react';
import RenderLineChart from './chart';
import DeathData from './DeathData';
import RenderRadialChart from './AgeRadialChart.js';
import AgeData from './AgeData';
import { Grid, Card, Button, Paper, Typography, CssBaseline } from '@material-ui/core'

function App() {
  const [clicked, setClicked] = useState(false);
  // const [totalWidth, setTotalWidth] = useState(0);
  // useEffect(()=>{
  //   setTotalWidth(document.body.clientWidth) },[]);
    // console.log(document.body.clientWidth,"")},[])

  
  // Step 1: call this when this mounts
  // Step 2: calculate percentage of what you want width on charts to be
  // Step 3: pass as prop to both charts
  // Step 4: read from props to see what the prop drilled down value is
  return (
    <React.Fragment>
      <CssBaseline>
          <Grid container spacing={1} alignContent="center">
            <Grid item xs={12} >
              <Paper >
                <Typography align="center" variant="h3">What does the data say?</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} >
            <Card  >
              {clicked ? <RenderLineChart data={DeathData()} /> : <div><Typography variant='h6' align="center">How many deaths have there been in the US from Covid-19?</Typography><Button onClick={() => setClicked(true)}><Typography>See Graph</Typography></Button></div>}
            </Card>
          </Grid>
          <Grid item xs={12} md={6} >
            <Card style={{height: 400}}>
              <RenderRadialChart data={AgeData()} />
            </Card>
          </Grid>
          </Grid>
      </CssBaseline>
    </React.Fragment>


  );
}

export default App;