const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Dog {
    image_link: String
    name: String
    energy: Int
    min_life_expectancy: Int
    good_with_strangers: Int
    good_with_other_dogs: Int
  }

  type Query {
    getByBreed(name: String!): [Dog]
  }
`);

module.exports = schema;
