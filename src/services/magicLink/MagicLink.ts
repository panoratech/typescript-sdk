import BaseService from '../../BaseService';

import { CreateMagicLinkDto } from './models/CreateMagicLinkDto';

import { serializeQuery } from '../../http/QuerySerializer';

export class MagicLinkService extends BaseService {
  /**
   * @summary Create a Magic Link

   * @returns {Promise<any>} - The promise with the result
   */
  async createMagicLink(input: CreateMagicLinkDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/magic-link/create';
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
   * @summary Retrieve Magic Links

   * @returns {Promise<any>} - The promise with the result
   */
  async getMagicLinks(): Promise<any> {
    const urlEndpoint = '/magic-link';
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
   * @summary Retrieve a Magic Link

   * @param id Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async getMagicLink(id: string): Promise<any> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/magic-link/single';
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
