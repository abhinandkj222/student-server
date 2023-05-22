// import
const jsonServer = require('json-server')



// create json server application
const server =jsonServer.create()


// set up roueter

const router = jsonServer.router("db.json")


// return middlrware

const middleware = jsonServer.defaults()

// set up port number for server app

const port = process.env.PORT || 3000

// us erouter and middle ware im
server.use(middleware)
server.use(router)


// to listem the server app in port

server.listen(port,()=>{
    console.log(`contact server app started at port ${port}`);
})

