import React from "react";
import { withStyles } from "@mui/material/styles";
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import ProfileIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitAppIcon from "@mui/icons-material/ExitToApp";
import styles from "./UserLogin.module.scss";

interface StyledMenuProps {
  id: string;
  anchorEl: any;
  keepMounted: any;
  open: boolean;
  onClose: any;
}

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5"
//   }
// })((props: StyledMenuProps) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "center"
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "center"
//     }}
//     // open={false}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles(theme => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white
//       }
//     }
//   }
// }))(MenuItem);

export default function UserLogin() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={styles.userLogin}>
      <IconButton 
        aria-label={`Profile`} 
        onClick={handleClick}
        aria-controls="customized-menu"
        aria-haspopup="true"        
      >
        <ProfileIcon />
      </IconButton>
      {/* <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu> */}
    </div>
  );
}
