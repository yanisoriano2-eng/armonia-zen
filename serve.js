/* Servidor estático mínimo para Armonía Zen.
   Uso:  node serve.js   →   http://localhost:8000  */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const ROOT = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webp': 'image/webp',
  '.woff': 'font/woff', '.woff2': 'font/woff2'
};

http.createServer((req, res) => {
  let pathname = decodeURIComponent(req.url.split('?')[0]);
  if (pathname === '/') pathname = '/index.html';
  let filePath = path.join(ROOT, pathname);
  // Evitar salir de la carpeta raíz
  if (!filePath.startsWith(ROOT)) { res.writeHead(403); return res.end('Forbidden'); }
  fs.stat(filePath, (err, stat) => {
    if (err || stat.isDirectory()) {
      // probar index.html dentro de la carpeta
      const alt = path.join(filePath, 'index.html');
      return fs.readFile(alt, (e2, data) => {
        if (e2) { res.writeHead(404); return res.end('404 — no encontrado: ' + pathname); }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(data);
      });
    }
    fs.readFile(filePath, (e, data) => {
      if (e) { res.writeHead(500); return res.end('500'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  });
}).listen(PORT, () => {
  console.log('Armonía Zen en  →  http://localhost:' + PORT + '/');
  console.log('Panel admin     →  http://localhost:' + PORT + '/admin/');
});
