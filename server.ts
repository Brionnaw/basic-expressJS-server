
  import express = require('express');

  let app = express();

  app.get('/', ((req,res) => {
    res.send('Hello World'); // send this response back to this server
  }))

let server = app.listen(3000, (()=>{
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Server is running on ${host} ${port}`);
});
