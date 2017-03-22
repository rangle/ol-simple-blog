import * as AWS from 'aws-sdk';
import { cors } from './cors';
import { s3Factory } from './s3';

const S3 = new AWS.S3();
const s3 = s3Factory(S3, 'simple-blogs-bucket');

export function handler(event, context, callback) {
  const token = event.token ? event.token : undefined;

  try {
    s3.list(token, (err, result) => {
      if (err) {
        console.log('error', err.message);
        callback(null, cors(500, { error: err.message }));
        return;
      }
      console.log('Success');
      if (result.keys && result.keys.length) {
        callback(null, cors(200, result));
      } else {
        callback(null, cors(200, [ {
          keys: {
            id: 'genesis-blog-' + Date.now().toString(16),
            title: 'Welcome to this blog platform',
            author: 'Open Lane',
            date: Date.now(),
          },
          token: undefined,
        }]));
      }
    });
  } catch (err) {
    console.log('fail', err.message);
    callback(null, cors(500, { error: err.message }));
  }
};
