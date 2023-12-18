import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { CrmContactService } from '../../../src/services/crmContact/CrmContact';

describe('test CrmContactService object', () => {
  it('should be an object', () => {
    expect(typeof CrmContactService).toBe('function');
  });
});

describe('test CrmContact', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=possimus&linkedUserId=corrupti&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContacts('possimus', 'corrupti', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=quo&linkedUserId=nam&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=ad&linkedUserId=magni&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContacts('ad', 'magni', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=eos&linkedUserId=reiciendis&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContact({}, 'eos', 'reiciendis', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=illo&linkedUserId=corporis&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=eos&linkedUserId=expedita&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.addContact({}, 'eos', 'expedita', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=9951580690')
        .reply(200, { data: {} });
      return sdk.crmContact
        .updateContact('9951580690')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=9901117206')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=1102206491')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact('1102206491')).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/5278953643?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContact('5278953643', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/4616908422?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/9994602289?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContact('9994602289', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=veniam&linkedUserId=delectus&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContacts({}, 'veniam', 'delectus', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=corporis&linkedUserId=quibusdam&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=odit&linkedUserId=repellat&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.addContacts({}, 'odit', 'repellat', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
