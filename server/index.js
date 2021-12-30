const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')
const seed = require('../script/seed');

const init = async () => {
  try {
    if(process.env.SEED === 'true'){
      await seed();
    }
    else {
      await db.sync()
    }
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
  } catch (ex) {
    console.log(ex)
  }
}

init()


// const path = require('path')
// const express = require('express');
// const app = express();
// const morgan = require('morgan');


// app.use(morgan('dev'));

// app.use(express.json())

// app.use(express.static(path.join(__dirname, '../public')));

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api', require('./apiRoutes')); // matches all requests to /api

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// })

// app.use((err, req, res, next) => {
//     console.error(err);
//     console.error(err.stack);
//     res.status(err.status || 500).send(err.message || 'Internal server error.');
// });

// module.exports = app
