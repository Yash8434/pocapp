import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Tabs, Tab, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Dummy table data
  const tableData1 = [
    { id: 1, name: 'Product A', price: '$100' },
    { id: 2, name: 'Product B', price: '$200' },
    { id: 3, name: 'Product C', price: '$300' },
  ];

  const tableData2 = [
    { id: 1, service: 'Service A', duration: '2 hours' },
    { id: 2, service: 'Service B', duration: '3 hours' },
    { id: 3, service: 'Service C', duration: '1 hour' },
  ];

  const tableData3 = [
    { id: 1, region: 'North', sales: 1000 },
    { id: 2, region: 'South', sales: 1500 },
    { id: 3, region: 'East', sales: 1200 },
  ];

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home Page
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (Hamburger menu) */}
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
        <List>
          <ListItem button onClick={() => setTabValue(0)}>
            <ListItemText primary="Tab 1" />
          </ListItem>
          <ListItem button onClick={() => setTabValue(1)}>
            <ListItemText primary="Tab 2" />
          </ListItem>
          <ListItem button onClick={() => setTabValue(2)}>
            <ListItemText primary="Tab 3" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box marginTop={8}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="tabs">
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
          <Tab label="Tab 3" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData1.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service</TableCell>
                  <TableCell>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData2.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.service}</TableCell>
                    <TableCell>{row.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Region</TableCell>
                  <TableCell>Sales</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData3.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.region}</TableCell>
                    <TableCell>{row.sales}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Box>
    </Box>
  );
};

// TabPanel Component to show content in each tab
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

export default Home;
