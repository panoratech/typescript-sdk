/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsOffersList } from "../funcs/atsOffersList.js";
import { atsOffersRetrieve } from "../funcs/atsOffersRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Offers extends ClientSDK {
  /**
   * List  Offers
   */
  async list(
    request: operations.ListAtsOfferRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.ListAtsOfferResponse>> {
    return unwrapResultIterator(atsOffersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve Offers
   *
   * @remarks
   * Retrieve Offers from any connected Ats software
   */
  async retrieve(
    request: operations.RetrieveAtsOfferRequest,
    options?: RequestOptions,
  ): Promise<components.UnifiedAtsOfferOutput> {
    return unwrapAsync(atsOffersRetrieve(
      this,
      request,
      options,
    ));
  }
}
