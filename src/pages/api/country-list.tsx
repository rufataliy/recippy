import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const countries = await fetch(
    `https://www.themealdb.com/api/json/v2/${process.env.API_KEY}/list.php?a=list`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(countries));
};

export default handler;
