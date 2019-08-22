import * as React from "react";
import "./Nav.scss";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  RouteComponentProps,
  NavLink,
  Redirect,
  withRouter
} from "react-router-dom";
import { Fragment, useState } from "react";

interface TabProps {
  id: string;
  "aria-controls": string;
  value: string;
  // component: any;
  // to: string;
}

function a11yProps(index: any, toValue: string): TabProps {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    value: index
    // component: NavLink,
    // to: toValue
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: "block",
      height: 224
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  })
);

interface NavComponentProps extends RouteComponentProps<any> {
  /* other props for ChildComponent */
}

const Nav: React.FC<NavComponentProps> = (props: NavComponentProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);

    let redirectToValue: string = "";
    if (newValue) {
      switch (newValue) {
        case 1:
          redirectToValue = "/cabins";
          break;
        case 2:
          redirectToValue = "/reservations";
          break;
        case 3:
          redirectToValue = "/specials";
          break;
        case 4:
          redirectToValue = "/admin";
          break;
        default:
          redirectToValue = "/";
      }
    }
    props.history.push(redirectToValue);
  }

  const mainClasses = `nav ${classes.root}`;

  return (
    <nav className={mainClasses}>
      <div>
        <Fragment>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >            
            <Tab label="Home" {...a11yProps(0, "/")} />
            <Tab label="Cabins" {...a11yProps(1, "/cabins")} />
            <Tab label="Reservations" {...a11yProps(2, "/reservations")} />
            <Tab label="Specials" {...a11yProps(3, "/specials")} />
            <Tab label="Admin" {...a11yProps(4, "/admin")} />
          </Tabs>
        </Fragment>
      </div>
    </nav>
  );
};

export default withRouter(Nav);
