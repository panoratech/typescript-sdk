import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { PassthroughService } from '../../../src/services/passthrough/Passthrough';

describe('test PassthroughService object', () => {
  it('should be an object', () => {
    expect(typeof PassthroughService).toBe('function');
  });
});

describe('test Passthrough', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test passthroughRequest', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/passthrough?integrationId=aperiam&linkedUserId=odit')
        .reply(200, { data: {} });
      return sdk.passthrough
        .passthroughRequest({}, 'aperiam', 'odit')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/passthrough?integrationId=quasi&linkedUserId=praesentium')
        .reply(200, { data: {} });
      return expect(async () => await sdk.passthrough.passthroughRequest()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/passthrough?integrationId=est&linkedUserId=sunt')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.passthrough.passthroughRequest({}, 'est', 'sunt'),
      ).rejects.toThrow();
    });
  });
});
