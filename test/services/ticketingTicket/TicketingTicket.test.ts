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
        .get('/ticketing/ticket?integrationId=non&linkedUserId=in&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTickets('non', 'in', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?integrationId=cum&linkedUserId=reiciendis&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?integrationId=tempore&linkedUserId=iusto&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTickets('tempore', 'iusto', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=quos&linkedUserId=perferendis&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTicket({}, 'quos', 'perferendis', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=inventore&linkedUserId=accusamus&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=reiciendis&linkedUserId=tenetur&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingTicket.addTicket({}, 'reiciendis', 'tenetur', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=7072530924')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .updateTicket('7072530924')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=7375988374')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=9255763802')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.updateTicket('9255763802'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/1756895894?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTicket('1756895894', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/9023512496?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/2905327031?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTicket('2905327031', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post(
          '/ticketing/ticket/batch?integrationId=voluptates&linkedUserId=ducimus&remote_data=true',
        )
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTickets({}, 'voluptates', 'ducimus', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post(
          '/ticketing/ticket/batch?integrationId=praesentium&linkedUserId=veritatis&remote_data=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=amet&linkedUserId=odio&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.addTickets({}, 'amet', 'odio', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
