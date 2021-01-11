import React from "react";
import {
  fireEvent,
  act,
  render,
  waitFor,
  screen,
  cleanup,
} from "@testing-library/react";

import * as utilities from "@/utils";
import { ByCategory } from "../ByCategory";
import { StateProvider, store as mockStore } from "@/common/mockGlobalState";
import { CATEGORY, SEARCH_BTN } from "@/common/testIds";
import { server, categories } from "@/common/mockApi";

const categoryNames = categories.meals;
const index = 1;

const spy = jest.spyOn(mockStore, "searchByCategory");

describe("ByCategory", () => {
  it("should render with required props", () => {
    utilities.testSnapshotOf(
      <StateProvider>
        <ByCategory />
      </StateProvider>
    );
  });

  it("should renders tabs with values got from server", async () => {
    server.listen();

    act(() => {
      render(
        <StateProvider>
          <ByCategory />
        </StateProvider>
      );
    });

    waitFor(() => {}, { timeout: 2000 });

    const tab = await waitFor(() => screen.getByTestId(CATEGORY + index));

    expect(tab.textContent).toBe(categoryNames[index].strCategory);

    fireEvent.click(tab);

    const search_btn = screen.getByTestId(SEARCH_BTN);

    fireEvent.click(search_btn);

    expect(spy).toBeCalledTimes(1);

    server.close();
  });
  cleanup();
});
