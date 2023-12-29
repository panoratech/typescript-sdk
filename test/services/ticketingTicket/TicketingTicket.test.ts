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
        .getTickets('voluptate', 'quam', { remoteData: true })
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
        async () =>
          await sdk.ticketingTicket.getTickets('perspiciatis', 'dicta', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTicket({}, 'atque', 'rem', { remoteData: true })
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
          await sdk.ticketingTicket.addTicket({}, 'facilis', 'blanditiis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=7989393513')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .updateTicket('7989393513')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=1138293873')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=3248991536')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.updateTicket('3248991536'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/2847755956?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTicket('2847755956', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/5352006835?remoteData=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/9815105769?remoteData=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTicket('9815105769', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?remoteData=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTickets({}, 'provident', 'esse', { remoteData: true })
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
          await sdk.ticketingTicket.addTickets({}, 'dignissimos', 'iste', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
