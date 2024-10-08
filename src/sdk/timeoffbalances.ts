/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisTimeoffbalancesList } from "../funcs/hrisTimeoffbalancesList.js";
import { hrisTimeoffbalancesRetrieve } from "../funcs/hrisTimeoffbalancesRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Timeoffbalances extends ClientSDK {
  /**
   * List  TimeoffBalances
   */
  async list(
    request: operations.ListHrisTimeoffbalancesRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListHrisTimeoffbalancesResponse>> {
    return unwrapResultIterator(hrisTimeoffbalancesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Time off Balances
   *
   * @remarks
   * Retrieve Time off Balances from any connected Hris software
   */
  async retrieve(
    request: operations.RetrieveHrisTimeoffbalanceRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedHrisTimeoffbalanceOutput> {
    return unwrapAsync(hrisTimeoffbalancesRetrieve(
      this,
      request,
      options,
    ));
  }
}
