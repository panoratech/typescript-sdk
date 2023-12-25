import BaseService from '../../BaseService';

export class ProtectedService extends BaseService {
  async appControllerGetHello2(): Promise<any> {
    const urlEndpoint = '/protected';
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
}
