import React from "react";
import {
  act,
  render,
  waitFor,
  screen,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import * as utilities from "@/utils";
import { StateProvider, store as mockStore } from "@/common/mockGlobalState";
import { COUNTRY, SEARCH_BTN } from "@/common/testIds";
import { countries } from "@/common/mockApi";
import { server } from "@/common/mockApi";
import { ByCountry } from "../ByCountry";

const countryNames = countries.meals;

const index = 1;

const spy = jest.spyOn(mockStore, "searchByCountry");

describe("ByCategory", () => {
  it("should render component", () => {
    utilities.testSnapshotOf(
      <StateProvider>
        <ByCountry />
      </StateProvider>
    );
  });

  it("should render tabs got from server", async () => {
    server.listen();

    act(() => {
      render(
        <StateProvider>
          <ByCountry />
        </StateProvider>
      );
    });

    waitFor(() => {}, { timeout: 2000 });

    const tab = await waitFor(() => screen.getByTestId(COUNTRY + index));

    expect(tab.textContent).toBe(countryNames[index].strArea);

    fireEvent.click(tab);

    const search_btn = screen.getByTestId(SEARCH_BTN);

    fireEvent.click(search_btn);

    expect(spy).toBeCalledTimes(1);

    server.close();
  });
  cleanup();
});
