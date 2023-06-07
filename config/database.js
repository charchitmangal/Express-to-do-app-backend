const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("DB ka connection is Sucessful"))
    .catch(() => {console.log("Issue in DB Connection");
        console.log("Error aya hai Sir")
        console.log(error.message);
        process.exit(1);
    })
};

module.exports = dbConnect;


