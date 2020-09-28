import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@material-ui/core";

function Match(props) {
  const { match } = props;
  console.log(match);
  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>
        <Typography>My Card</Typography>
        <Grid container justify="center" spacing={3}>
          <Grid item align>
            {match.team - 1}
          </Grid>
          <Grid item>
            <img style={{ height: 120 }} src={require("../vs.jpg")}></img>
          </Grid>
          <Grid item>{match.team - 1}</Grid>
        </Grid>
        <CardActions>
          <Grid container justify="center">
            <Button variant="contained" color="primary">
              Show details
            </Button>
            <Button
              style={{ marginLeft: 10 }}
              variant="contained"
              color="primary"
            >
              More Info
            </Button>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default Match;
