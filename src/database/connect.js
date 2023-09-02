const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.sf5boqx.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function connectToDataBase() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Erro na conexão com o banco de dados ", error);
  }
}

module.exports = connectToDataBase;
