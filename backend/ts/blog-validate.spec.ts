import { expect } from 'chai';
import { defaultBlog, isValidBlog } from './blog-validate';

describe('blog validator', () => {
  describe('isValid', () => {
    it('should return false if blog has no id', () => {
      expect(isValidBlog({ body: '', title: '', author: '', date: Date.now() }))
        .to.equal(false);
    });

    it('should not allow ids shorter than ten characters', () => {
      expect(isValidBlog({
        id: '012345678', body: '', title: '', author: '', date: Date.now()
      })).to.equal(false);
    });

    it('should not allow blogs over 100 years old', () => {
      expect(isValidBlog({
        id: '012345678', body: '', title: '', author: '', date: Date.now() -
        100 * 365 * 24 * 60 * 60 * 1000 + 1
      })).to.equal(false);
    });
  });

  describe('defaultBlog function', () => {
    it('should force untitled titles to Untitled', () => {
      const blog =  {
        id: '012345678', body: '', title: '', author: '', date: Date.now()
      };
      defaultBlog(blog);
      expect(blog.title).to.equal('Untitled');
    });
  });
});

