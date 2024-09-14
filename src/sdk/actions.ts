/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { marketingautomationActionsCreate } from "../funcs/marketingautomationActionsCreate.js";
import { marketingautomationActionsList } from "../funcs/marketingautomationActionsList.js";
import { marketingautomationActionsRetrieve } from "../funcs/marketingautomationActionsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Actions extends ClientSDK {
  /**
   * List Actions
   */
  async list(
    request: operations.ListMarketingautomationActionRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListMarketingautomationActionResponse>> {
    return unwrapResultIterator(marketingautomationActionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Action
   *
   * @remarks
   * Create a action in any supported Marketingautomation software
   */
  async create(
    request: operations.CreateMarketingautomationActionRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedMarketingautomationActionOutput> {
    return unwrapAsync(marketingautomationActionsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Actions
   *
   * @remarks
   * Retrieve Actions from any connected Marketingautomation software
   */
  async retrieve(
    request: operations.RetrieveMarketingautomationActionRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedMarketingautomationActionOutput> {
    return unwrapAsync(marketingautomationActionsRetrieve(
      this,
      request,
      options,
    ));
  }
}
