import BaseService from '../../BaseService';

import { CreateUserDto } from './models/CreateUserDto';
import { LoginDto } from './models/LoginDto';
import { ApiKeyDto } from './models/ApiKeyDto';

export class AuthService extends BaseService {
  /**
   * @summary Register

   * @returns {Promise<any>} - The promise with the result
   */
  async signUp(input: CreateUserDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/auth/register';
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
   * @summary Log In

   * @returns {Promise<any>} - The promise with the result
   */
  async signIn(input: LoginDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/auth/login';
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
   * @summary Get users

   * @returns {Promise<any>} - The promise with the result
   */
  async getUsers(): Promise<any> {
    const urlEndpoint = '/auth/users';
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
   * @summary Retrieve API Keys

   * @returns {Promise<any>} - The promise with the result
   */
  async getApiKeys(): Promise<any> {
    const urlEndpoint = '/auth/api-keys';
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
   * @summary Create API Key

   * @returns {Promise<any>} - The promise with the result
   */
  async generateApiKey(input: ApiKeyDto): Promise<any> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/auth/generate-apikey';
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
