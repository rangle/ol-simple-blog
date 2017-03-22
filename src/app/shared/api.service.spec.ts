import { ApiService } from './api.service';

describe('ApiService', () => {
  it('should construct an API Service Object', () => {
    const api = new ApiService(<any>{
      get: () => {},
      set: () => {}
    });
    expect(api).toBeTruthy();
  });
});
