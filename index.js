require("dotenv").config();
const { MigrateModels } = require("./src/models");

// Init DB Models
MigrateModels();
