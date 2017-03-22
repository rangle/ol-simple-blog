import * as AWS from 'aws-sdk';
import { cors } from './cors';
import { s3Factory } from './s3';

const S3 = new AWS.S3();
const s3 = s3Factory(S3, 'simple-blogs-bucket');

export function handler(event, context, callback) {
  if (!event.queryStringParameters) {
    const errString = 'no query string, expecting id=value';
    console.log(errString);
    callback(null, cors(400, { error: errString }));
    return;
  }

  if (!event.queryStringParameters.id) {
    const errString = 'id not set in url query string';
    console.log(errString);
    callback(null, cors(400, { error: errString }));
    return;
  }

  try {
    s3.get(event.queryStringParameters.id, (err, value) => {
      if (err) {
        console.log(err.message);
        callback(null, cors(502, { error: err.message }));
        return;
      }
      callback(null, cors(200, value));
    });
  } catch (err) {
    console.log(err.message);
    callback(null, cors(500, { error: err.message }));
  }
}
