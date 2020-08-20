import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Doctors from "./Doctors";
import TopTab from "./TopTab";
import { Grid } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 1060
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function ClinicForDoctors() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Allergy & Antihistamines" {...a11yProps(0)} />
        <Tab label="Antibiotics" {...a11yProps(1)} />
        <Tab label="Anti-Cancer & Tumor" {...a11yProps(2)} />
        <Tab label="Anti-Fungal" {...a11yProps(3)} />
        <Tab label="Anxiety & Behavior" {...a11yProps(4)} />
        <Tab label="Arthritis Pain & Inflammation" {...a11yProps(5)} />
        <Tab label="Asthma & Respiratory" {...a11yProps(6)} />
        <Tab label="Colic & Musculoskeletal" {...a11yProps(7)} />
        <Tab label="Cushing's Disease" {...a11yProps(8)} />
        <Tab label="Diabetes & Insulin" {...a11yProps(9)} />
        <Tab label="Digestive Tract, Liver & Pancr" {...a11yProps(10)} />
        <Tab label="Ear Medications" {...a11yProps(11)} />
        <Tab label="Epilepsy & Seizure" {...a11yProps(12)} />
        <Tab label="Estrus & Luteolytic" {...a11yProps(13)} />
        <Tab label="Eye Medications " {...a11yProps(14)} />
        <Tab label="Flea & Tick" {...a11yProps(15)} />
        <Tab label="Flea & Tick" {...a11yProps(16)} />
        <Tab label="Flea & Tick" {...a11yProps(17)} />
        <Tab label="Flea & Tick" {...a11yProps(18)} />
        <Tab label="Flea & Tick" {...a11yProps(19)} />
        <Tab label="Flea & Tick" {...a11yProps(20)} />
        <Tab label="Flea & Tick" {...a11yProps(21)} />
        <Tab label="Flea & Tick" {...a11yProps(22)} />
        <Tab label="Flea & Tick" {...a11yProps(23)} />
        <Tab label="Flea & Tick" {...a11yProps(24)} />
        <Tab label="Flea & Tick" {...a11yProps(25)} />
        <Tab label="Flea & Tick" {...a11yProps(26)} />
         <Tab label="Flea & Tick" {...a11yProps(27)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <TopTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={15}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={16}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={17}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={18}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={19}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={20}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={21}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={22}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={23}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={24}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={25}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={26}>
        <Doctors />
      </TabPanel>
      <TabPanel value={value} index={27}>
        <Doctors />
      </TabPanel>
    </div>
  );
}
