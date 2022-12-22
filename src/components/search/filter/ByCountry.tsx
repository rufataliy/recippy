import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeApiRequest } from "@/utils";
import { useStore } from "@/customHooks";
import { ContentLoader } from "@/views";
import { COUNTRY, SEARCH_BTN } from "@/common/testIds";
import { API_COUNTRY_LIST } from "@/common/api-endpoints";

export const ByCountry = () => {
  const [countries, setCountries] = useState<Area[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | false>(false);
  const { searchByCountry, getRandomRecipes } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeApiRequest(
      API_COUNTRY_LIST,
      (data) => setCountries(data.meals),
      setLoading
    );
  }, []);

  const handleChange = (value: string) => setSelectedTab(value);

  const clearFilter = () => {
    if (selectedTab) {
      setSelectedTab(false);
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
                {countries.map((country, index) => {
                  return (
                    <Tab
                      key={index}
                      data-testid={COUNTRY + index}
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
          className="bg-btn bigger-btn"
          type="submit"
          data-testid={SEARCH_BTN}
        >
          search
        </Button>
        <Button className="smaller-btn" size="small" onClick={clearFilter}>
          Clear
        </Button>
      </div>
    </div>
  );
};
