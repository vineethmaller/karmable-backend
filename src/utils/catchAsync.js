// Wrap async functions with this function in order to avoid try/catch syntax. 
// Ex: catchAsync(any async/await function)
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(err));
  };
};