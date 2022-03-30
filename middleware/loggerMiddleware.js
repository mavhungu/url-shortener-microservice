const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} - ${req.url} - ${req.body.url || req.params.short_url}`);
  
    next();
  }
  
  module.exports = loggerMiddleware