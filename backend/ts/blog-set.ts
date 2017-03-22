import * as AWS from 'aws-sdk';
import { cors } from './cors';
import { s3Factory } from './s3';
import { isValidBlog as isValid } from './blog-validate';
import { defaultBlog } from './blog-validate';

const S3 = new AWS.S3();
const s3 = s3Factory(S3, 'simple-blogs-bucket');

export function handler(event: any, context: any, callback: Function) {

  if (!event.body) {
    const errString = 'empty body, expecting { key: string, value: string}';
    console.log(errString);
    callback(null, cors(400, {
      error: errString
    }));
    return;
  }

  let body;

  try {
    body = JSON.parse(event.body);
  } catch (err) {
    const errString = 'body parse error, invalid JSON';
    console.log(errString);
    callback(null, cors(400, {error: errString}));
    return;
  }

  if (!isValid(body)) {
    const errString = 'invalid blog format';
    console.log(errString);
    callback(null, cors(400, {error: errString}));
    return;
  }

  defaultBlog(body);

  try {
    s3.put(body.id, body, (err) => {
      if (err) {
        console.log(err.message);
        callback(null, cors(502, {error: err.message}));
        return;
      }
      callback(null, cors(200, {}));
    });
  } catch (err) {
    console.log(err.message);
    callback(null, cors(500, {error: err.message}));
  }
}
