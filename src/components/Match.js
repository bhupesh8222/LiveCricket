import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { getParticularMatchDetail } from "../api/Api";
//import AlertDialog from "./Dialog";
function Match(props) {
  const [details, setDetails] = React.useState({});

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (id) => {
    getParticularMatchDetail(id).then((result) => setDetails(result));
    handleClickOpen();
  };
  const { match } = props;
  console.log(match);
  return (
    <>
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item variant="h5">
              <Typography variant="h5">{match["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img style={{ height: 120 }} src={require("../vs.jpg")}></img>
            </Grid>
            <Grid item variant="h5">
              <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
          <CardActions>
            <Grid container justify="center">
              <Button
                onClick={() => handleClick(match["unique_id"])}
                variant="contained"
                color="primary"
              >
                Show details
              </Button>
              <Button
                style={{ marginLeft: 10 }}
                variant="contained"
                color="primary"
              >
                Start date - {new Date(match.dateTimeGMT).toLocaleString()}
              </Button>
            </Grid>
          </CardActions>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Match Details</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {!details.matchStarted ? (
              "Match has not started yet"
            ) : (
              <>
                <div>{details.description}</div>
                <div>{details.stat}</div>
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Match;
