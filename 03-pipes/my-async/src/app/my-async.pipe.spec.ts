import { MyAsyncPipe } from './my-async.pipe';

describe('MyAsyncPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAsyncPipe();
    expect(pipe).toBeTruthy();
  });
});
