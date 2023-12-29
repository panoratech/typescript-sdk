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
        .getComments('sit', 'quam', { remoteData: true })
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
        async () => await sdk.ticketingComment.getComments('ea', 'deserunt', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .addComment({}, 'vitae', 'et', { remoteData: true })
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
          await sdk.ticketingComment.addComment({}, 'praesentium', 'voluptates', {
            remoteData: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test updateComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=2432060934')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .updateComment('2432060934')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=3838579316')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.updateComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=9517101145')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComment.updateComment('9517101145'),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/3306214887?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .getComment('3306214887', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/3963860219?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/8744094060?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComment.getComment('8744094060', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment/batch?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .addComments({}, 'a', 'fugiat', { remoteData: true })
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
          await sdk.ticketingComment.addComments({}, 'blanditiis', 'alias', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
