const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config/db');
const config = require('./config/index');

const baseRoute = require('./routes/index');
const expenseRoutes = require('./routes/expenseDetails.server.routes');

const app = express();

app.use(bodyParser.json());

// Use routes
app.use('/', baseRoute);
app.use('/api', expenseRoutes);

const PORT = config.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
