import BaseService from '../../BaseService';

import { WebhookDto } from './models/WebhookDto';

import { serializePath } from '../../http/QuerySerializer';

export class WebhookService extends BaseService {
  /**
   * @summary Retrieve webhooks metadata 

   * @returns {Promise<any>} - The promise with the result
   */
  async getWebhooksMetadata(): Promise<any> {
    const urlEndpoint = '/webhook';
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
   * @summary Add webhook metadata

   * @returns {Promise<any>} - The promise with the result
   */
  async createWebhookMetadata(input: WebhookDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/webhook';
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
   * @summary Update webhook status

   * @param id Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async updateWebhookStatus(id: string): Promise<any> {
    if (id === undefined) {
      throw new Error('The following parameter is required: id, cannot be empty or blank');
    }
    let urlEndpoint = '/webhook/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false, id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.put(
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
