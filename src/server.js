const express = require('express');

const userRoutes = require('./routes/userRoutes');

commonMiddleware(app, express)

// Body parser, reading data from body into req.body
app.use(express.json());

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
