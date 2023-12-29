import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingCommentService } from '../../../src/services/ticketingComment/TicketingComment';

describe('test TicketingCommentService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingCommentService).toBe('function');
  });
});

describe('test TicketingComment', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .getComments('cumque', 'eaque', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.getComments()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingComment.getComments('maxime', 'recusandae', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .addComment({}, 'veritatis', 'vel', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.addComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingComment.addComment({}, 'nostrum', 'velit', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=3545293619')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .updateComment('3545293619')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=8420849094')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.updateComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=6888298212')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComment.updateComment('6888298212'),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/2489149250?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .getComment('2489149250', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/6798434523?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/5727737882?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComment.getComment('5727737882', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment/batch?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .addComments({}, 'fugit', 'ex', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment/batch?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.addComments()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment/batch?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingComment.addComments({}, 'nam', 'magni', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
