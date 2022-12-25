import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeApiRequest } from "@/utils";
import { useStore } from "@/customHooks";
import { ContentLoader } from "@/views";
import { CATEGORY, SEARCH_BTN } from "@/common/testIds";
import { API_CATEGORY_LIST } from "@/common/api-endpoints";

export const ByCategory = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | false>(false);
  const { searchByCategory, getRandomRecipes } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    makeApiRequest(
      API_CATEGORY_LIST,
      (data) => setCategories(data.meals),
      setLoading
    );
  }, []);

  const handleChange = (value: string) => [setSelectedTab(value)];

  const searchHandler = () => {
    if (selectedTab) {
      searchByCategory(selectedTab);
    }
  };

  const clearFilter = () => {
    if (selectedTab) {
      setSelectedTab(false);
      getRandomRecipes();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (Boolean(selectedTab)) {
        return searchHandler();
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
                {categories.map((category, index) => {
                  if (category) {
                    return (
                      <Tab
                        key={index}
                        data-testid={CATEGORY + index}
                        className="tab-btn"
                        label={category.strCategory}
                        value={category.strCategory}
                      />
                    );
                  } else {
                    return null;
                  }
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
          data-testid={SEARCH_BTN}
          className="bg-btn bigger-btn"
          type="submit"
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
