import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Doctors from "./Doctors";
import Pharmacy from "./Pharmacy";

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
    height: 800
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function ClinicForPharmacy() {
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
      </Tabs>
      <TabPanel value={value} index={0}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <Pharmacy />
      </TabPanel>
      <TabPanel value={value} index={15}>
        <Pharmacy />
      </TabPanel>
    </div>
  );
}
