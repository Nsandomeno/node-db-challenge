// import server
const server = require('./server.js');
// setup dyamic port
const PORT = process.env.PORT || 5000
// start the server
server.listen(PORT, () => {
    console.log(`***Listening on Port ${PORT}`)
})