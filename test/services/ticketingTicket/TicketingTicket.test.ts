import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { TicketingTicketService } from '../../../src/services/ticketingTicket/TicketingTicket';

describe('test TicketingTicketService object', () => {
  it('should be an object', () => {
    expect(typeof TicketingTicketService).toBe('function');
  });
});

describe('test TicketingTicket', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTickets('officiis', 'deserunt', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTickets('fugiat', 'minus', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTicket({}, 'ex', 'quaerat', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingTicket.addTicket({}, 'officia', 'expedita', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=7711657794')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .updateTicket('7711657794')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=1848231679')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=6740084462')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.updateTicket('6740084462'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/8876465765?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTicket('8876465765', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/4971233391?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/5402263554?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTicket('5402263554', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTickets({}, 'recusandae', 'explicabo', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingTicket.addTickets({}, 'saepe', 'eaque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
