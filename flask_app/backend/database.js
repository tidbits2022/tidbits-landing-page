const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://tidbits:B5DVwMkAv0CaiijV@cluster0.j2b4uc1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("Main");
const users = database.collection("users");
const items = database.collection("items");

module.exports = {
  users,
  items
}
