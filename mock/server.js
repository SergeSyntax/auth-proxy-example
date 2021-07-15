const jsonServer = require('json-server');
const path = require('path');
const { requireAuthHeader, handleAuth } = require('./auth');
const { v4: uuidv4 } = require('uuid');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Set default middleware (logger, static, cors and no-cache)
app.use(jsonServer.defaults());
app.use(jsonServer.bodyParser);

app.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
    '/auth/registration': '/register',
    '/auth/login': '/login',
    '/auth/profile': '/profile',
  })
);
// Add custom routes before JSON Server router
handleAuth(app, router);

app.use(requireAuthHeader);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
app.use((req, res, next) => {
  switch (req.method) {
    case 'POST':
      req.body.id = uuidv4();
      if (/^(\/projects\/?)$/.test(req.url)) {
        req.body.owner = req.user.id;
      }
      if (/^\/projects\/.+\/sections\/?$/.test(req.url)) {
        console.log(req.url.split('/'));
        // const user = router.db.read().get('sections').find({ id:  }).value();

        // .sort((a, b) => a.order - b.order);
      }
      if (req.url === '/projects' || req.url === '/projects/') {
        // req.body.owner = req.user.id;
        // req.body.sections = [];
      }
      req.body.createdAt = new Date(Date.now()).toISOString();
      req.body.updateAt = new Date(Date.now()).toISOString();
      break;
    case 'PUT':
    case 'PATCH':
      req.body.updateAt = new Date(Date.now()).toISOString();
      break;
  }
  // Continue to JSON Server router
  next();
});

// You must apply the auth middleware before the router
app.use(router);
app.listen(5000, () => {
  console.log('JSON Server is running');
});

// // server.use(
// //   '/api',
// //   (req, res, next) => {
// //     if (req.method === 'POST' && req.url.includes('registration')) {
// //       return next();
// //     }
// //     // Continue to JSON Server router
// //   },
// //   router
// // );

// // Use default router
// server.use(router);
