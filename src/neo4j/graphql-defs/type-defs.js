const typeDefs = `#graphql

type Movie {
  _id: Float!
  countries: [String!]!
  imdbId: String!
  imdbRating: Float
  imdbVotes: Int
  languages: [String!]!
  movieId: String!
  plot: String
  poster: String
  released: String
  runtime: Int
  title: String!
  tmdbId: String
  year: Int
  users: [User!]! @relationship(type: "WATCHED_MOVIE", direction: IN)
}

type User {
  _id: Float!
  name: String!
  userId: String!
  email: String!
  password: String!
  nickName: String!
  country: String
  city: String
  watched: [Movie!]! @relationship(type: "WATCHED_MOVIE", direction: OUT)
}


`;
export default typeDefs;
