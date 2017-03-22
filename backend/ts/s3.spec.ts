const { expect } = require('chai');
const bucketName = 'bucket-name';
import { s3Factory } from './s3';

describe('s3 functions', () => {
  let s3;
  let lv2;

  beforeEach(() => {
    s3 = s3Factory({
      listObjectsV2: (...args) => lv2(...args),
    }, bucketName);
  });

  describe('list function', () => {
    it('should list keys in a bucket', (done) => {
      lv2 = (params, cb) => cb(null, {
        Contents: [{
          Key: 'post-0',
        }, {
          Key: 'post-1'
        }, {
          Key: 'post-2'
        }],
        NextContinuationToken: undefined,
      });
      s3.list((err, result) => {
        expect(result.keys).to.deep.equal(['post-0', 'post-1', 'post-2']);
        done(err);
      });
    });

    it('should support continuation tokens', (done) => {
      lv2 = (params, cb) => cb(null, {
        Contents: [{
          Key: 'post-0',
        }, {
          Key: 'post-1'
        }, {
          Key: 'post-2'
        }],
        NextContinuationToken: undefined,
      });
      s3.list('token', (err, result) => {
        expect(result.keys).to.deep.equal(['post-0', 'post-1', 'post-2']);
        done(err);
      });
    });
  });
});
