//CONTOH 1 MEMBUAT PROGRAM NODE YANG BISA MENCETAK STRING "Hello World" DI TERMINAL
const TEXT = "Hello World"

function log(string) {
  console.log(string)
}

log(TEXT)


//CONTOH 2 DARI ASSIGNMENT COMPARISON NUMBER
var a = 2;
var b = 4;
var c = -3;

a >= b ? console.log("a is larger than b") : console.log("a is less than b");
b >= c ? console.log("b is larger than c") : console.log("b is less than c");


//CONTOH 3 DENGAN MEMAKAI LIBRARY RAMDA
const R = require("ramda")

const result = R.add(1, 2)

console.log(result)

//CONTOH 4 MENCETAK WEB PAGE DI HOSTNAME AND PORT LOCALHOST:3000
const http = require("http")

const HOST = "localhost"
const PORT = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end("Hello Server")
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("Something bad happened", err)
  }

  console.log(`Server is listening on ${HOST}:${PORT}`)

})