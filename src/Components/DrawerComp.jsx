import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { backgroundColor: "rgba(45,36,78,1)" } }}
      >
        <List>
          {links?.map((item, index) => (
            <>
              <ListItemButton key={index} divider onClick={()=>setOpen(false)}>
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>{item}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </>
          ))}
        </List>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto", color: "#fff" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
