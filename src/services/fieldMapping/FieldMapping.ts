import BaseService from '../../BaseService';

import { DefineTargetFieldDto } from './models/DefineTargetFieldDto';
import { MapFieldToProviderDto } from './models/MapFieldToProviderDto';

import { serializeQuery } from '../../http/QuerySerializer';

export class FieldMappingService extends BaseService {
  /**
   * @summary Retrieve field mapping entities

   * @returns {Promise<any>} - The promise with the result
   */
  async getFieldMappingsEntities(): Promise<any> {
    const urlEndpoint = '/field-mapping/entities';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Retrieve field mappings

   * @returns {Promise<any>} - The promise with the result
   */
  async getFieldMappings(): Promise<any> {
    const urlEndpoint = '/field-mapping/attribute';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Retrieve field mappings values

   * @returns {Promise<any>} - The promise with the result
   */
  async getFieldMappingValues(): Promise<any> {
    const urlEndpoint = '/field-mapping/value';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Define target Field

   * @returns {Promise<any>} - The promise with the result
   */
  async defineTargetField(input: DefineTargetFieldDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/field-mapping/define';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Map Custom Field

   * @returns {Promise<any>} - The promise with the result
   */
  async mapField(input: MapFieldToProviderDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/field-mapping/map';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Retrieve Custom Properties

   * @param linkedUserId Needed input variable
   * @param providerId Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async getCustomProviderProperties(linkedUserId: string, providerId: string): Promise<any> {
    if (linkedUserId === undefined || providerId === undefined) {
      throw new Error(
        'The following are required parameters: linkedUserId,providerId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    if (linkedUserId) {
      queryParams.push(serializeQuery('form', true, 'linkedUserId', linkedUserId));
    }
    if (providerId) {
      queryParams.push(serializeQuery('form', true, 'providerId', providerId));
    }
    const urlEndpoint = '/field-mapping/properties';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }
}
