/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsEeocsList } from "../funcs/atsEeocsList.js";
import { atsEeocsRetrieve } from "../funcs/atsEeocsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Eeocs extends ClientSDK {
  /**
   * List  Eeocss
   */
  async list(
    request: operations.ListAtsEeocsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAtsEeocsResponse>> {
    return unwrapResultIterator(atsEeocsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Eeocs
   *
   * @remarks
   * Retrieve a eeocs from any connected Ats software
   */
  async retrieve(
    request: operations.RetrieveAtsEeocsRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAtsEeocsOutput> {
    return unwrapAsync(atsEeocsRetrieve(
      this,
      request,
      options,
    ));
  }
}
