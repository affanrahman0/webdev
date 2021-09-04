// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
      <style>
          
          .navbar{
              background-color: aqua;
              border-radius: 33px;
          }
          .navbar ul{ 
              overflow: auto;
           }
          .navbar li {
              float: left;
              list-style: none;
              margin:13px ;
              
          }
          .navbar li a{
              padding: 3px 3px;
              text-decoration: none;
              color: azure;
          }
          .search{
              float: right;
              padding: 12px 43px;
              
          }
          .navbar input{
              
              border-radius: 27px;
              border: 2px solid palegreen;
              padding: 3px 17px;
              width: 127px;
          }
          .navbar li a:hover{
              color: deeppink;
              background-color: lightblue;
          }
      </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">home</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <div class="search">
                      <input type="text" name="search" id="search" placeholder="Search this website">
                  </div>
              </ul>
          </nav>
      </header>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});