

import https from 'node:https';

https.get('https://swapi.dev/api/planets/4', {rejectUnauthorized: false}, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    console.log(JSON.parse(d.toString()));
  });

}).on('error', (e) => {
  console.error(e);
});