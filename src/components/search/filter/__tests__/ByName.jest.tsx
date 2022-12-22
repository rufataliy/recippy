import React from "react";
import {
  act,
  render,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import { StateProvider, store as mockStore } from "@/common/mockGlobalState";
import { SEARCH_BTN, SEARCH_INPUT } from "@/common/testIds";
import { server } from "@/common/mockApi";
import { ByName } from "../ByName";

const CHICKEN = "chicken";

describe("ByName", () => {
  server.listen();
  it("Should search by name", () => {
    const spy = jest.spyOn(mockStore, "searchByName");

    render(
      <StateProvider>
        <ByName />
      </StateProvider>
    );

    const input = screen.getByTestId(SEARCH_INPUT);

    fireEvent.change(input, { target: { value: CHICKEN } });

    expect((input as HTMLInputElement).value).toBe(CHICKEN);

    const search_btn = screen.getByTestId(SEARCH_BTN);

    fireEvent.click(search_btn);

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(CHICKEN);
  });
  server.close();
});
