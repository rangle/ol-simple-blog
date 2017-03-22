import { cors } from './cors';

export function handler(event: any, context: any, callback: Function) {
  callback(null, cors(200, [
    {
      id: 'entropy-things-test-1',
      title: 'Test 1',
      body: 'The quick brown fox...',
      date: Date.now(),
      author: 'Somebody'
    },
    {
      id: 'entropy-things-test-2',
      title: 'Test 2',
      body: 'Lorem Ipsump',
      date: Date.now(),
      author: 'Nobody'
    }
  ]));
}
