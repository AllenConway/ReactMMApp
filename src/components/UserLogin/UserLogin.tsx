import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ProfileIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitAppIcon from "@material-ui/icons/ExitToApp";
import styles from "./UserLogin.module.scss";
import { IconButton } from "@material-ui/core";

interface StyledMenuProps {
  id: string;
  anchorEl: any;
  keepMounted: any;
  open: boolean;
  onClose: any;
}

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props: StyledMenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    open={false}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

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
      <StyledMenu
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
      </StyledMenu>
    </div>
  );
}
