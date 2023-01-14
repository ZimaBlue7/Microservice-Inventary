import app from "./app.js";
import { sequelize } from "./database/db.js";

const app = express();

async function main() {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
    app.listen(4000);
    console.log("server on port 4000");
  } catch (error) {
    console.error("unable to conecte to database", error);
  }
}

main();
