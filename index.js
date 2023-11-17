require("dotenv").config();
const SequelizeModel = require("./src/models/index");

// Init DB Models
const { MigrateModels } = SequelizeModel();
MigrateModels();
