const express = require("express");
const mongoose = require("mongoose"); //pour connecté ala basse
const dotenv = require("dotenv");
const cors = require("cors");
const categorieRouter = require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");

dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("bienvenu");
});
mongoose
  .connect(process.env.DATABASECLOUD)
  .then(() => console.log("connexion a la basse de donnee reuisit"))
  .catch((err) => {
    console.log("erreur de connection a la basse", err);
    process.exit();
  });
app.use("/api/categories", categorieRouter);
app.use("/api/scategories", scategorieRouter);
app.use("/api/articles", articleRouter);
app.listen(process.env.PORT, () => {
  console.log(`server is listen on port ${process.env.PORT}`);
});

module.exports = app;
