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
        .getComments('modi', 'ratione', { remoteData: true })
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
          await sdk.ticketingComment.getComments('veritatis', 'dolore', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .addComment({}, 'adipisci', 'repudiandae', { remoteData: true })
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
          await sdk.ticketingComment.addComment({}, 'corporis', 'temporibus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=5688053929')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .updateComment('5688053929')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=5731645878')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.updateComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/comment?id=5891402518')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComment.updateComment('5891402518'),
      ).rejects.toThrow();
    });
  });

  describe('test getComment', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/4299872562?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .getComment('4299872562', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/2012378156?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingComment.getComment()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/comment/4906354126?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingComment.getComment('4906354126', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addComments', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/comment/batch?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingComment
        .addComments({}, 'repellat', 'sed', { remoteData: true })
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
          await sdk.ticketingComment.addComments({}, 'laborum', 'nisi', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
