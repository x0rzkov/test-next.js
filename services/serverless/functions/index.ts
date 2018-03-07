const _ = require('lodash');

import _ from 'lodash';

import { ServerRequest, ServerResponse } from 'http';

function capitalize(req: ServerRequest, res: ServerResponse) {
  let body: Buffer[] = [];

  req
    .on('error', (err) => {
      console.error(err);
    })
    .on('data', (chunk: Buffer) => {
      body.push(chunk);
    })
    .on('end', () => {
      const result = Buffer.concat(body).toString();
      res.end(_.capitalize(result));
    });
}

export default {
  capitalize,
};
