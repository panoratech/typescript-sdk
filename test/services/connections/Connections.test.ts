import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { ConnectionsService } from '../../../src/services/connections/Connections';

describe('test ConnectionsService object', () => {
  it('should be an object', () => {
    expect(typeof ConnectionsService).toBe('function');
  });
});

describe('test Connections', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test handleOAuthCallback', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections/oauth/callback?state=earum&code=ducimus&location=quasi')
        .reply(200, { data: {} });
      return sdk.connections
        .handleOAuthCallback('earum', 'ducimus', 'quasi')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections/oauth/callback?state=in&code=enim&location=officiis')
        .reply(200, { data: {} });
      return expect(async () => await sdk.connections.handleOAuthCallback()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections/oauth/callback?state=tempora&code=veniam&location=cupiditate')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.connections.handleOAuthCallback('tempora', 'veniam', 'cupiditate'),
      ).rejects.toThrow();
    });
  });

  describe('test getConnections', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/connections')
        .reply(200, { data: {} });
      return sdk.connections.getConnections().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});
