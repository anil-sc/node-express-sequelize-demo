import express from 'express';
import usersRouter from '../routes/users';
const app = express();

app.set('json spaces', 2);
app.set('view engine', 'ejs');

// Routes
app.use('/users', usersRouter);

app.get('/',(req,res,next) => {
  if (Date.now() > 1518884643822)
    next('route');
  else
    next();
},(req,res,next) => {
  res.send('Hello world');
});

app.get('/',(req,res,next) => {
  res.send('Hello special world');
});

export default app;
