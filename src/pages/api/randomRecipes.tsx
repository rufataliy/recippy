import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const recipes = await fetch(
    "https://www.themealdb.com/api/json/v2/process.env.API_KEY/randomselection.php"
  )
    .then((res) => res.json())
    .then((data) => data);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(recipes));
};

export default handler;
