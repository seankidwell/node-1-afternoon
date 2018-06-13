const express = require("express");
const bodyParser = require("body-parser");
const messagesController = require("./controllers/messages_controller")

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("../public/build"))

app.post("/api/messages", messagesController.create);
app.get("/api/messages", messagesController.read);
app.put("/api/messages/:id", messagesController.update);
app.delete("/api/messages/:id", messagesController.delete)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});