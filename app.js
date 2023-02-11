const express = require("express");
const {init} = require("./io");
const cors = require('cors');
const { default: mongoose } = require("mongoose");
const router = require("./routes/appointementRouter");
const controller = require("./contoller/appointmentController");

const app = express();
app.use(cors());
app.use(express.json());


const server = require('http').createServer(app);

// io.on('connection', socket => {
//     console.log("New user connected")
// });

const port = 3000;
mongoose.set('strictQuery', true);
const io = init(server);
mongoose
  .connect(
    "mongodb+srv://afnan:afnaniti@cluster0.dvtwxhf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
    server.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
  );
  })
  .catch(() => {
    console.log("Connection failed!");
  });



  app.use("/api", router);



app.use((err, req, res, next) => {
  console.log("Error middleware!");
  res.status(500).send("Error!");
});
