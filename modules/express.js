const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello, world!</h1>");
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta ${port}!`));

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Ashish",
      email: "Ash@ish.com",
    },
    {
      name: "luizao",
      email: "luiz@ao.com",
    },
  ];
  res.status(200).json(users);
});
