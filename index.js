//const { Person } = require("./person");
const dotenv = require("dotenv");

require("dotenv").config();

const connectToDataBase = require("./src/database/connect");

connectToDataBase();

//require("./modules/path");
//require("./modules/fs");
//require("./modules/http");
//require("./modules/express");

//const person = new Person("Lucas");
