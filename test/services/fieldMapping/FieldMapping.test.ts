import nock from 'nock';

import { PanoraSDK } from '../../../src';

import { FieldMappingService } from '../../../src/services/fieldMapping/FieldMapping';

describe('test FieldMappingService object', () => {
  it('should be an object', () => {
    expect(typeof FieldMappingService).toBe('function');
  });
});

describe('test FieldMapping', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new PanoraSDK({});

    nock.cleanAll();
  });

  describe('test getFieldMappingsEntities', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/entities')
        .reply(200, { data: {} });
      return sdk.fieldMapping
        .getFieldMappingsEntities()
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getFieldMappings', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/attribute')
        .reply(200, { data: {} });
      return sdk.fieldMapping.getFieldMappings().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getFieldMappingValues', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/value')
        .reply(200, { data: {} });
      return sdk.fieldMapping.getFieldMappingValues().then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test defineTargetField', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/field-mapping/define')
        .reply(200, { data: {} });
      return sdk.fieldMapping.defineTargetField({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test mapField', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .post('/field-mapping/map')
        .reply(200, { data: {} });
      return sdk.fieldMapping.mapField({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getCustomProviderProperties', () => {
    test('test api call', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/properties?linkedUserId=repellendus&providerId=1751770046')
        .reply(200, { data: {} });
      return sdk.fieldMapping
        .getCustomProviderProperties('repellendus', '1751770046')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/properties?linkedUserId=dolorum&providerId=8320022230')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.fieldMapping.getCustomProviderProperties(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/properties?linkedUserId=necessitatibus&providerId=9470034407')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.fieldMapping.getCustomProviderProperties('necessitatibus', '9470034407'),
      ).rejects.toThrow();
    });
  });
});
