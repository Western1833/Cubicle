const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const port = 5050;

app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views")

app.get('/', (req, res) => {
    res.render("index", )
})

app.listen(port, () => console.log(`Server is listening on port: ${port}...`))