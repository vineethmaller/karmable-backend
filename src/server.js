const express = require('express');

const { commonMiddleware } = require('./middlewares/commonMiddleware')

const userRoutes = require('./routes/userRoutes');

commonMiddleware(app, express)

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from the server side'
  });
});

app.use((req, res, next) => {
  res.status(404).send('You seem to be lost')
})

app.listen(PORT, () => {
  console.log(`Server is lauched on port ${PORT}`)
})
