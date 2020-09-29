import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { ByName } from "./ByName";

const CATEGORIES = "categories";
const INGREDIENTS = "ingredients";
const COUNTRIES = "countries";
const NAME = "name";

interface TabPanelProps {
  children?: React.ReactNode;
  selectedTab: string;
  tabName: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, selectedTab, tabName, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabName !== selectedTab}
      id={`scrollable-auto-tabpanel-${tabName}`}
      aria-labelledby={`scrollable-auto-tab-${tabName}`}
      {...other}
    >
      {tabName === selectedTab && children}
    </div>
  );
}

export function Filter() {
  const [selectedTab, setSelectedTab] = useState(INGREDIENTS);
  const [collapsed, setCollapsed] = useState(false);

  const handleChange = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const toggleFilter = () => {
    setCollapsed(!collapsed);
  };

  const openFilter = () => {
    setCollapsed(false);
  };

  return (
    <>
      <AppBar className="filterBar" position="static" color="default">
        <div className="content-wrapper">
          <Tabs
            value={selectedTab}
            onChange={(event, value) => handleChange(value)}
            variant="scrollable"
            scrollButtons="auto"
            className="filter-tab-header"
            aria-label="scrollable auto tabs example"
          >
            <Button className="tab-title" onClick={toggleFilter}>
              Search By
            </Button>
            <Tab
              onClick={openFilter}
              className="tab-btn"
              label="Name"
              value={NAME}
            />
            <Tab
              onClick={openFilter}
              className="tab-btn"
              label="Ingredient"
              value={INGREDIENTS}
            />
            <Tab
              onClick={openFilter}
              className="tab-btn"
              label="Category"
              value={CATEGORIES}
            />
            <Tab
              onClick={openFilter}
              className="tab-btn"
              label="Country"
              value={COUNTRIES}
            />
          </Tabs>
        </div>
      </AppBar>
      <div className={`tab-content-filter ${collapsed ? "collapsed" : ""}`}>
        <div className="content-wrapper">
          <TabPanel selectedTab={selectedTab} tabName={NAME}>
            <ByName />
          </TabPanel>
          <TabPanel selectedTab={selectedTab} tabName={INGREDIENTS}>
            ingredients
          </TabPanel>
          <TabPanel selectedTab={selectedTab} tabName={CATEGORIES}>
            Category
          </TabPanel>
          <TabPanel selectedTab={selectedTab} tabName={COUNTRIES}>
            Country
          </TabPanel>
        </div>
      </div>
    </>
  );
}
