import BaseService from '../../BaseService';

import { CreateProjectDto } from './models/CreateProjectDto';

export class ProjectsService extends BaseService {
  /**
   * @summary Retrieve projects

   * @returns {Promise<any>} - The promise with the result
   */
  async getProjects(): Promise<any> {
    const urlEndpoint = '/projects';
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
   * @summary Create a project

   * @returns {Promise<any>} - The promise with the result
   */
  async createProject(input: CreateProjectDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/projects/create';
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
