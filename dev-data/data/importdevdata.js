const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
const Tour = require('../../models/tourModel');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connected successfully');
}).catch(err => {
    console.log(err);
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));
// console.log(tours)


const importData = async () => {
    try {
        await Tour.create(tours);
        console.log('Data successfully imported');
    } catch (err) {
        console.log(err);
    }
    process.exit();
}

const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data successfully deleted');
    } catch (err) {
        console.log(err);
    }
    process.exit();
}

// deleteData();
// importData();
if (process.argv[2] === '--import') {
    importData();
}

if (process.argv[2] === '--delete') {
    deleteData();
}

console.log(process.argv);

