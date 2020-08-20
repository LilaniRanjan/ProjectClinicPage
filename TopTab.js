import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ClinicForPharmacy from "./ClinicForPharmacy";
import ClinicForDoctors from './ClinicsForDoctors';
import Pharmacy from './Pharmacy';
import Doctors from './Doctors';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TopTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Pharmacy"
            {...a11yProps('one')}
          />
          <Tab value="two" label="Doctors' Contact" {...a11yProps('two')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
      <Pharmacy/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Doctors/>
      </TabPanel>
      
    </div>
  );
}







// import React from "react";
// import { Grid } from "@material-ui/core";
// import Content from "./Content";
// import ClinicForPharmacy from "./ClinicForPharmacy";

// const demo = () => {
//   return (
//     <Grid container direction="column">
//       <Grid item container>
//         <Grid item xs={false} sm={2} />
//         <Grid item xs={12} sm={8}>
//           {/* <Content /> */}
//           <ClinicForPharmacy />
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default demo;
