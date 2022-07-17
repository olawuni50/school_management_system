import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import {AppBar, Tabs, Tab, Typography, Box} from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const inforCreate=()=> {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Step One" {...a11yProps(0)} />
          <Tab label="Step Two" {...a11yProps(1)} />
          <Tab label="Step Three" {...a11yProps(2)} />
          <Tab label="Step Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Create an account/Sign Up, after creating an account you are automatically directed to the dashboard
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          On the dashboard page, you have 'Add Subject', "Check Result", "Profile" and an option to log out
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Click on add subject to add student's grades, click compute, then you will be automatically directed to check result
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Repeat Step 2 for each student.
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default inforCreate