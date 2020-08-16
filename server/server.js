const express = require('express')
const apiRouter = require('./routes')
const app = express()
const cors = require('cors')


app.use(cors());
app.use(express.json());

app.use('/api/products', apiRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});


