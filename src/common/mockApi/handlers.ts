import { rest } from "msw";
import { RequestHandlersList } from "msw/lib/types/setupWorker/glossary";
import { API_CATEGORY_LIST, API_COUNTRY_LIST } from "../api-endpoints";
import { categories, countries } from "./mockData";

export const handlers: RequestHandlersList = [
  rest.get(API_CATEGORY_LIST, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categories));
  }),
  rest.get(API_COUNTRY_LIST, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(countries));
  }),
];
