import { handler } from './blog-list';
const expect = require('chai').expect;

describe('Blog List Endpoint', () => {
  xit('should callback successfully', (done) => {
    handler(null, null, (err, result) => {
      expect(err).to.equal(null);
      expect(result).to.equal('victory');
      done();
    });
  });
});
