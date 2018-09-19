

export default (app, db) => {
  db
  .sequelize
  .sync({force: true})
  db.sequelize.authenticate()
    .then(() => console.log('Connection success'))
    .catch(err => console.log(err));
}