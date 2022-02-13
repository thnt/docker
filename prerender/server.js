const prerender = require('prerender');
const server = prerender({
  chromeLocation: '/usr/bin/chromium-browser',
  chromeFlags: [
    '--no-sandbox',
    '--headless',
    '--disable-gpu',
    '--disable-software-rasterizer',
    '--disable-dev-shm-usage',
    '--remote-debugging-port=9222',
    '--hide-scrollbars',
  ],
});

server.use(require('prerender-memory-cache'));

server.start();
