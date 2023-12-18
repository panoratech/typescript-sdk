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
        .get('/crm/contact?integrationId=facere&linkedUserId=doloremque&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContacts('facere', 'doloremque', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=voluptatibus&linkedUserId=atque&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact?integrationId=molestias&linkedUserId=exercitationem&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.crmContact.getContacts('molestias', 'exercitationem', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=deleniti&linkedUserId=iure&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContact({}, 'deleniti', 'iure', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=accusamus&linkedUserId=sit&remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact?integrationId=quidem&linkedUserId=doloremque&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.crmContact.addContact({}, 'quidem', 'doloremque', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test updateContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=5206851628')
        .reply(200, { data: {} });
      return sdk.crmContact
        .updateContact('5206851628')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=2456296185')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .patch('/crm/contact?id=7779550656')
        .reply(404, { data: {} });
      return expect(async () => await sdk.crmContact.updateContact('7779550656')).rejects.toThrow();
    });
  });

  describe('test getContact', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/3649636252?remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .getContact('3649636252', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/3367006863?remote_data=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.getContact()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/crm/contact/5208977213?remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.getContact('5208977213', { remoteData: true }),
      ).rejects.toThrow();
    });
  });

  describe('test addContacts', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=vero&linkedUserId=explicabo&remote_data=true')
        .reply(200, { data: {} });
      return sdk.crmContact
        .addContacts({}, 'vero', 'explicabo', { remoteData: true })
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post(
          '/crm/contact/batch?integrationId=perspiciatis&linkedUserId=similique&remote_data=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.crmContact.addContacts()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/crm/contact/batch?integrationId=minus&linkedUserId=totam&remote_data=true')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.crmContact.addContacts({}, 'minus', 'totam', { remoteData: true }),
      ).rejects.toThrow();
    });
  });
});
