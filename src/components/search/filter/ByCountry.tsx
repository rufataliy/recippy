import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeApiRequest } from "../../../utils";
import { useStore } from "../../../customHooks";

export const ByCountry = () => {
  const [countries, setCountries] = useState<Area[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const { searchByCountry, getRandomRecipes } = useStore();
  useEffect(() => {
    makeApiRequest(
      `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?a=list`,
      (data) => setCountries(data.meals)
    );
  }, []);
  const handleChange = (value: string) => [setSelectedTab(value)];
  const getRecipesByCountry = (value: string) => {
    console.log(value);
  };
  const search = () => {
    searchByCountry(selectedTab);
  };
  const clearFilter = () => {
    if (selectedTab) {
      setSelectedTab(null);
      getRandomRecipes();
    }
  };

  return (
    <div className="country-section">
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
            {countries &&
              countries.map((country) => {
                return (
                  <Tab
                    onClick={getRecipesByCountry}
                    className="tab-btn"
                    label={country.strArea}
                    value={country.strArea}
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
