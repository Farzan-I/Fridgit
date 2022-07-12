var mongoose = require("mongoose");
import {setCollectionName} from "../models/user.js"

beforeAll(function (done) {
  setCollectionName('testuser');
  mongoose.connect("mongodb+srv://BoB:BrainsOnBrioche@bobcluster.ntzdqlk.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
