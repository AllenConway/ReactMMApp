import * as React from "react";
import "./Nav.scss";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Link, RouteComponentProps, NavLink, NavLinkProps } from "react-router-dom";
import { Fragment } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface TabProps {
  id: string;
  'aria-controls': string;  
  value: string;  
  component: any;
  to: string;  
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index: any, toValue: string):TabProps {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    value: index,
    component: NavLink,
    to: toValue
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

const Nav: React.FC = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
    // history.push('/tab1')
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
                  <Tab label="Cabins" {...a11yProps(0, "/cabins")} />
                  <Tab label="Reservations" {...a11yProps(1, "/reservations")} />
                  <Tab label="Specials" {...a11yProps(2, "/specials")} />
                  <Tab label="Admin" {...a11yProps(3, "/admin")} />
                  {/* <Tab label="Item Three" {...a11yProps(2, "/tab3")} />
                  <Tab label="Item Four" {...a11yProps(3, "/tab4")} />
                  <Tab label="Item Five" {...a11yProps(4, "/tab5")} />
                  <Tab label="Item Six" {...a11yProps(5, "/tab6")} />
                  <Tab label="Item Seven" {...a11yProps(6, "/tab7")} /> */}
                </Tabs>

                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                  Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                  Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                  Item Seven
                </TabPanel>
              </Fragment>
        

        </div>
      </nav>
  );
};

export default Nav;
