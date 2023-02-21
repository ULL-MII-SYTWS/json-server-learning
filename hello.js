module.exports = (req, res, next) => {
  console.log("Hello from middleware")
  res.header('X-Hello', 'World')
  next()
}