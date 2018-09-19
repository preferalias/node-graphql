export default {
  Query: {
    allProducts: (parent, args, { db }) => db.product.findAll(),
    getProduct: (parent, args, { db }) => db.product.findOne({where: {
      id:args.id
    }})
  },
  Mutation: {
    createProduct: (parent, args, { db }) => db.product.create(args),
    updateProduct: (parent, args, { db }) => {
      const product = db.product.update({
        name: args.name,
        price: args.price
      },{
        where : {
          id: args.id
        }
      }).then(productID => db.product.findOne({where: {
        id: args.id
      }}))
      return product
    } ,
    deleteProduct: (parent, args, { db }) => {
      const result = db.product.destroy({
        where: {
          id: args.id
        }
      }).then(rowCount => {
        if(rowCount > 0) {
          return {
            error: false,
            message: `${rowCount} rows affected`
          }
        } else {
          return{
            error: true,
            message: `product not found`
          }
        }
      })
      return result
    }
  }
}