import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const recipe = await fetch(
    `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/lookup.php?i=${req.query.id}`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(recipe));
};

export default handler;
