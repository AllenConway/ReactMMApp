import React from "react";
import { withStyles } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HelpIcon from "@mui/icons-material/HelpOutline";
import ContactSupport from "@mui/icons-material/ContactSupport";
import Chat from "@mui/icons-material/Chat";
import ThumbUp from "@mui/icons-material/ThumbUp";
import styles from "./Help.module.scss";
import { IconButton } from "@mui/material";

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

export default function Help() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={styles.help}>
      <IconButton 
        aria-label={`Profile`} 
        onClick={handleClick}
        aria-controls="customized-menu"
        aria-haspopup="true"        
      >
        <HelpIcon />
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
            <ContactSupport />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Chat />
          </ListItemIcon>
          <ListItemText primary="Chat" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ThumbUp />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </StyledMenuItem>
      </StyledMenu> */}
    </div>
  );
}
