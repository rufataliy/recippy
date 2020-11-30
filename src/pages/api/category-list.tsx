import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const categories = await fetch(
    `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/list.php?c=list`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify(categories));
};

export default handler;
