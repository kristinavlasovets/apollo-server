const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const app = express();

const root = {
  getByBreed: async ({ name }) => {
    const response = await fetch(process.env.API_URL + name, {
      headers: { "X-Api-Key": process.env.API_KEY },
      contentType: "application/json",
    });

    return response.json();
  },
};

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => console.log("server started on 5000 port"));
