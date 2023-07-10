const express = require('express');
const greetingRoutes = require('./routes/greetingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/greeting', greetingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // for testing