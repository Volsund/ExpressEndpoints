const app = require("./server.js");


// app.listen(3000);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
