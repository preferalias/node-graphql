export default `
  type Product {
    id: Int!
    name: String!
    price: Float!
  }

  type Query {
    allProducts: [Product!]
    getProduct(id: Int!): Product!
  }

  type DeleteProductResponse {
    error: Boolean!
    message: String!
  }
  type Mutation {
    createProduct(name: String!, price: Float!): Product!
    updateProduct(id: Int!, name: String!, price: Float!): Product!
    deleteProduct(id: Int!): DeleteProductResponse!
  }
`