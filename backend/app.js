const express        = require("express");
const session        = require('express-session');
const morgan         = require('morgan');
const mongoose       = require("mongoose");
const bodyParser     = require("body-parser");
const cors           = require('cors');
const expressLayouts = require('express-ejs-layouts');
const compression    = require('compression');
require('dotenv').config();

const app = express();

// Compression
app.use(compression());

// Database URL
const db = process.env.DATABASE;

// Connect to MongoDB
mongoose
    .connect(db,{ 
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
);

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// app middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors()); // allows all origins

// import Routes
const ApiRoutes = require('./routes/index');

// middleware
app.use('/api', ApiRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
