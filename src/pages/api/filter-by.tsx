import { NextApiHandler } from "next";

const filterBaseUrl = `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/filter.php`;

const handler: NextApiHandler = async (req, res) => {
  const { query } = req;
  const formFiltersUrl = (query: { [key: string]: string | string[] }) => {
    const { filterType, filterValue } = query;

    return `${filterBaseUrl}?${filterType}=${filterValue}`;
  };
  const recipes = await fetch(formFiltersUrl(query))
    .then((res) => res.json())
    .then((data) => data);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(recipes));
};

export default handler;
