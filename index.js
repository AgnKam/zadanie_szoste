const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>The HTML5 Template</title>
      <meta name="description" content="The HTML5 Herald">
      <meta name="author" content="SitePoint">
      <link rel="stylesheet" href="css/styles.css?v=1.0">
    </head>
    <body>
      <h1>The HTMl5 Template</h1>
    </body>
    </html>
  `);
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = server;
