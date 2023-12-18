import BaseService from '../../BaseService';

import { CreateOrganizationDto } from './models/CreateOrganizationDto';

export class OrganisationsService extends BaseService {
  /**
   * @summary Retrieve Organisations

   * @returns {Promise<any>} - The promise with the result
   */
  async getOrganisations(): Promise<any> {
    const urlEndpoint = '/organisations';
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
   * @summary Create an Organisation

   * @returns {Promise<any>} - The promise with the result
   */
  async createOrganisation(input: CreateOrganizationDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/organisations/create';
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
}
