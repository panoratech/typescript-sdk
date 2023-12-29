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
        .get('/ticketing/ticket?integrationId=doloremque&linkedUserId=dolores&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTickets('doloremque', 'dolores', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?integrationId=vel&linkedUserId=a&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket?integrationId=sapiente&linkedUserId=quis&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTickets('sapiente', 'quis', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=hic&linkedUserId=aspernatur&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTicket({}, 'hic', 'aspernatur', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=a&linkedUserId=quo&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket?integrationId=fugiat&linkedUserId=iure&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.addTicket({}, 'fugiat', 'iure', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=2305233341')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .updateTicket('2305233341')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=9427665295')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.updateTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/ticketing/ticket?id=2765622695')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.updateTicket('2765622695'),
      ).rejects.toThrow();
    });
  });

  describe('test getTicket', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/4974642204?remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .getTicket('4974642204', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/5176870825?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.getTicket()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/ticketing/ticket/6625365781?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.ticketingTicket.getTicket('6625365781', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addTickets', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=repellat&linkedUserId=quia&remote_data=true')
        .reply(200, { data: {} });
      return sdk.ticketingTicket
        .addTickets({}, 'repellat', 'quia', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=a&linkedUserId=optio&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.ticketingTicket.addTickets()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/ticketing/ticket/batch?integrationId=est&linkedUserId=praesentium&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.ticketingTicket.addTickets({}, 'est', 'praesentium', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
