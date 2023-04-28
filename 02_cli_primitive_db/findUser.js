export default (db, query) => {
   return db.find((user) => user.name.toLowerCase() === query.toLowerCase())
}