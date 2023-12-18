import BaseService from '../../BaseService';

import { CreateLinkedUserDto } from './models/CreateLinkedUserDto';

import { serializeQuery } from '../../http/QuerySerializer';

export class LinkedUsersService extends BaseService {
  /**
   * @summary Add Linked User

   * @returns {Promise<any>} - The promise with the result
   */
  async addLinkedUser(input: CreateLinkedUserDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/linked-users/create';
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
   * @summary Retrieve Linked Users

   * @returns {Promise<any>} - The promise with the result
   */
  async getLinkedUsers(): Promise<any> {
    const urlEndpoint = '/linked-users';
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
   * @summary Retrieve a Linked User

   * @param id Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async getLinkedUser(id: string): Promise<any> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/linked-users/single';
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
