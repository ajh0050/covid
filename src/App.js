import React, { useState } from 'react';
import RenderLineChart from './chart';
import DeathData from './DeathData';
import RenderRadialChart from './AgeRadialChart.js';
import AgeData from './AgeData';
import { Grid, Card, Button, Paper, Typography, Container, CssBaseline } from '@material-ui/core'

function App() {
  const [clicked, setClicked] = useState(false);
  console.log(AgeData());
  return (
    <React.Fragment>
      <CssBaseline>
          <Grid container spacing={32} direction="column" alignContent="center">
            <Grid item xs={12}>
              <Paper>
                <Typography>What does the data say?</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} med={6}>
            <Card >
              {clicked ? <RenderLineChart data={DeathData()} /> : <Button onClick={() => setClicked(true)}><Typography>Click me</Typography></Button>}
            </Card>
          </Grid>
          <Grid item xs={12} med={6}>
            <Card>
              <RenderRadialChart data={AgeData()} />
            </Card>
          </Grid>
          </Grid>
      </CssBaseline>
    </React.Fragment>


  );
}

export default App;
