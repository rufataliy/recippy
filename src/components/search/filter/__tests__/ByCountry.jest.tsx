import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  screen,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { StateProvider, store as mockStore } from "@/common/mockGlobalState";
import { COUNTRY, LOADER, SEARCH_BTN } from "@/common/testIds";
import { countries } from "@/common/mockApi";
import { server } from "@/common/mockApi";
import { ByCountry } from "../ByCountry";

const countryNames = countries.meals;

const index = 1;

const spy = jest.spyOn(mockStore, "searchByCountry");

describe("ByCategory", () => {
  it("should render tabs got from server", async () => {
    server.listen();

    render(
      <StateProvider>
        <ByCountry />
      </StateProvider>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId(LOADER));

    const tab = screen.getByTestId(COUNTRY + index);

    expect(tab.textContent).toBe(countryNames[index].strArea);

    fireEvent.click(tab);

    const search_btn = screen.getByTestId(SEARCH_BTN);

    fireEvent.click(search_btn);

    expect(spy).toBeCalledTimes(1);

    server.close();
  });
  cleanup();
});
