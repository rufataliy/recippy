import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { StateProvider, store as mockStore } from "@/common/mockGlobalState";
import {
  ADD_BTN,
  INGREDIENT_,
  SEARCH_BTN,
  SEARCH_INPUT,
} from "@/common/testIds";
import { server } from "@/common/mockApi";
import { ByIngredient } from "../ByIngredient";

const CHICKEN = "chicken";

describe("ByIngredient", () => {
  server.listen();
  it("Should search by ingredient", () => {
    const spy = jest.spyOn(mockStore, "searchByIngredients");

    render(
      <StateProvider>
        <ByIngredient />
      </StateProvider>
    );

    const input = screen.getByTestId(SEARCH_INPUT);

    act(() => {
      fireEvent.change(input, { target: { value: CHICKEN } });
    });

    expect((input as HTMLInputElement).value).toBe(CHICKEN);

    const add_btn = screen.getByTestId(ADD_BTN);

    act(() => {
      fireEvent.click(add_btn);
    });

    expect(screen.getByTestId(INGREDIENT_ + CHICKEN)).toBeTruthy();

    const search_btn = screen.getByTestId(SEARCH_BTN);

    fireEvent.click(search_btn);
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(CHICKEN);
  });
  server.close();
});
