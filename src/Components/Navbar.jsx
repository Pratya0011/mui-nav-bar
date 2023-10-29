import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerComp from "./DrawerComp";

function Navbar({ links }) {
  const [value, setValue] = useState();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(245,0,0,1) 0%, rgba(45,36,78,1) 50%, rgba(148,69,252,1) 100%);",
      }}
    >
      <Toolbar>
        {isMatch ? <>
          <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
        <DrawerComp links = {links}/>
        </>:<Grid container sx={{ placeItems: "center" }}>
          <Grid item xs={2}>
            <Typography>
              <ShoppingCartCheckoutIcon />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {links?.map((item, index) => (
                <Tab label={item} key={index} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Box display="flex">
              <Button
                variant="contained"
                sx={{ marginLeft: "auto", background: "rgba(245,0,0,1)" }}
              >
                Login
              </Button>
              <Button
                variant="contained"
                sx={{ marginLeft: 1, background: "rgba(245,0,0,1)" }}
              >
                Signup
              </Button>
            </Box>
          </Grid>
        </Grid>}
        
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
