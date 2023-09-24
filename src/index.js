const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');

const port = 5050;

const staticFiles = express.static(path.resolve(__dirname, "public"));
app.use(staticFiles);

app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views")

app.get('/', (req, res) => {
    res.render("index", )
})

app.listen(port, () => console.log(`Server is listening on port: ${port}...`))