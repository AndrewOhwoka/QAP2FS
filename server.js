const http = require('http');
const fs = require('fs');
const path = require('path');

const route = require('./routes.js');
const myEmitter = require('./logEvents.js');

global.DEBUG = true;

const server = http.createServer((request, response) => {
  if(DEBUG) console.log('Request Url:', request.url);
  let path = './views/';
  switch(request.url) {
    case '/':
      path += 'index.html';
      if(DEBUG) console.log(path);
      route.indexPage(path, response);
      myEmitter.emit('route', path);
      break;
    case '/about':
      path += 'about.html';
      if(DEBUG) console.log(path);
      route.aboutPage(path, response);
      myEmitter.emit('route', path);
      break;
      case '/products':
      path += 'products.html';
      if(DEBUG) console.log(path);
      route.productsPage(path, response);
      myEmitter.emit('route', path);
      break;
      case '/services':
      path += 'services.html';
      if(DEBUG) console.log(path);
      route.servicesPage(path, response);
      myEmitter.emit('route', path);
      break;
      case '/careers':
      path += 'careers.html';
      if(DEBUG) console.log(path);
      route.careersPage(path, response);
      myEmitter.emit('route', path);
      break;
      case '/contact':
      path += 'contact.html';
      if(DEBUG) console.log(path);
      route.contactPage(path, response);
      myEmitter.emit('route', path);
      break;
    case '/home':
      path += 'home.html';
      if(DEBUG) console.log(path);
      route.homePage(path, response);
      myEmitter.emit('route', path);
      break;
    default:
      if(DEBUG) console.log('404 Not Found');
      myEmitter.emit('error', '404 Not Found');
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('404 Not Found');
      break;
  }
});

server.listen(3000, () => {
  console.log('Server is running...');
});