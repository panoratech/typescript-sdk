/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisCompaniesList } from "../funcs/hrisCompaniesList.js";
import { hrisCompaniesRetrieve } from "../funcs/hrisCompaniesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraCompanies extends ClientSDK {
  /**
   * List Companies
   */
  async list(
    request: operations.ListHrisCompaniesRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListHrisCompaniesResponse>> {
    return unwrapResultIterator(hrisCompaniesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Company
   *
   * @remarks
   * Retrieve a Company from any connected Hris software
   */
  async retrieve(
    request: operations.RetrieveHrisCompanyRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedHrisCompanyOutput> {
    return unwrapAsync(hrisCompaniesRetrieve(
      this,
      request,
      options,
    ));
  }
}
