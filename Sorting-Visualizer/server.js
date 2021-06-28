
let express = require("express");
let app = express();

app.use(express.static("sorting_visualizer/"));
// Open http://localhost:8000/
let server = app.listen(8000, function () {
  app.get(function (req, res) {
    res.sendFile();
  });
});

let port = server.address().port;
console.log(`Express app listening at ${port}`);