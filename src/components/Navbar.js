import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography>Live Cricket</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
