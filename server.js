const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
const app = require('./app');

const port = process.env.PORT || 8008;
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connected successfully');
}).catch(err => {
    console.log(err);
});

app.listen(port, () => {
    console.log(`App running on ${port}`);
});