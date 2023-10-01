const mongoose = require("mongoose");

const UserScheema = new mongoose.Scheema(
  {
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true
    },
    profile_image: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const user = mongoose.model("user", UserScheema);
module.exports = user;
