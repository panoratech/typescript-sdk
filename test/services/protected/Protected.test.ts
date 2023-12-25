import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { ProtectedService } from '../../../src/services/protected/Protected';

describe('test ProtectedService object', () => {
  it('should be an object', () => {
    expect(typeof ProtectedService).toBe('function');
  });
});

describe('test Protected', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test appControllerGetHello2', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev').get('/protected').reply(200, { data: {} });
      return sdk.protected.appControllerGetHello2().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
