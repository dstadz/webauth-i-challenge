const server = require('./serve.js')
const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`\n** API running on port: ${PORT} **\n`);
})