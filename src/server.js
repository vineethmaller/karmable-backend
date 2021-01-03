import express from 'express';
import mongoose

import userRoute from './../src/routes/userRoute';


const app = express();
const PORT = process.env.PORT || 8080;



app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).send('You seem to be lost');
})

app.listen(PORT, () => {
  console.log(`Server is lauched on port ${PORT}`);
})
