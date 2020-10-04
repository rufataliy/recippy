import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeApiRequest } from "../../../utils";
import { useStore } from "../../../customHooks";
import { categories as icons } from "../../../asssets/img/icons";

export const ByCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const { searchByCategory, getRandomRecipes } = useStore();
  useEffect(() => {
    makeApiRequest(
      `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?c=list`,
      (data) => setCategories(data.meals)
    );
  }, []);
  const handleChange = (value: string) => [setSelectedTab(value)];
  const getRecipesByCountry = (value: string) => {
    console.log(value);
  };
  const search = () => {
    searchByCategory(selectedTab);
  };
  const clearFilter = () => {
    if (selectedTab) {
      setSelectedTab(null);
      getRandomRecipes();
    }
  };

  return (
    <div className="country-section secondary-tab-section">
      <div className="tab-section">
        <AppBar className="filterBar" position="static" color="default">
          <Tabs
            value={selectedTab}
            onChange={(event, value) => handleChange(value)}
            variant="scrollable"
            scrollButtons="on"
            className="filter-tab-header"
            aria-label="scrollable auto tabs example"
          >
            {categories &&
              categories.map((category) => {
                return (
                  <Tab
                    onClick={getRecipesByCountry}
                    className="tab-btn"
                    label={category.strCategory}
                    value={category.strCategory}
                  />
                );
              })}
          </Tabs>
        </AppBar>
      </div>
      <div className="btn-group">
        <Button
          onClick={search}
          size="large"
          className="bg-btn"
          fullWidth
          type="submit"
        >
          search
        </Button>
        <Button size="small" onClick={clearFilter}>
          Clear
        </Button>
      </div>
    </div>
  );
};
