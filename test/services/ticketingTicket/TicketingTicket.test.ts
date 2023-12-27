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
        .get(
          '/ticketing/ticket?integrationId=exercitationem&linkedUserId=eligendi&remote_data=true',
        )
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTickets('exercitationem', 'eligendi', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get(
          '/ticketing/ticket?integrationId=necessitatibus&linkedUserId=molestias&remote_data=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?integrationId=ad&linkedUserId=iure&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTickets('ad', 'iure', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=fugit&linkedUserId=asperiores&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTicket({}, 'fugit', 'asperiores', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=beatae&linkedUserId=earum&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=veniam&linkedUserId=quod&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.addTicket({}, 'veniam', 'quod', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=9054230262')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .updateTicket('9054230262')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=1206848788')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=6141845132')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.updateTicket('6141845132'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/9658265936?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTicket('9658265936', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/1022161865?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/4183880832?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTicket('4183880832', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=et&linkedUserId=earum&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTickets({}, 'et', 'earum', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=quia&linkedUserId=labore&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=animi&linkedUserId=expedita&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingTicket.addTickets({}, 'animi', 'expedita', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
