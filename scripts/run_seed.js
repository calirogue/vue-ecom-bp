const seed = require("./seed");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env.server")
});
const { MONGO_DB_URI, DB_NAME } = process.env;

mongoose.connect(`${MONGO_DB_URI}/${DB_NAME}`, {
  useNewUrlParser: true, useCreateIndex: true
});

(async () => {
  try {
    await seed.users();
    console.log("Successfully seeded user accounts");
    const items = await seed.items();
    console.log(`Successfully seeded ${items.length} items`);
    const sorts = await seed.sorts();
    console.log(`Successfully seeded ${sorts.length} sorts`);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
