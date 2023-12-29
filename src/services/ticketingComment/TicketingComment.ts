import BaseService from '../../BaseService';

import { UnifiedCommentInput } from './models/UnifiedCommentInput';
import { AddCommentsRequest } from './models/AddCommentsRequest';

import { serializeQuery, serializeHeader, serializePath } from '../../http/QuerySerializer';

export class TicketingCommentService extends BaseService {
  /**
   * @summary List a batch of Comments

   * @param integrationId Needed input variable
   * @param linkedUserId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<any>} - The promise with the result
   */
  async getComments(
    integrationId: string,
    linkedUserId: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<any> {
    const { remoteData } = optionalParams;
    if (integrationId === undefined || linkedUserId === undefined) {
      throw new Error(
        'The following are required parameters: integrationId,linkedUserId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (integrationId !== undefined) {
      headers['integrationId'] = serializeHeader(false, integrationId);
    }
    if (linkedUserId !== undefined) {
      headers['linkedUserId'] = serializeHeader(false, linkedUserId);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remoteData', remoteData));
    }
    const urlEndpoint = '/ticketing/comment';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
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
   * @summary Create a Comment
   * @description Create a ticket in any supported Ticketing software

   * @param integrationId The integration ID
   * @param linkedUserId The linked user ID
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<any>} - The promise with the result
   */
  async addComment(
    input: UnifiedCommentInput,
    integrationId: string,
    linkedUserId: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<any> {
    const { remoteData } = optionalParams;
    if (integrationId === undefined || linkedUserId === undefined) {
      throw new Error(
        'The following are required parameters: integrationId,linkedUserId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (integrationId !== undefined) {
      headers['integrationId'] = serializeHeader(false, integrationId);
    }
    if (linkedUserId !== undefined) {
      headers['linkedUserId'] = serializeHeader(false, linkedUserId);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remoteData', remoteData));
    }
    const urlEndpoint = '/ticketing/comment';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
   * @summary Update a Comment

   * @param id Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async updateComment(id: string): Promise<any> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (id) {
      queryParams.push(serializeQuery('form', true, 'id', id));
    }
    const urlEndpoint = '/ticketing/comment';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.patch(
      finalUrl,
      { id },
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = response.data;
    return responseModel;
  }

  /**
   * @summary Retrieve a Comment
   * @description Retrieve a ticket from any connected Ticketing software

   * @param id id of the `ticket` you want to retrive.
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<any>} - The promise with the result
   */
  async getComment(id: string, optionalParams: { remoteData?: boolean } = {}): Promise<any> {
    const { remoteData } = optionalParams;
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/ticketing/comment/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false, id, undefined));
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remoteData', remoteData));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
   * @summary Add a batch of Comments

   * @param integrationId Needed input variable
   * @param linkedUserId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.remoteData - Set to true to include data from the original Ticketing software.
   * @returns {Promise<any>} - The promise with the result
   */
  async addComments(
    input: AddCommentsRequest,
    integrationId: string,
    linkedUserId: string,
    optionalParams: { remoteData?: boolean } = {},
  ): Promise<any> {
    const { remoteData } = optionalParams;
    if (integrationId === undefined || linkedUserId === undefined) {
      throw new Error(
        'The following are required parameters: integrationId,linkedUserId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    if (integrationId !== undefined) {
      headers['integrationId'] = serializeHeader(false, integrationId);
    }
    if (linkedUserId !== undefined) {
      headers['linkedUserId'] = serializeHeader(false, linkedUserId);
    }
    if (remoteData) {
      queryParams.push(serializeQuery('form', true, 'remoteData', remoteData));
    }
    const urlEndpoint = '/ticketing/comment/batch';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
}
