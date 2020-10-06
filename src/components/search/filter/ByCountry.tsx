import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeApiRequest } from "../../../utils";
import { useStore } from "../../../customHooks";
import { ContentLoader } from "../../../views";

export const ByCountry = () => {
  const [countries, setCountries] = useState<Area[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const { searchByCountry, getRandomRecipes } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeApiRequest(
      `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?a=list`,
      (data) => setCountries(data.meals),
      setLoading
    );
  }, []);

  const handleChange = (value: string) => setSelectedTab(value);

  const clearFilter = () => {
    if (selectedTab) {
      setSelectedTab(null);
      getRandomRecipes();
    }
  };

  const searchHandler = () => {
    if (Boolean(selectedTab)) {
      return searchByCountry(selectedTab);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="country-section secondary-tab-section"
    >
      <div className="tab-section">
        <AppBar className="filterBar" position="static" color="default">
          <ContentLoader loading={loading}>
            {countries && (
              <Tabs
                value={selectedTab}
                onChange={(event, value) => handleChange(value)}
                variant="scrollable"
                scrollButtons="on"
                className="filter-tab-header"
                aria-label="scrollable auto tabs example"
              >
                {countries.map((country) => {
                  return (
                    <Tab
                      className="tab-btn"
                      label={country.strArea}
                      value={country.strArea}
                    />
                  );
                })}
              </Tabs>
            )}
          </ContentLoader>
        </AppBar>
      </div>
      <div className="btn-group">
        <Button
          onClick={() => searchHandler()}
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
