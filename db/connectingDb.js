import mongoose from "mongoose";

const connectingDb = (url) => {
  const DB_OPTIONS = {
    dbName: "goal",
  };

  mongoose
    .connect(url, DB_OPTIONS)
    .then(() => {
      console.log("DB connect Okayyyyyyyyyyyy");
    })

    .catch((err) => console.log(err));
};

export default connectingDb;
