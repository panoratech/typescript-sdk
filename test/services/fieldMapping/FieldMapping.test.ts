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
        .get('/field-mapping/properties?linkedUserId=incidunt&providerId=6090966273')
        .reply(200, { data: {} });
      return sdk.fieldMapping
        .getCustomProviderProperties('incidunt', '6090966273')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/properties?linkedUserId=neque&providerId=9299980101')
        .reply(200, { data: {} });
      return expect(
        async () => await sdk.fieldMapping.getCustomProviderProperties(),
      ).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api-demo.panora.dev')
        .get('/field-mapping/properties?linkedUserId=nostrum&providerId=2999101541')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.fieldMapping.getCustomProviderProperties('nostrum', '2999101541'),
      ).rejects.toThrow();
    });
  });
});
