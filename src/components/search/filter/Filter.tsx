import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { ByName } from "./ByName";
import { ByIngredient } from "./ByIngredient";
import { ExpandLessIcon, ExpandMoreIcon } from "../../../views/icons";

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
  const [selectedTab, setSelectedTab] = useState(NAME);
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
          <div className="tab-section">
            <Button
              startIcon={collapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              className="tab-title"
              onClick={toggleFilter}
            >
              Filter <span className="hide-on-mobile">&nbsp;By</span>
            </Button>
            <Tabs
              value={selectedTab}
              onChange={(event, value) => handleChange(value)}
              variant="scrollable"
              scrollButtons="on"
              className="filter-tab-header"
              aria-label="scrollable auto tabs example"
            >
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
        </div>
      </AppBar>
      <div className={`tab-content-filter ${collapsed ? "collapsed" : ""}`}>
        <div className="content-wrapper">
          <TabPanel selectedTab={selectedTab} tabName={NAME}>
            <ByName />
          </TabPanel>
          <TabPanel selectedTab={selectedTab} tabName={INGREDIENTS}>
            <ByIngredient />
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
