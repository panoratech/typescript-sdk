/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketingautomationUsersList } from "../funcs/marketingautomationUsersList.js";
import { marketingautomationUsersRetrieve } from "../funcs/marketingautomationUsersRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PanoraMarketingautomationUsers extends ClientSDK {
  /**
   * List  Users
   */
  async list(
    request: operations.ListMarketingAutomationUsersRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListMarketingAutomationUsersResponse>> {
    return unwrapResultIterator(marketingautomationUsersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Users
   *
   * @remarks
   * Retrieve Users from any connected Marketingautomation software
   */
  async retrieve(
    request: operations.RetrieveMarketingAutomationUserRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedMarketingautomationUserOutput> {
    return unwrapAsync(marketingautomationUsersRetrieve(
      this,
      request,
      options,
    ));
  }
}
