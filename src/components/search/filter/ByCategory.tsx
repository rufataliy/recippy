import React, { useState, useEffect, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeApiRequest } from "../../../utils";
import { useStore } from "../../../customHooks";
import { ContentLoader } from "../../../views";

export const ByCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const { searchByCategory, getRandomRecipes } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeApiRequest(
      `https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/list.php?c=list`,
      (data) => setCategories(data.meals),
      setLoading
    );
  }, []);

  const handleChange = (value: string) => [setSelectedTab(value)];

  const search = () => {
    searchByCategory(selectedTab);
  };
  const clearFilter = () => {
    if (selectedTab) {
      setSelectedTab(null);
      getRandomRecipes();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (Boolean(selectedTab)) {
        return searchByCategory(selectedTab);
      }
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
            {categories && (
              <Tabs
                value={selectedTab}
                onChange={(event, value) => handleChange(value)}
                variant="scrollable"
                scrollButtons="on"
                className="filter-tab-header"
                aria-label="scrollable auto tabs example"
              >
                {categories.map((category) => {
                  if (category) {
                    return (
                      <Tab
                        className="tab-btn"
                        label={category.strCategory}
                        value={category.strCategory}
                      />
                    );
                  } else {
                    return 0;
                  }
                })}
              </Tabs>
            )}
          </ContentLoader>
        </AppBar>
      </div>
      <div className="btn-group">
        <Button
          onClick={() => searchByCategory(selectedTab)}
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
