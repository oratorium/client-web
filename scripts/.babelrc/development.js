const dotenv = require("dotenv");
const typeChecker = require("./typeChecker");

dotenv.config({ path: ".env.development.local" });
dotenv.config({ path: ".env.development" });
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

typeChecker.valid("PORT", "port");
