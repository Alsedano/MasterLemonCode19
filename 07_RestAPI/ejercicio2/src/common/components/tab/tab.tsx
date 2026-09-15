import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Props {
  label1: string;
  children1: React.ReactNode;
  label2: string;
  children2: React.ReactNode;
  label3: string;
  children3: React.ReactNode;
  selectedValue: number;
}

export default function BasicTabs<prop>({
  label1,
  children1,
  label2,
  children2,
  label3,
  children3,
  selectedValue,
}) {
  const [value, setValue] = React.useState(selectedValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label={label1} {...a11yProps(0)} />
          <Tab label={label2} {...a11yProps(1)} />
          <Tab label={label3} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {children1}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {children2}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {children3}
      </CustomTabPanel>
    </Box>
  );
}
