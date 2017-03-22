import { BlogApiService } from './blog-api.service';

describe('BlogApiService', () => {
  it('it should be instantiatable', () => {
    const blog = new BlogApiService(<any>{
      list: () => {},
    });
    expect(blog).toBeTruthy();
  });
});
